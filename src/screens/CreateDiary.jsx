import { View } from 'react-native'
import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function CreateDiary() {
  return (
    <View>
      <Input
        height={50}
        placeholder={'Seu título'}  
      />
      <Input
        multiline
        numberOfLines={4}
        height={300}
        placeholder={'Digite seu diário aqui'}  
      />
      <Button title={"Criar Diário"} />
    </View>
  )
}