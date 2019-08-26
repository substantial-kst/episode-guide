const AWS = require('aws-sdk');
const s3 = new AWS.S3();
let showKey;

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
            const parsed = JSON.parse(s3jsonString);
            resolver({
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": String(event.headers.origin)
                },
                body: JSON.stringify({
                    count: getSeasonCount(parsed)
                })
            });
        }
    });
};

const getSeasonCount = function(data) {
    return data.length;
};

exports.handler = (event) => {
    return new Promise((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;

        if (!event) {
            resolver({
                statusCode: 200,
                body: `No query parameters available: ${JSON.stringify(event)}`
            })
        }
        showKey = event.queryStringParameters.p;
        getS3Json(event, showKey);
    });
};
