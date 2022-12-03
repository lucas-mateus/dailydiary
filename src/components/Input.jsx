import { View, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export function Input({height,placeholder, ...rest }) {

  return (
    <View style={[styles.inputWrapper, {height:height}]} >
      <TextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={'#595959'}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    inputWrapper:{
        padding: 10,
        backgroundColor: '#eaeaea',
        width: 350,
        marginTop:40,
        paddingHorizontal: 20,
        marginHorizontal:20,
        borderBottomColor: '#0EA5E9',
        borderBottomWidth:2,
        borderRadius:4
    },

    input:{
        
    }
})