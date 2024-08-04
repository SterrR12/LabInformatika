import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AnimeCard = ({ anime, navigation }) => {
    const handlePress = () => {
        // Menavigasi ke halaman detail anime, ganti 'AnimeDetail' dengan nama layar yang sesuai
        navigation.navigate('AnimeDetail', { anime });
    };

    if (!anime || !anime.images || !anime.images.jpg || !anime.images.jpg.image_url) {
        return (
            <View style={styles.card}>
                <Text>Data not available</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image source={{ uri: anime.images.jpg.image_url }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{anime.title}</Text>
                <Text style={styles.details}>Score: {anime.score}</Text>
                <Text style={styles.details}>Type: {anime.type}</Text>
                <Text style={styles.details}>Duration: {anime.duration}</Text>
                <Text style={styles.details}>Episodes: {anime.episodes}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF5E1',
        borderRadius: 10,
        shadowColor: '#088395',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
        shadowColor: '#9BEC00'
    },
    info: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#478CCF', 
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    details: {
        fontSize: 14,
        color: '#888',
        paddingLeft: 10,
    },
});

export default AnimeCard;
