import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './Components/stackComponent';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <MyStack />
      <StatusBar style="auto" />
    </>
  );
}

