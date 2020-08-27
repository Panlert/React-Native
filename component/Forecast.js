import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { color } from 'react-native-reanimated';

export default function Forecast(props){

    let img="";
    let colorTemp='';

    if(props.main == 'Sunny')
        img = require("../Sunny.jpg");
    if(props.main == 'Clouds')
        img = require("../Clouds.jpg");
    if(props.main == 'Rain')
        img = require("../Rain.jpg")

    if(props.temp >= 25&& props.temp <= 30)
        colorTemp = 'orange'
    if(props.temp > 30)
        colorTemp = 'red'
    if(props.temp >= 20 && props.temp <= 24)
        colorTemp = 'blue'
    if(props.temp < 20)
        colorTemp = 'white'
        
    
    if(img!=""){
        return(
                <View style={styles.zipPlace}> 
                    <View>
                        <Text style = {styles.textFront}>{props.main}</Text>
                        <Text style = {styles.textFront}>{props.description}</Text>
                        <Text style = {styles.textFront}>{props.temp} °C</Text>
                    </View>
                    <View style={{ backgroundColor: colorTemp, flex: 0.5, width: 100, left: 90 }} />
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