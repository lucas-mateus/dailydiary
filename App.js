import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StatusBar } from 'react-native';
import { CreateDiary } from './src/screens/CreateDiary'
import Home from './src/screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent

      />
      <NavigationContainer>
        <Tab.Navigator
          
          screenOptions={{
            tabBarStyle: { backgroundColor: '#0EA5E9' },
            tabBarActiveTintColor: '#014272',
            tabBarInactiveTintColor: '#c9c9c9'
            
          }}
        > 
          <Tab.Screen 
            name="Home"
            component={Home}
            options={{
              title:'Diários',
              tabBarIcon: ({size, color}) =>(
                <Ionicons name="ios-book-outline" size={size} color={color} /> 
              ) 

            }}
          
          />
          <Tab.Screen
            name="Criar Diário" 
            component={CreateDiary}
            options={{
              tabBarIcon: ({size, color}) => (
                <Ionicons name="add-circle-outline" size={size} color={color} /> 
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}