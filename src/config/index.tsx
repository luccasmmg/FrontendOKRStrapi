const BASE_URL: string = process.env.NODE_ENV === 'production' ? "http://ec2-18-228-10-24.sa-east-1.compute.amazonaws.com" : '';
export default BASE_URL;
