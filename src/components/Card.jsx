import { View, Text, StyleSheet, ViewBase, TouchableOpacity } from 'react-native'
import React from 'react'

export function Card({title, date, ...rest}) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.cardWrapper}>
        <View >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardWrapper:{
        backgroundColor: '#0EA5E9',
        width: 332,
        height: 80,
        paddingHorizontal: 20,
        marginVertical: 8,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius:4,
        borderBottomColor: '#9B51E0',
        borderBottomWidth: 3,


    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    date:{
        color: '#014272',
        fontSize: 12,
        fontWeight: '500'
    }
})