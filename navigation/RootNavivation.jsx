
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import CategoryScreen from '../screens/CategoryScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    const [alreadyLaunched, setAlreadyLaunched] = useState(false)

    useEffect(() => {
        (async function () {
            const data = await AsyncStorage.getItem('alreadyLaunched');
            if (data) {
                setAlreadyLaunched(true);
            }
        })();
    }, []);

    console.log(alreadyLaunched);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {alreadyLaunched
                    ? undefined
                    : (
                        <Stack.Screen
                            name="onBoarding"
                            options={{ headerShown: false }}
                            component={OnBoardingScreen}
                        />
                    )}

                <Stack.Screen
                    name="category"
                    options={{ headerShown: false }}
                    component={CategoryScreen}
                />

                <Stack.Screen
                    name="categoryDetail"
                    options={{ headerShown: false }}
                    component={CategoryDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}