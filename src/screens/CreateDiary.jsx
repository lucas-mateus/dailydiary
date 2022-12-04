import { View } from 'react-native'
import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react'

export function CreateDiary({navigation}) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [diaries, setNewDiaries] = useState([])


  function clear(){
    setContent('')
    setTitle('')
  }

  const handleCreateDiary = () =>{
    
    if(title == '' || content == ''){
      alert('Seu diário precisa ter um título e conteúdo!')
      clear()
      return
    }

    const date = new Date()
	  const formatedDate = (`${date.getDay()}/${date.getMonth()}/${date.getYear()}`)
	
	  const data = {
      id: String(date.getTime()),
      date: formatedDate,
      title:title,
      content: content
	}
	setNewDiaries( oldState => [...oldState, data ])

  navigation.navigate('Diários', {
    screen: 'Home'
  });
}
  return (
    <View>
      <Input
        height={50}
        placeholder={'Seu título'}  
        onChange={setTitle}
      />
      <Input
        multiline
        numberOfLines={4}
        height={300}
        placeholder={'Digite seu diário aqui'}
        onChange={setContent}
      />
      <Button title={"Criar Diário"} onPress={handleCreateDiary} />
    </View>
  )
}