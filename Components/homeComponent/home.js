import React, { useState, useEffect, useRef } from 'react';
import styles from '../../jstyle';
import { View, Text, TouchableOpacity, Image, StatusBar,Pressable, Button , Animated,Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Graph from './graph';
import { VictoryChart, VictoryNode, VictoryLabel, VictoryLink } from 'victory-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Line, Circle } from 'react-native-svg';

const Home = ({}) => {
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    
    const mod1 = () => setShow1(c => !c)
    const mod2 = () => setShow2(c => !c)

    return (
        <View style={styles.containn}>
                <View style={styles.containerIcon}>
                    <View>
                        <Text style={{color:"black",fontSize:24,fontWeight:600,letterSpacing:5}}>CELEBRATE</Text>
                    </View>
                    <View style={styles.Iconn}>
                        <Pressable style={styles.Ico} onPress={mod1}> 
                            <Ionicons name="leaf-outline" size={32} color="black" />
                        </Pressable>
                        <Pressable style={styles.Ico} onPress={mod2}>
                            <Ionicons name="chatbubbles-outline" size={32} color="black" />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.relConteneur}>
                    <Graph/>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={show1}
                    onRequestClose={mod1}>
                    <View style={styles.mod}>
                        <View >
                            <Text>Notification !</Text>
                            <Button title="close" onPress={mod1}/>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={show2}
                    onRequestClose={mod2}>
                    <View style={styles.mod}>
                        <View >
                            <Text>Message !</Text>
                            <Button title="close" onPress={mod2}/>
                        </View>
                    </View>
                </Modal>
        </View>
    )
}

export default Home ;