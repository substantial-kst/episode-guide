export const queryMap: Record<string, string> = {
  programId: 'p',
  query: 'q',
  episode: 'e',
  season: 's',
  title: 't',
  summary: 'd',
  character: 'c',
  guest: 'g',
  tag: 'tags',
  date: 'dd',
  month: 'mm',
  year: 'yy',
  unionType: 'u'
};

export const fetchData = (queryProps: any) => {
  let url = `https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?`;

  let paramsParsed = 0;

  Object.keys(queryProps).forEach((key: string) => {
    url += `${paramsParsed > 0 ? '&' : ''}${queryMap[key]}=${queryProps[key]}`;
    paramsParsed++;
  });

  console.log('Constructed fetch URL: ', url);

  return fetch(url, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(jsonData => {
      console.log('jsonData', jsonData.data);
      return jsonData.data;
    });
};
