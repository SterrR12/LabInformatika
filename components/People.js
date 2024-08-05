import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PeopleCard = ({ people, navigation }) => {
    const handlePress = () => {
        // Menavigasi ke halaman detail people, ganti 'peopleDetail' dengan nama layar yang sesuai
        navigation.navigate('peopleDetail', { people });
    };

    if (!people || !people.images || !people.images.jpg || !people.images.jpg.image_url) {
        return (
            <View style={styles.card}>
                <Text>Data not available</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image source={{ uri: people.images.jpg.image_url }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{people.name}</Text>
                <Text style={styles.details}>Given Name: {people.given_name}</Text>
                <Text style={styles.details}>Family Name: {people.family_name}</Text>
                <Text style={styles.details}>Birthday: {people.birthday}</Text>
                <Text style={styles.details}>Favorite: {people.favorites}</Text>
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
    name: {
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

export default PeopleCard;
