class NewsApi {
  constructor({ baseUrl, key }) {
    this._baseUrl = baseUrl;
    this._key = key;
  }

  _checkResStatus = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

  getRequestNews = async (query) => {
    const currentDate = new Date();
    const weekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
    const res = await fetch(
      `${this._baseUrl}/everything?q=${query}&from=${weekAgo}&to=${currentDate}&pageSize=100&apiKey=${this._key}`,
      {
        method: 'GET',
      }
    );
    return this._checkResStatus(res);
  };
}

const BASE_URL = 'https://nomoreparties.co/news/v2';
// const BASE_URL = 'https://newsapi.org/v2';

const apiKey = '0f47b3cba2644b69b3af39498ffb7a0b';

export const newsApi = new NewsApi({
  baseUrl: BASE_URL,
  key: apiKey,
});
