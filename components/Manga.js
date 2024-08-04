// components/Manga.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MangaCard = ({ manga, navigation }) => {
    const handlePress = () => {
        navigation.navigate('MangaDetail', { manga });
    };

    if (!manga || !manga.images || !manga.images.jpg || !manga.images.jpg.image_url) {
        return (
            <View style={styles.card}>
                <Text>Data not available</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image source={{ uri: manga.images.jpg.image_url }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{manga.title}</Text>
                <Text style={styles.details}>Score: {manga.score}</Text>
                <Text style={styles.details}>Type: {manga.type}</Text>
                <Text style={styles.details}>Chapters: {manga.chapters}</Text>
                <Text style={styles.details}>Volumes: {manga.volumes}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FDFFE2',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    info: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        borderColor:'#478CCF',
        borderWidth: 1,
        borderRadius: 8,
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

export default MangaCard;
