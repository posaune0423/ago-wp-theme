import axios from '@/plugins/axios';

export class NewsApi {
  static getAll = () => {
    axios.get('wp/v2/posts').then((res) => {
      console.log(res.data);
      return res.data;
    });
  };
  static get = (id) => {
    axios.get(`wp/v2/posts/${id}`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };
}

export class ConcertsApi {
  static getAll = () => {
    axios.get('wp/v2/concerts').then((res) => {
      console.log(res.data);
      return res.data;
    });
  };

  static get = (id) => {
    axios.get(`wp/v2/concerts/${id}`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };
}
