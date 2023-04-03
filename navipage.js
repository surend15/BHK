import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Log from './login';
import List from './home';
import SignUp from './signup';
import Apartments from './appartment';
import Cottage from './cottage';
import Eco from './ecofriend';
import Farm from './farmhouse';
import Modern from './modernhouse';
import Palace from './palace';
import Studio from './studio';
import SplashScreen from './splashscreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
const Stack=createNativeStackNavigator();

export default function App(){
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}options={{headerShown:false}}/>
        <Stack.Screen name='log' component={Log}options={{headerShown:false}}/>
            <Stack.Screen name='List' component={List}options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUp}options={{headerShown:false}}/>
            <Stack.Screen name='Appartment' component={Apartments}options={{headerShown:false}}/>
            <Stack.Screen name='Eco' component={Eco}options={{headerShown:false}}/>
            <Stack.Screen name='Farm' component={Farm}options={{headerShown:false}}/>
            <Stack.Screen name='Studio' component={Studio}options={{headerShown:false}}/>
            <Stack.Screen name='Modern' component={Modern}options={{headerShown:false}}/>
            <Stack.Screen name='Palace' component={Palace}options={{headerShown:false}}/>
            <Stack.Screen name='Cottage' component={Cottage}options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)}