import axios from 'axios';

//URL FILMES EM CARTAZ:
//https://api.themoviedb.org/3
//movie/now_playing? & language=pt-BR & page=1

export const key = 'd4376023f630a3e2ceb4191f2d924be1';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;