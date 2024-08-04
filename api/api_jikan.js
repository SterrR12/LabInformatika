const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnime = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top/anime`);
        const json = await response.json();
        return json.data; // Sesuaikan dengan struktur data yang diberikan oleh API Jikan
    } catch (error) {
        console.error('Error fetching top anime:', error);
        throw error;
    }
};

export const fetchTopManga = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top/manga`);
        const json = await response.json();
        return json.data; // Sesuaikan dengan struktur data yang diberikan oleh API Jikan
    } catch (error) {
        console.error('Error fetching top manga:', error);
        throw error;
    }
};

export const fetchAnimeDetail = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/anime/${id}`);
        const json = await response.json();
        return json.data; // Sesuaikan dengan struktur data yang diberikan oleh API Jikan
    } catch (error) {
        console.error('Error fetching anime detail:', error);
        throw error;
    }
};

export const fetchMangaDetail = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/manga/${id}`);
        const json = await response.json();
        return json.data; // Sesuaikan dengan struktur data yang diberikan oleh API Jikan
    } catch (error) {
        console.error('Error fetching manga detail:', error);
        throw error;
    }
};
