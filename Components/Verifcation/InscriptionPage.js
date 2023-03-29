import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable , Animated,TextInput } from 'react-native';
import styles from '../../jstyle';
import {CountryPicker} from "react-native-country-codes-picker";
import Flag from 'react-native-flags';
 
const Inscription = ({navigation}) => {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(null);
    const [flag,setFlag] = useState("CI");
    const [countryCode, setCountryCode] = useState('+255');

    const inputRef = useRef()

    
    useEffect(() => {
        inputRef.current?.focus()
    })
    

    return (
    <View style={styles.contain}>
        <View style={styles.contText}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/arrow.png')} style={{width:24,height:24,marginTop:15}}/>
            </Pressable>
            <Text style={{fontSize:34,fontWeight:700,marginVertical:15, color:'white'}}>Commençons  !</Text>
            <Text style={{fontSize:16,color:'white'}}>Saisissez votre numéro de téléphone. Nous vous enverrons un code de confirmation</Text>
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
                ref={inputRef} 
                style={styles.numinput} 
                value={number} onChangeText={(e) => setNumber(e)} 
                placeholder="00 001 002 03" keyboardType="numeric"/>
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
            <Pressable style={styles.press} onPress={() => navigation.navigate('Person')}>
                <Text style={{color:'black',fontSize:18}}>Valider</Text>
            </Pressable>
        </View>
    </View>
)}

export default Inscription;