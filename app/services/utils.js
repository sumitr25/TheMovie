import axios from 'axios';
import _ from 'lodash';
import { Alert } from 'react-native';
import * as Config from './Config.json';

export const createAxiosInstance = baseURL => {
  const api = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip;q=1.0, compress;q=0.5',
    },
    validateStatus: status =>
      // Only consider error for HTTP 500 and above
      status >= 200 && status < 500,
  });

  api.interceptors.request.use(
    config => {
      config.params = {
        ...config.params,
        api_key: Config.API_KEY,
      };

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  api.interceptors.response.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(config => {
    if (config.data.status === 400) {
      setTimeout(() => {
        Alert.alert('errorOccurred', 'systemError', [{ text: 'shared.close' }]);
      }, 200);
    }
    return config;
  });

  return api;
};

// Convert the object's key into snakeCase'd params, also remove keys with undefined or null value.
// Optionally accept list of keys that will be ommited from the resulting object.
export const toSanitizedSnakeCaseKey = (params, omitKeys = []) =>
  _(params)
    .omit(omitKeys)
    .omitBy(_.isUndefined)
    .omitBy(_.isNull)
    .mapKeys((v, k) => _.snakeCase(k))
    .value();

export const globalUserTokenInterceptor = config => {
  if (!_.has(config, 'headers.Authorization')) {
    _.merge(config, {
      headers: { Authorization: `Bearer ${global.userToken}` },
    });
  }

  return config;
};

export const getImageUri = endUrl => {
  const imageUri = `${Config.IMAGE_URL}${endUrl}`;
  return imageUri;
};
