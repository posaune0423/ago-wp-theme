import axios from '@/plugins/axios';

export default class NewsApi {
  getAll = async () => {
    const { data } = axios.get('posts');
    console.log(data)
    return data
  };
  get = async (id) => {
    const { data } = axios.get(`posts/${id}`);
    console.log(data)
    return data
  };
}

export default class ConcertsApi {
  getAll = async () => {
    const { data } = axios.get('concerts');
    console.log(data)
    return data
  };

  get = async (id) => {
    const { data } = axios.get(`concerts/${id}`);
    console.log(data)
    return data
  };
}
