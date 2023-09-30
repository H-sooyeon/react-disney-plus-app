import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9e4344a12cb0f9b01fa55332cbb72723',
    language: 'ko-KR',
  }
})

export default instance;