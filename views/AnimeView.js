import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AnimeDetailScreen = ({ route }) => {
    const { anime } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={{ uri: anime.images.jpg.image_url }} style={styles.image} />
            </View>
            <Text style={styles.title}>{anime.title}</Text>
            <Text style={styles.details}>Score: {anime.score}</Text>
            <Text style={styles.details}>Type: {anime.type}</Text>
            <Text style={styles.details}>Duration: {anime.duration}</Text>
            <Text style={styles.details}>Episodes: {anime.episodes}</Text>
            <Text style={styles.detailsSinopsis}>Synopsis</Text>
            <Text style={styles.detailsSS}>{anime.synopsis}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
        fontSize: 16,
        color: '#555',
        marginVertical: 5,
    },
    detailsSinopsis: {
        fontSize: 30,
        textAlign: 'center'
    },
    detailsSS: {
        fontSize: 16,
        textAlign: 'justify'
    }
});

export default AnimeDetailScreen;
