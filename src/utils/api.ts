import axios, { AxiosInstance, AxiosError } from 'axios';

const looterShopApi: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  timeout: 1000,
});

export const signUp = async () => {
  try {
    await looterShopApi.post('/auth/signup');
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data } = await looterShopApi.post('/auth/login', { email, password });
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err.response?.data;
    }
    throw err;
  }
};
