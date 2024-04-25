import { AxiosResponse, AxiosError } from 'axios';
import { api, handleAxiosError } from './api';


export const createArticle = async (payload: any): Promise<any> => {
  
  try {
    const response: AxiosResponse<any> = await api.post('/articles', payload);
    return response.data;
  } catch (error) {
    handleAxiosError(error as AxiosError);
    return [];
  }
};

export const getArticle = async (slug:string): Promise<any> => {
          
  try {
    const response: AxiosResponse<any> = await api.get(`/articles/${slug}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error as AxiosError);
    return [];
  }
};

export const getArticles = async (): Promise<any> => {
          
  try {
    const response: AxiosResponse<any> = await api.get('/articles');
    return response.data;
  } catch (error) {
    handleAxiosError(error as AxiosError);
    return [];
  }
};
  

