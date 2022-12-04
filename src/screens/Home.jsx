
import React from 'react'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { Card }from '../components/Card'



export default function Home({navigation, route}) {

  const [gretting, setNewGretting] = useState('')
  const diaries = []

  useEffect(()=>{
    const currentHour = new Date().getHours();
    
    if(currentHour < 12){
      setNewGretting('bom dia')
    }else if(currentHour>= 12 && currentHour <= 18){
      setNewGretting('boa tarde')
    }else{
      setNewGretting('boa noite')
    }

  },[])

  
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.gretting}>Olá, {gretting}</Text>
        <Text style={styles.totalDiaries}>Total de diários:
          <Text style={{fontWeight:'900'}}> 4</Text>
        </Text>
      </View>

      <View style={styles.cardWrapper}>
      
       <FlatList
          data={diaries}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item})=>{
            <Card
              title={item.title}
              date={item.formatedDate}
            />
          }}
          
          />        
          
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper:{
    paddingVertical:10,
    paddingHorizontal: 18,
    borderBottomWidth:2,
    borderBottomColor: '#0EA5E9',
    marginHorizontal:10
  },
  gretting:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0EA5E9'
  },
  totalDiaries:{
    color: '#828282',
    fontWeight: '500',
    fontSize:14
  },
  cardWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})