// Pages/Manga/MangaDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MangaDetail = ({ route }) => {
    const { manga } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: manga.images.jpg.image_url }} style={styles.image} />
            <Text style={styles.title}>{manga.title}</Text>
            <Text style={styles.details}>Score: {manga.score}</Text>
            <Text style={styles.details}>Type: {manga.type}</Text>
            <Text style={styles.details}>Chapters: {manga.chapters}</Text>
            <Text style={styles.details}>Volumes: {manga.volumes}</Text>
            <Text style={styles.synopsis}>Sinopsis</Text>
            <Text style={styles.synopsisS}>{manga.synopsis}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFC700',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    details: {
        fontSize: 18,
        marginVertical: 2,
    },
    synopsis: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    synopsisS: {
        fontSize: 16,
        textAlign: 'justify'
    }
});

export default MangaDetail;
