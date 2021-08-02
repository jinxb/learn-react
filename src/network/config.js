const dev = "https://httpbin.org";
const pro = "https://httpbin.org"
export const BASE_URL = process.env.NODE_ENV === 'development' ? dev : pro;
export const TIMEOUT = 5000;