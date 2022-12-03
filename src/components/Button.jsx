import React from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
} from 'react-native'

export function Button({title, ...rest }) {


    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
            activeOpacity={0.6}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'

    },
    button:{
        padding: 10,
        paddingHorizontal:20,
        backgroundColor:'#0EA5E9',
        borderRadius:10,
        alignItems:'center',
        marginTop:20,
        marginHorizontal: 20
    }


})