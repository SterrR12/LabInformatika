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
                name="TopManga" 
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

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'TopManga') {
                        iconName = focused ? 'book' : 'book-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="TopManga" component={TopMangaStack} />
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
