const queryKeys = {
  weather: (lat: number, lng: number, lang: string) => [
    'weather',
    lat,
    lng,
    lang,
  ],
  cards: () => ['cards'],
  dailyQuote: () => ['dailyQuote'],
  suggestQuestions: () => ['suggestQuestions'],
  tasks: (id?: number) => (id !== undefined ? ['tasks', id] : ['tasks']),
};

export default queryKeys;
