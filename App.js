import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StatusBar } from 'react-native';
import { CreateDiary } from './src/screens/CreateDiary'
import Home from './src/screens/Home';

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
          }}
        >
          <Tab.Screen name="Diários" component={Home}/>
          <Tab.Screen name="Criar Diário" component={CreateDiary}/>
        </Tab.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}