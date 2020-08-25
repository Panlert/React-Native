import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style = {style2.textFront}>{props.main}</Text>
            <Text style = {style2.textFront}>{props.description}</Text>
            <Text style = {style2.textFront}>{props.temp}</Text>
            <Text style = {style2.textFront}>°C</Text>
        </View>
    )
}

const style2 = StyleSheet.create({
    textFront: {
        color: "white",
        fontSize: 25,
        paddingLeft: 50
    }
})