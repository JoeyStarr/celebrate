import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containere: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contain: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      paddingTop:30
    },
    containerStoryPage: {
        width:windowWidth,
        height:windowHeight
    },
    image:{
      width:"100%",
      height:"100%",
      resizeMode:"cover"
    },
    containtImage:{
      width:"100%",
      height:"100%",
      position:"absolute",
      top:0,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    clickable:{
      height:"100%",
      width:"40%",
    },
    barContent:{
      width:windowWidth,
      position:"absolute",
      top:35,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    },
    bar:{
      flex:1,
      marginLeft:5,
      flexDirection:"row",
      backgroundColor:"grey",
      height:3
    },
    airder:{
      top:40,
      width:windowWidth,
      height:'auto',
      position:"absolute"
    },

    footer:{
      bottom:0,
      width:windowWidth,
      height:120,
      position:"absolute",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
    },

    appName:{
      fontSize:24,
      margin:10,
      color:"#14FE64",
      fontWeight:600,
      letterSpacing:10
    },

    title : {
      fontSize:24,
      color: "white",
      fontWeight:800,
      lineHeight:30,
      marginVertical:10,
      marginHorizontal:30,
    },

    pression1:{
      paddingVertical:15,
      paddingHorizontal:20,
      borderRadius:10,
      backgroundColor:"black",
      borderWidth:2,
      elevation:10,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 24,
    },
    pression2:{
      paddingVertical:15,
      paddingHorizontal:35,
      borderRadius:10,
      backgroundColor:"#14FE64",
      elevation:10,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 24,
    },
    boxBubble:{
      width:"100%",
      alignItems:"center"
    },

    bubble:{
      width:"90%",
      borderRadius:12,
      height:"auto",
      opacity:.8,
      backgroundColor:"black",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16,
      elevation: 24,
    },
    map: {
      width: '100%',
      height: '100%',
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:-25,
    },
    conf:{
      width:windowWidth,
      backgroundColor:"red",
      height:100,
    },
    entete:{
      width:windowWidth,
      height:100,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
    },

    contenNum:{
      width:windowWidth,
      justifyContent:'space-evenly',
      flexDirection:'row',
    },

    contText:{
      width:windowWidth,
      paddingHorizontal:25,
      marginBottom:5
    },

    contText2:{
      width:windowWidth,
      paddingHorizontal:25,
      marginTop:25
    },

    codes:{
      width:'20%',
      height:60,
      borderWidth:1,
      borderColor:'white',
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'lightgrey',
    },
    numinput:{
      width:'60%',
      paddingLeft:12,
      fontSize:18,
      height:60,
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'lightgrey',
      borderColor:'white'
    },
    press:{
      marginVertical:20,
      paddingVertical:15,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:'#14FE64'
    },

    contForm:{
      width:windowWidth,
      paddingHorizontal:15,
      paddingVertical:5,
      alignItems:'center',
    },
    champ:{
      width:'90%',
      height:60,
      borderRadius:10,
      marginVertical:8,
      paddingLeft:25,
      backgroundColor:'white',
      borderColor:'white',
      borderWidth:2
    },
    contDate:{
      width:windowWidth,
      flexDirection:'colomn',
      justifyContent:"space-evenly",
      alignItems:'center'
    },
    champDate:{
      width:'90%',
      height:60,
      borderRadius:10,
      justifyContent:'center',
      paddingLeft:25,
      marginVertical:8,
      backgroundColor:'white',
      borderColor:'white',
      borderWidth:2
    },
    date:{
      borderWidth:2,
      borderColor:"green",
      width:"40%",
      justifyContent:"center",
      alignItems:"center",
      height:60,
      borderRadius:10
    },
    rise:{
      width:"90%",
      justifyContent:"center",
      borderRadius:15,
      height:150,
      backgroundColor:"white"
    },
    scroll:{
      windowWidth:"100%",
      height:"100%"
    }
});

export default styles;