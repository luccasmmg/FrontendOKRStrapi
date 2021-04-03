const BASE_URL: string = process.env.NODE_ENV === 'production' ? 'http://localhost:1337' : '';
export default BASE_URL;