import { Center, Text } from 'native-base'
import React from 'react'
import {Card} from '../componetes/Card'
import { Button } from '../componetes/Button'

export function Welcome() {
  return (
    	<Center flex={1} bgColor="light.50">
            <Text textAlign={'center'} fontSize={'2xl'} color={'info.400'}fontWeight={'bold'}> Seja muito bem-vindx {'\n'} ao seu diário!</Text>
            <Button  title={"Acessar Diário"} />		
            <Text textAlign={'center'} px={8} mt={8}>Você terá acesso ao seu diário com {'\n'}a validação da sua digital!</Text>
	    </Center>
     )
}