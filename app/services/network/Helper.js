import * as Config from './Config.json';
import * as NetworkManager from './Manager';

const api = NetworkManager.createAxiosInstance(Config.BASE_URL);
api.interceptors.request.use(NetworkManager.globalUserTokenInterceptor);

export const getMovieSuggestion = (query, page) =>
  api.get('search/movie', { params: { query, page } });

export const getMovieDetail = id => api.get(`movie/${id}`);
