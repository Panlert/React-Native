import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props){

    let img="";

    if(props.main == 'Sunny')
        img = require("../Sunny.jpg");
    if(props.main == 'Clouds')
        img = require("../Clouds.jpg");
    if(props.main == 'Rain')
        img = require("../Rain.jpg")
    
    if(img!=""){
        return(
                <View style={styles.zipPlace}>
                    <View>
                        <Text style = {styles.textFront}>{props.main}</Text>
                        <Text style = {styles.textFront}>{props.description}</Text>
                        <Text style = {styles.textFront}>{props.temp} °C</Text>
                    </View>
                    <View style={styles.container}>
                        <Image
                            style={styles.stretch}
                            source={img}
                        />
                    </View>
                </View>
            )
    }else{
        return(
            <View style={styles.zipPlace}>
                <View>
                    <Text style = {styles.textFront}>{props.main}</Text>
                    <Text style = {styles.textFront}>{props.description}</Text>
                    <Text style = {styles.textFront}>{props.temp} °C</Text>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    textFront: {
        color: "white",
        fontSize: 25,
        paddingLeft: 50,
        padding: 15
    },
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: '100%',
        height: 220,
        resizeMode: 'stretch',
    },
})