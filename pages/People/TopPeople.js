import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PeopleCard from '../../components/People';
import { fetchTopPeople } from '../../api/api_jikan';

export default function TopPeopleScreen({ navigation }) {
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        const getTopPeople = async () => {
            try {
                const data = await fetchTopPeople();
                setPeopleList(data);
            } catch (error) {
                console.error('Error fetching top people:', error);
            }
        };

        getTopPeople();
    }, []);

    const renderItem = ({ item }) => (
        <PeopleCard people={item} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={peopleList}
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
