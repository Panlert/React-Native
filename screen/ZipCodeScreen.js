import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
   

const Zipitem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <ImageBackground source={require('../home_bg.jpg')} style={styles.zipItem}>
            <View style = {styles.zipPlace}>
                <View style = {styles.zipItem}>
                    <Text style = {styles.zipCode}>{place} </Text>
                    <Text style = {styles.zipCode}>{code}</Text>
                </View>
            </View>
        </ImageBackground>
    </TouchableHighlight>
)

const _keyExtrator = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {_keyExtrator}
                renderItem = {({item}) => <Zipitem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 24
    },
    zipPlace: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    zipCode: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

})