import {Post} from '../../types/posts';
import axiosInstance from './axiosInstance';

class ApiService {
  async getPostsList(): Promise<Post[]> {
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (err) {
      throw new Error();
    }
  }

  async getPostById(postId: number): Promise<Post> {
    try {
      const response = await axiosInstance.get(`/posts/${postId}`);
      return response.data;
    } catch (err) {
      throw new Error();
    }
  }
}

export default new ApiService();
