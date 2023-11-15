import { StatusBar } from 'expo-status-bar';
import { COLORS } from "./constants/COLORS";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen from './screens/onBoardingScreen';
import CategoryScreen from './screens/CategoryScreen';
import CategoryDetailScreen from './screens/CategoryDetailScreen'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onBoarding'>
        <Stack.Screen name='onBoarding' options={{ headerShown: false }}
          component={OnBoardingScreen} />
        <Stack.Screen name='category' component={CategoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name='categoryDetail' component={CategoryDetailScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

