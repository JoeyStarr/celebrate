import React, { useState, useEffect, useRef } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable , Animated } from 'react-native';
import styles from '../../jstyle';
import { StoryContainer } from 'react-native-stories-view';
import hardini from  '../../assets/images/hardini.jpg';
import jakob from '../../assets/images/jakob.jpg';
import john from '../../assets/images/john.jpg';
import kajetan from '../../assets/images/kajetan.jpg';
import { Button } from 'react-native-paper';

const StoryPage = ({navigation}) => {

    //console.log(StatusBar.currentHeight)

    const [current,setCurrent] = useState(0);
    const [content,setContent] = useState([
      {
        id:1,
        content:require('../../assets/c.jpg'),
        title:"Créer des évènements INOUBLIABLES partagez-les avec votre COMMUNAUTE",
        type:'image',
        finish:0,
      },
      {
        id:2,
        content:require('../../assets/a1.jpg'),
        title:"Public ou Privée , féderer votre communauté autour de vos passions",
        type:'image',
        finish:0,
      },
      {
        id:3,
        content:require('../../assets/x2.jpg'),
        title:"Faite partir de l'élite et récever de nombreux AVANTAGES",
        type:'image',
        finish:0,
      },
      {
        id:4,
        content:require('../../assets/a3.jpg'),
        title:"Sans meme vous deplacez , reserver votre ticker pour prendre part a vos evenements PREFEREES",
        type:'image',
        finish:0,
      },
      {
        id:5,
        content:require('../../assets/z.jpg'),
        title:"Participer aux évènements les plus branchés et rencomtré de nouvelles PERSONNES",
        type:'image',
        finish:0,
      },
      {
        id:6,
        content:require('../../assets/o3.jpg'),
        title:"Explorez de nouveaux horizons , de nouvelles cultures , ouvrez-vous au MONDE",
        type:'image',
        finish:0,
      },
    ])


    const progress = useRef(new Animated.Value(0)).current;
    const start=()=>{
      Animated.timing(progress,{
        toValue:1,
        duration:5000,
        useNativeDriver:false,
      }).start(({finished}) => {
        if(finished){
          next()
        }
      })
    }


    const next = () => {
      if(current != content.length - 1 ){
        let tempData =content;
        tempData[current].finish = 1;
        setContent(tempData);
        setCurrent(current + 1)
        progress.setValue(0)
      }else{
        close()
      }
    }

    const previous = () => {
      if(current - 1 >= 0 ){
        let tempData =content;
        tempData[current].finish = 0;
        setContent(tempData);
        progress.setValue(0)
        setCurrent(current - 1)
      }else{
        close()
      }
    }

    const close = () => {
      progress.setValue(0)
    }

    
    return (
    <View style={styles.containerStoryPage}>
      <Image 
        source={content[current].content}
        onLoadEnd={() => {
          progress.setValue(0);
          start();
        }}
        style={styles.image}
      />
      <View style={styles.containtImage}> 
        <TouchableOpacity style={styles.clickable} onPress={() => {
          previous()
        }}>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clickable} onPress={() => {
          next()
        }}>
          <View></View>
        </TouchableOpacity>
      </View>
      <View style={styles.barContent}>
        {
          content.map((item,index) => {
            return (
            <View style={styles.bar}  key={item.id}>
              <Animated.View style={{
                flex: current == index ? progress : content[index].finish,
                backgroundColor:"#14FE64",
                height:3
              }}>
              </Animated.View>
            </View>
            )})
        }
        <View style={styles.bar}></View>
      </View>
      <View style={styles.airder}>
        <Text style={styles.appName}>
          CELEBRATE
        </Text>
        <View style={styles.boxBubble}>
          <View style={styles.bubble}>
            <Text style={styles.title}>
              {content[current].title}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.pression1} onPress={() => navigation.navigate('Connect')}>
          <Text style={{color:"#14FE64",fontSize:18}}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pression2} onPress={() => navigation.navigate('Inscrip')}>
          <Text style={{color:"#000000",fontSize:18}}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default StoryPage;

