import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable ,Button, Animated,TextInput } from 'react-native';
import styles from '../../jstyle';
import {CountryPicker} from "react-native-country-codes-picker";
import Flag from 'react-native-flags';

const Person = ({navigation}) => {
    const [name,setName] = useState("")
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")

    return (
    <View style={styles.contain}>
        <View style={styles.contText}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/arrow.png')} style={{width:24,height:24,marginTop:15}}/>
            </Pressable>
            <Text style={{fontSize:28,fontWeight:700,marginVertical:15, color:'white'}}>
                Aidez nous à mieux vous connaitre
            </Text>
        </View>
        <View style={styles.contForm}>
            <TextInput 
                style={styles.champ}
                onChangeText={setName}
                value={name}
                placeholder="Entrer votre nom"
            />
            <TextInput 
                style={styles.champ}
                onChangeText={setName}
                value={user}
                placeholder="Entrer votre username"
            />
            <TextInput 
                style={styles.champ}
                onChangeText={setName}
                value={email}
                placeholder="Entrer votre adresse email"
            />
        </View>
        <View style={styles.contText}>
            <Pressable style={styles.press} >
                <Text style={{color:'black',fontSize:18}}>Valider</Text>
            </Pressable>
        </View>
    </View>
)}

export default Person;