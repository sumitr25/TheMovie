import * as Config from './Config.json';
import * as utils from './utils';

const api = utils.createAxiosInstance(Config.BASE_URL);
api.interceptors.request.use(utils.globalUserTokenInterceptor);

export const getMovieSuggestion = (query, page) =>
  api.get('search/movie', { params: { query, page } });

export const getMovieDetail = id => api.get(`movie/${id}`);
