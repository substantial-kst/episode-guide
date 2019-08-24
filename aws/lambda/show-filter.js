const AWS = require('aws-sdk');
const s3 = new AWS.S3();
/*
    QUERY STRING PARAMETERS
    p       - Program (Show)
    --------------- GENERAL SEARCH -------------------
    q       - All-purpose query parameter
                * Title
                * Character
                * Tags
                * Guest Stars
    --------------- ADVANCED SEARCH ------------------
    id      - ID string (Exact match)
    e       - Episode index (Exact match)
    s       - Season (Exact match)
    n       - Episode number (across seasons)
    t       - Title (Contains)
    d       - Description aka Summary (Contains)
    c       - Character (Array contains)
    g       - Guest Star (Array contains)
    tags    - Tags (Array contains)
    --------------------------------------------------
    dd      - Date (Air date)
    mm      - Month (Air date)
    yy      - Year (Air date)
    --------------------------------------------------
    u       - Union type ('e' = match exact combination; 'a' = match any)
*/
let showKey;

const PARAMS = {
    SHOW_KEY:       'p',
    GENERAL_QUERY:  'q',
    EPISODE_ID:     'id',
    SEASON:         's',
    EPISODE:        'e',
    NUMBER:         'n',
    TITLE:          't',
    DESCRIPTION:    'd',
    CHARACTER:      'c',
    GUEST_STAR:     'g',
    TAG:            'tt',
    DATE:           'dd',
    MONTH:          'mm',
    YEAR:           'yy',
    UNION_TYPE:     'u'
};

let resolver;
let rejecter;

const getS3Json = function(event, showKey) {
    s3.getObject({
        Bucket: 'episode-guide',
        Key: `data/${showKey}/${showKey}.json`
    }, (err, data) => {
        if (err) {
            // TODO: Extract Resolve/Reject logic from this method & use callbacks or async/await
            rejecter({
                statusCode: 500,
                body: JSON.stringify(err)
            });
        } else {
            const s3jsonString = data.Body.toString('utf-8');
            filterData(event, s3jsonString);
        }
    });
};

const filterNestedArrayByKeyAndValue = function (propKey, propVal, dataArr) {
    let returnArr = [];
    dataArr.forEach(item => {
        let matches = [];
        item[propKey].find(val => {
            if (val.toLowerCase().indexOf(propVal.toLowerCase()) > -1) {
                matches.push(val);
            }
        });
        if (!!matches.length) {
            returnArr.push(item);
        }
    });
    return returnArr;
};

const filterAllItemsByYear = function (yearValue, data) {
    return data.filter(item => (String(item.broadcast.year) === yearValue));
};

const filterAllItemsByMonth = function (monthValue, data) {
    return data.filter(item => (String(item.broadcast.month) === monthValue));
};

const filterAllItemsByDate = function (dateValue, data) {
    return data.filter(item => (String(item.broadcast.date) === dateValue));
};

const filterAllItemsByTag = function (tagValue, data) {
    return filterNestedArrayByKeyAndValue('tags', tagValue, data);
};

const filterAllItemsByCharacter = function (characterName, data) {
    return filterNestedArrayByKeyAndValue('characters', characterName, data);
};

const filterAllItemsByGuest = function (guestName, data) {
    return filterNestedArrayByKeyAndValue('guests', guestName, data);
};

const filterByEpisodeNumber = function (episodeNumber, data) {
    const episodeIndex = parseInt(episodeNumber) - 1;
    const episode = data[episodeIndex];
    if (episode) {
        return [episode];
    } else {
        return [];
    }
};

const filterByEpisodeId = function (episodeId, data) {
    return data.filter(item => (String(item.id) === episodeId));
};

const filterBySeasonNumber = function (season, data) {
    return data.filter(item => (String(item.season) === season));
};

const filterByEpisodeOfSeasonNumber = function (episode, data) {
    return data.filter(item => (String(item.episode) === episode));
};

const filterByEpisodeTitle = function (title, data) {
    return data.filter(item => (String(item.title).toLowerCase()).indexOf(title.toLowerCase()) > -1);
};

const isQueryTermInArray = function (term, arr) {
    return Boolean(arr.filter(item => String(item).toLowerCase().indexOf(term.toLowerCase()) > -1).length);
};

const filterData = function (event, jsonDataString) {
    const queryString = Object.assign({}, event.queryStringParameters);
    delete queryString.p;
    const baseData = JSON.parse(jsonDataString);
    let filtered = [];

    baseData.forEach(season => {
        season.forEach(episode => filtered.push(episode));
    });
    console.log(filtered.length);


    let titleFiltered = [];
    let numberFiltered = [];
    let tagFiltered = [];
    let yearFiltered = [];
    let monthFiltered = [];
    let dateFiltered = [];
    let guestFiltered = [];
    let episodeFiltered = [];
    let seasonFiltered = [];
    let characterFiltered = [];
    let blah = ""

    if (queryString[PARAMS.GENERAL_QUERY]) {
        filtered = filtered.filter(item => {
            const query = queryString[PARAMS.GENERAL_QUERY];
            return ((String(item.title).toLowerCase().indexOf(query.toLowerCase()) > -1) ||
                isQueryTermInArray(query, item.tags) ||
                isQueryTermInArray(query, item.guests) ||
                isQueryTermInArray(query, item.characters)
            );
        });
    } else if (!!queryString[PARAMS.NUMBER] && Object.keys(queryString).length === 1) {
        filtered = filterByEpisodeNumber(queryString[PARAMS.NUMBER], filtered);
    } else if (!!queryString[PARAMS.EPISODE_ID] && Object.keys(queryString).length === 1) {
        filtered = filterByEpisodeId(queryString[PARAMS.EPISODE_ID], filtered);
    } else {
        if (!!queryString[PARAMS.TITLE]) {
            titleFiltered = filterByEpisodeTitle(queryString[PARAMS.TITLE], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = titleFiltered;
            }
        }

        if (!!queryString[PARAMS.NUMBER]) {
            numberFiltered = filterByEpisodeNumber(queryString[PARAMS.NUMBER], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = numberFiltered;
            }
        }

        if (!!queryString[PARAMS.TAG]) {
            tagFiltered = filterAllItemsByTag(PARAMS.TAG, filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = tagFiltered;
            }
        }

        if (!!queryString[PARAMS.YEAR]) {
            yearFiltered = filterAllItemsByYear(queryString[PARAMS.YEAR], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = yearFiltered;
            }
        }

        if (!!queryString[PARAMS.MONTH]) {
            monthFiltered = filterAllItemsByMonth(queryString[PARAMS.MONTH], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = monthFiltered;
            }
        }

        if (!!queryString[PARAMS.DATE]) {
            dateFiltered = filterAllItemsByDate(queryString[PARAMS.DATE], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = dateFiltered;
            }
        }

        if (!!queryString[PARAMS.GUEST_STAR]) {
            guestFiltered = filterAllItemsByGuest(queryString[PARAMS.GUEST_STAR], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = guestFiltered;
            }
        }

        if (!!queryString[PARAMS.EPISODE]) {
            episodeFiltered = filterByEpisodeOfSeasonNumber(queryString[PARAMS.EPISODE], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = episodeFiltered;
            }
        }

        if (!!queryString[PARAMS.SEASON]) {
            seasonFiltered = filterBySeasonNumber(queryString[PARAMS.SEASON], filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = seasonFiltered;
            }
        }

        if (!!queryString[PARAMS.CHARACTER]) {
            characterFiltered = filterAllItemsByCharacter(PARAMS.CHARACTER, filtered);
            if (queryString[PARAMS.UNION_TYPE] !== 'a') {
                filtered = characterFiltered;
            }
        }

        if (queryString[PARAMS.UNION_TYPE] === 'a') {
            const mergeArr = [].concat(
                titleFiltered,
                numberFiltered,
                tagFiltered,
                guestFiltered,
                seasonFiltered,
                episodeFiltered,
                characterFiltered,
                yearFiltered,
                monthFiltered,
                dateFiltered
            );
            mergeArr.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                } else if (b.id < a.id) {
                    return 1;
                } else {
                    return 0;
                }
            });
            mergeArr.map((item, idx, arr) => {
                if (!arr[idx + 1]) {
                    return true;
                }
                return (item.id !== arr[idx + 1].id);
            });

            filtered = mergeArr;
        }
    }

    filtered.forEach((item, idx) => {
        item.showCode = showKey;
        filtered[idx] = item;
    });

    resolver({
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": String(event.headers.origin)
        },
        body: JSON.stringify({
            count: filtered.length,
            query: queryString,
            data: filtered
        })
    });
};

exports.handler = (event) => {
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;

        if (!event || !event.queryStringParameters) {
            resolver({
                statusCode: 200,
                body: `No query parameters available: ${JSON.stringify(event)}`
            })
        }
        showKey = event.queryStringParameters[PARAMS.SHOW_KEY];
        getS3Json(event, showKey);
    });
};
