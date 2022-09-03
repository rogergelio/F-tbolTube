import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    part: 'snippet,id',
    regionCode: 'MX',
    maxResults: '100',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '3d8ff50012msha288475b80d5560p103a48jsne90102978591',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
