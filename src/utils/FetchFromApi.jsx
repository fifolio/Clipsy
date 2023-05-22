import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '15'
    },
    headers: {
        'X-RapidAPI-Key': '889151d801mshb004fbf52cf1501p173d06jsne0b65376cca5',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}