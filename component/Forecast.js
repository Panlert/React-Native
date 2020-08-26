import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props){
    var weather = ['Sunny', 'Clouds', 'Rain'];
    var dataName;
    var i;

    for(i=0;i<weather.length;i++){
        if(props.main == weather[i])
            dataName = weather[i];
        else
            dataName = props.main;
    }
    console.log(dataName)
    
    if(dataName == 'Sunny'){
        return(
            <View style={styles.zipPlace}>
                <View>
                    <Text style = {styles.textFront}>{dataName}</Text>
                    <Text style = {styles.textFront}>{props.description}</Text>
                    <Text style = {styles.textFront}>{props.temp} °C</Text>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('../Sunny.jpg')}
                    />
                </View>
            </View>
        )
    }   
    if(dataName == 'Clouds'){
        return(
            <View style={styles.zipPlace}>
                <View>
                    <Text style = {styles.textFront}>{dataName}</Text>
                    <Text style = {styles.textFront}>{props.description}</Text>
                    <Text style = {styles.textFront}>{props.temp} °C</Text>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('../Clouds.jpg')}
                    />
                </View>
            </View>
        )
    }
    if(dataName == 'Rain'){
        return(
            <View style={styles.zipPlace}>
                <View>
                    <Text style = {styles.textFront}>{dataName}</Text>
                    <Text style = {styles.textFront}>{props.description}</Text>
                    <Text style = {styles.textFront}>{props.temp} °C</Text>
                </View>
                <View style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('../Rain.jpg')}
                    />
                </View>
            </View>
        )
    }else{
        return (
            <View>
                    <Text style = {styles.textFront}>{dataName}</Text>
                    <Text style = {styles.textFront}>{props.description}</Text>
                    <Text style = {styles.textFront}>{props.temp} °C</Text>
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