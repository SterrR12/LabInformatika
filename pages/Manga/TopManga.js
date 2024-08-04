import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MangaCard from '../../components/Manga';
import { fetchTopManga } from '../../api/api_jikan';

export default function TopMangaScreen({ navigation }) {
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        const getTopManga = async () => {
            try {
                const data = await fetchTopManga();
                setMangaList(data);
            } catch (error) {
                console.error('Error fetching top manga:', error);
            }
        };

        getTopManga();
    }, []);

    const renderItem = ({ item }) => (
        <MangaCard manga={item} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mangaList}
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
