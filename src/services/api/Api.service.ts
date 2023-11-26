import axiosInstance from './axiosInstance';

class ApiService {
  async getPostsList() {
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (err) {
      throw new Error();
    }
  }

  async getPostById(postId: number) {
    try {
      const response = await axiosInstance.get(`/posts/${postId}`);
      return response.data;
    } catch (err) {
      throw new Error();
    }
  }
}

export default new ApiService();
