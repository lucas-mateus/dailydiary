import { NativeBaseProvider, Text, Center } from 'native-base';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent

      />
      <Center  flex={1} bgColor='dark.50'>
        <Text color="dark.900" fontSize={24}>Open up App.js to start working on your app!</Text>
      </Center>
    </NativeBaseProvider>
  );
}