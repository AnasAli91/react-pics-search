import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2qZJD9UUe0bH2ylXZcaTuMosegVSdenNmeEuqYNUktw',
  },
});
