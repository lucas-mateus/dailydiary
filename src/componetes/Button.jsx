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
        backgroundColor:'#311b92',
        borderRadius:10,
        alignItems:'center',
        marginTop:20
    }


})