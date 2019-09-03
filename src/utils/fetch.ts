export const queryMap: Record<string, string> = {
  id: 'id',
  programId: 'p',
  query: 'q',
  episode: 'e',
  season: 's',
  title: 't',
  summary: 'd',
  number: 'n',
  character: 'c',
  guest: 'g',
  tag: 'tags',
  date: 'dd',
  month: 'mm',
  year: 'yy',
  unionType: 'u',
}

export interface EpisodeQueryParams {
    programId: string
    id: string
}

export const seasonMap: Record<string, string> = {
  programId: 'p',
}

const parseQueryParams = (baseUrl: string, queryParams: any, queryMap: any) => {
    let parsedUrl = baseUrl
    let paramsParsed = 0

  Object.keys(queryParams).forEach((key: string) => {
    parsedUrl += `${paramsParsed > 0 ? '&' : ''}${queryMap[key]}=${
      queryParams[key]
    }`
      paramsParsed++
  })

    return parsedUrl
}

export const fetchSeasons = (seasonProps: any) => {
    let baseUrl = `https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/seasons?`

    const url = parseQueryParams(baseUrl, seasonProps, seasonMap)

  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(jsonData => {
        return jsonData.seasons
    })
}

export const queryFetch = (queryProps: any) => {
    let baseUrl = `https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?`

    const url = parseQueryParams(baseUrl, queryProps, queryMap)

  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(jsonData => {
        return jsonData.data
    })
}
