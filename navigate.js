import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Log from './loginn';
import Sign from './Signnup';
import Home1 from './Home1';
import Led from './page1';


const Stack=createNativeStackNavigator();

export default function App(){
    return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Log' component={Log}/>
            <Stack.Screen name='Sign' component={Sign}/>
            <Stack.Screen name='Home1' component={Home1}/>
            <Stack.Screen name='page1' component={Led}/>
        </Stack.Navigator>
    </NavigationContainer>
    )}