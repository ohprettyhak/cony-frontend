const queryKeys = {
  weather: (lat: number, lng: number, lang: string) => [
    'weather',
    lat,
    lng,
    lang,
  ],
  cards: () => ['cards'],
  dailyQuote: () => ['dailyQuote'],
};

export default queryKeys;
