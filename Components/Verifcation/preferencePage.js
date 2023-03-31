import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable , Animated,TextInput,ScrollView } from 'react-native';
import styles from '../../jstyle';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
 
const P_OPTIONS = [
    {
        item:"Conférences",
        id:"Conf",
    },
    {
        item:"Séminaires",
        id:"sem",
    },
    {
        item:"Salons",
        id:"sal",
    },
    {
        item:"Événements sportifs",
        id:"esport",
    },
    {
        item:"Concerts",
        id:"conc",
    },
    {
        item:"Festivals  ",
        id:"fest",
    },
    {
        item:"Mariages",
        id:"mar",
    },
    {
        item:"Événements de charité",
        id:"echar",
    },
    {
        item:"Fêtes d'anniversaire",
        id:"fanni",
    },
    {
        item:"Événements communautaires",
        id:"ecomm",
    },
    {
        item:"Événements culinaires",
        id:"ecul",
    },
    {
        item:"Événements artistiques",
        id:"eart",
    },
    {
        item:"Événements d'entreprise",
        id:"eent",
    },
    {
        item:"Événements éducatifs",
        id:"edec",
    },
    {
        item:"Événements religieux",
        id:"erel",
    },
    {
        item:"Événements de plein air",
        id:"epla",
    },
    {
        item:"Événements de mode",
        id:"emode",
    },
    {
        item:"Événements pour enfants",
        id:"eenfa",
    },
    {
        item:"Événements de mariage",
        id:"emar",
    },
    {
        item:"Événements de voyage",
        id:"evoy",
    },
    {
        item:"Soirées et matinées dansantes",
        id:"smd",
    },
]

const S_OPTIONS = [
    {
        item: 'Homme',
        id: "Mr", 
    },
    {
        item: 'Femme',
        id: "N'dame", 
    },
    {
        item: 'LGBT',
        id: 'B', 
    },
]



const Preference = ({navigation}) => {
    const [pre, setPre] = useState("")
    const [selectedTeam, setSelectedTeam] = useState("")
    const [selectedTeams, setSelectedTeams] = useState([])

    const [show,setShow] = useState(null)

    useEffect(() => {
        setShow(true)
    },[])

    console.log(show)

    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }
    
    const onChange = (val) =>{
        console.log(val)
        setShow(false)
        if(val.id === "B"){
            setPre("")
        }else{
            setPre(val.id)
        }
        setSelectedTeam(val.item)
    }
    
    return (
    <View style={styles.contain}>
            <View style={styles.contText}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/arrow.png')} style={{width:24,height:24,marginTop:15}}/>
                </Pressable>
                <Text style={{fontSize:34,fontWeight:700,marginVertical:15, color:'white'}}>Pour finir</Text>
                <Text style={{fontSize:24,color:'white'}}>Nous avons besoins de certaines informations complémentaires</Text>
            </View>

            <View style={styles.contText2}>
                { show ? 
                <SelectBox
                    label="Precisez votre genre svp"
                    options={S_OPTIONS}
                    arrowIconColor="#14FE64"
                    searchIconColor="#14FE64"
                    optionsLabelStyle={{color:"white"}}
                    labelStyle={{color:"white", fontSize:18}}
                    value={selectedTeam}
                    onChange={onChange}
                    hideInputFilter={false}
                />
                :
                <View>
                    <Text style={{color:'white',fontSize:18}}>Veuillez {pre} indiquer vos goûts</Text>
                    <SelectBox
                        label='Selectioner au minimun 8'
                        options={P_OPTIONS}
                        multiOptionsLabelStyle={{color:"white",fontSize:18}}
                        multiOptionContainerStyle={{backgroundColor:"#14FE64"}}
                        optionsLabelStyle={{color:"white"}}
                        optionContainerStyle={{backgroundColor:"black",borderRaduis:15,color:"black"}}
                        labelStyle={{color:"white", fontSize:18}}
                        arrowIconColor="#14FE64"
                        searchIconColor="#14FE64"
                        toggleIconColor="#14FE64"
                        selectedValues={selectedTeams}
                        onMultiSelect={onMultiChange()}
                        onTapClose={onMultiChange()}
                        isMulti
                    />
                </View>
                }
            </View>

            <View style={styles.contText}>
                <Pressable style={styles.press} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={{color:'black',fontSize:18}}>Valider</Text>
                </Pressable>
            </View>
    </View>
)}

export default Preference;