import { View } from 'react-native'
import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



export function CreateDiary({navigation}) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [diaries, setDiaries] = useState([])

  function clear(){
    setContent('')
    setTitle('')
  }

  const storeData = async (diaries) => {
    try {
      const jsonValue = JSON.stringify(diaries)
      await AsyncStorage.setItem('@diary', jsonValue)
    } catch (e) {
        console.log('ERROR FROM STORAGE FUNCTION ====> ', e)
    }
  
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
    
    setDiaries(oldDiaries => [...oldDiaries, data])
    storeData(diaries);
    clear()

    navigation.navigate('Home', {diaries: diaries })
}
  return (
    <View>
      <Input
        height={50}
        value={title}
        placeholder={'Seu título'}  
        onChangeText ={setTitle}
      />
      <Input
        value={content}
        multiline
        numberOfLines={4}
        height={300}
        placeholder={'Digite seu diário aqui'}
        onChangeText={setContent}
      />
      <Button title={"Criar Diário"} onPress={handleCreateDiary} />
    </View>
  )
}