import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable ,Button, Animated,TextInput } from 'react-native';
import styles from '../../jstyle';
import {CountryPicker} from "react-native-country-codes-picker";
import Flag from 'react-native-flags';

const Connection = ({navigation}) => {

    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(null);
    const [flag,setFlag] = useState("CI");
    const [countryCode, setCountryCode] = useState('+255');
    
    const onPressLearnMore= () => {

    }

    return (
        <View style={styles.contain}>
        <View style={styles.contText}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/arrow.png')} style={{width:24,height:24,marginTop:15}}/>
            </Pressable>
            <Text style={{fontSize:34,fontWeight:700,marginVertical:15, color:'white'}}>Se connecter à </Text>
            <Text style={{fontSize:34,fontWeight:700,letterSpacing:10,color:'white'}}>CELEBRATE</Text>
        </View>
        <View style={styles.contenNum}>  
            <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.codes}
            >
                <Flag
                    code={flag}
                    size={32}
                />
                <Text>{countryCode}</Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.numinput} 
                value={number} onChangeText={(e) => setNumber(e)} 
                placeholder="Saisissez votre numéro de téléphone" keyboardType="numeric"/>
        </View>
        <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
            setFlag(item.code)
            console.log(item)
            }}

            onBackdropPress={() => setShow(false)}

            style={{
                // Styles for whole modal [View]
                modal: {
                    height: 500,
                    backgroundColor: 'lightgrey'
                }}}
        />
        <View style={styles.contText}>
            <Pressable style={styles.press} onPress={() => navigation.navigate("Homepage")}>
                <Text style={{color:'black',fontSize:18}}>Valider</Text>
            </Pressable>
        </View>
        <View>
            <Text
                onPress={() => navigation.goBack()}
                style={{color:'white'}}
            >
                Je n'ai plus accès à mon numéro de téléphone
            </Text>
        </View>
    </View>
)}

export default Connection;