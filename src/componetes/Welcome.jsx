import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '../components/Button'

export function Welcome() {
  return (
    	<View>
	    <Text> Seja muito bem-vindx ao seu diário!</Text

	    <Button title={"Acessar Diário"} onPress={handleAuthentication}/>		
	</View>
     )
}