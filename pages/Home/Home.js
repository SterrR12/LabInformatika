import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AnimeCard from '../../components/Anime';
import { fetchTopAnime } from '../../api/api_jikan';

export default function HomeScreen({ navigation }) {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const getTopAnime = async () => {
            try {
                const data = await fetchTopAnime();
                setAnimeList(data);
            } catch (error) {
                console.error('Error fetching top anime:', error);
            }
        };

        getTopAnime();
    }, []);

    const renderItem = ({ item }) => (
        <AnimeCard anime={item} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={animeList}
                renderItem={renderItem}
                keyExtractor={(item) => item.mal_id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});
