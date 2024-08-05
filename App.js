import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import HomeScreen from './pages/Home/Home';
import TopMangaScreen from './pages/Manga/TopManga';
import AnimeView from './views/AnimeView';
import MangaView from './views/MangaView';
import LoginScreen from './pages/Validasi/Login';
import SignupScreen from './pages/Validasi/Signup';
import TopPeopleScreen from './pages/People/TopPeople';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    const handleLogout = () => {
        // Implementasikan logika logout di sini
        navigation.replace('Login');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                            <Ionicons name="log-out-outline" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen name="AnimeDetail" component={AnimeView} />
        </Stack.Navigator>
    );
}

function TopMangaStack({ navigation }) {
    const handleLogout = () => {
        // Implementasikan logika logout di sini
        navigation.replace('Login');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Top Manga" 
                component={TopMangaScreen} 
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                            <Ionicons name="log-out-outline" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen name="MangaDetail" component={MangaView} />
        </Stack.Navigator>
    );
}

function TopPeopleStack({ navigation }) {
    const handleLogout = () => {
        navigation.replace('login');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Top People"
            component={TopPeopleScreen}
            options={{
                headerRight: () => (
                    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                        <Ionicons name="log-out-outline" size={24} color="black" />
                    </TouchableOpacity>
                    ),
            }}
            />
            {/*<Stack.Screen name="PeopleDetail" component={PeopleView} />*/}
        </Stack.Navigator>
    )
}

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Anime') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Manga') {
                        iconName = focused ? 'book' : 'book-outline';
                    }else if (route.name === 'People') {
                        iconName = focused ? 'star' : 'star-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    display: 'flex',
                },
            })}
        >
            <Tab.Screen name="Anime" component={HomeStack} />
            <Tab.Screen name="Manga" component={TopMangaStack} />
            <Tab.Screen name='People' component={TopPeopleStack} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
