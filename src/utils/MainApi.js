class MainApi {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _fetch = (method, baseUrl, data) => {
    return fetch(`${this._baseUrl}${baseUrl}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: this._token,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  };

  _convertCardFormat = (cards) => {
    return cards.map((card) => {
      return {
        keyword: card.keyword,
        title: card.title,
        description: card.text,
        publishedAt: card.date,
        url: card.link,
        urlToImage: card.image,
        source: { name: card.source },
        id: card._id,
      };
    });
  };

  getUserInfo = () => this._fetch('GET', '/users/me');

  getSavedArticles = () =>
    this._fetch('GET', '/articles').then(this._convertCardFormat);

  saveArticle = (article) => this._fetch('POST', '/articles', article);

  deleteArticle = (articleId) =>
    this._fetch('DELETE', `/articles/${articleId}`);

  updateToken = (token) => {
    this._token = token;
  };
}

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.arraktur-news-explorer.students.nomoredomainssbs.ru'
    : 'http://localhost:3000';

const jwt = `Bearer ${localStorage.getItem('jwt')}`;

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  token: jwt,
});
