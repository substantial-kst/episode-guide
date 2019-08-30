export const buildBroadcastDate = (overrides: Partial<BroadcastDate> = {}) => ({
  year: '2019',
  month: '08',
  date: '30',
  ...overrides,
});

export const buildCharacters = () => ['some-character'];

export const buildGuests = () => ['some-guest'];

export const buildTags = () => ['some-tag'];

export const buildEpisode = (overrides: Partial<Episode> = {}): Episode => <Episode>({
  episode: 1,
  id: 'S01E01',
  broadcast: buildBroadcastDate(),
  title: 'Some Episode',
  summary: 'Some summary',
  characters: buildCharacters(),
  tags: buildTags(),
  guests: buildGuests(),
  image: 'some-image',
  poster: 'some-poster',
  showCode: 'some-code',
  ...overrides,
});
