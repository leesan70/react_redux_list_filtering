import * as axios from 'axios';

import { getApiUrl } from 'Helpers';

export const Axios = axios.create({
    baseURL: getApiUrl(),
});