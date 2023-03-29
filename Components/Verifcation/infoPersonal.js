import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable ,Button, Animated,TextInput,Platform } from 'react-native';
import styles from '../../jstyle';
import {CountryPicker} from "react-native-country-codes-picker";
import Flag from 'react-native-flags';
import DateTimePicker from '@react-native-community/datetimepicker';

const Person = ({navigation}) => {
    const [name,setName] = useState("")
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };


      console.log(date)

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
                onChangeText={setEmail}
                value={email}
                placeholder="Entrer votre adresse email"
            />
                <Pressable 
                    style={styles.champDate}
                    onPress={() => setShow(c => !c)}
                >
                    <Text style={{color:"lightgray"}}>Saisissez votre date de naissance</Text>
                </Pressable>
                {show && 
                <View style={styles.rise}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        display="spinner"
                        dateFormat="day month year"
                        is24Hour={true}
                        onChange={onChange}
                    />
                </View>
                }
        </View>
        <View style={styles.contText}>
            <Pressable style={styles.press} onPress={() => navigation.navigate("Prefer")}>
                <Text style={{color:'black',fontSize:18}}>Valider</Text>
            </Pressable>
        </View>
    </View>
)}

export default Person;