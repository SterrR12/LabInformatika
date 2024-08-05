const BASE_URL = 'https://api.jikan.moe/v4';

// Fetch top anime
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

// Fetch top manga
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

// Fetch anime detail
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

// Fetch manga detail
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

// Fetch top characters
export const fetchTopCharacters = async () => {
    try {
        const response = await fetch(`${BASE_URL}/top/characters`);
        const json = await response.json();
        return json.data; // Sesuaikan dengan struktur data yang diberikan oleh API Jikan
    } catch (error) {
        console.error('Error fetching top characters:', error);
        throw error;
    }
};

export const fetchTopPeople = async () => {
    try {
        const response = await await fetch(`${BASE_URL}/top/people`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('Error fetching top people:', error);
        throw error;
    }
}
