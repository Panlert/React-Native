import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
    
    var ref=0;
    const [imgTown, setCount] = useState(0);
        const onPress = () => {
            setCount(imgTown+1);
    }
    console.log(props.code,ref,imgTown)

    if(imgTown!=ref && props.code=='90110')
        img = require('../Hatyai.jpg');
    if(imgTown!=ref && props.code=='92000')
        img = require('../Trang.jpg');
    if(imgTown!=ref && props.code=='50000')
        img = require('../Chiangmai.jpg');
    if(imgTown!=ref && props.code=='40000')
        img = require('../Khonkaen.jpg');
    if(imgTown!=ref && props.code=='20000')
        img = require('../Chonburi.jpg');
    
    if(img!=""){
        return(
                <View style={styles.zipPlace}> 
                    <View>
                        <Text style = {styles.textFront}>{props.main}</Text>
                        <Text style = {styles.textFront}>{props.description}</Text>
                        <Text style = {styles.textFront}>{props.temp} °C</Text>
                    </View>
                    <View style={{ backgroundColor: colorTemp, flex: 0.3, width: 100, left: 30 }} />
                    <View style={styles.container}>
                        <Image
                            style={styles.stretch}
                            source={img}
                        />
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.countContainer}>
                        <Text style={styles.countText}></Text>
                        </View>
                        <TouchableWithoutFeedback onPress={onPress}>
                        <View style={styles.button}>
                            <Text style={styles.zipCode} >Tap to view the city</Text>
                        </View>
                        </TouchableWithoutFeedback>
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
        padding: 10
    },
    container: {
        paddingTop: 10,
    },
    stretch: {
        width: '100%',
        height: 220,
        resizeMode: 'stretch',
    },
//-------------------------
    container2: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 1
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      countContainer: {
        alignItems: "center",
        paddingTop: 10
      },
      countText: {
        color: 'red'
      },
//-------------------------
    zipCode: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})