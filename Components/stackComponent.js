import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoryPage from './onBoarding/storyPage';
import Maps from './homeComponent/maps';
import Inscription from './Verifcation/InscriptionPage';
import Connection from './Verifcation/ConnectionPage';
import Person from './Verifcation/infoPersonal';
import Preference from './Verifcation/preferencePage';
import MyTabs from './tabsComponent';



const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}
        >
            <Stack.Screen name="Storypage" component={StoryPage} />
            <Stack.Screen name="Homepage" component={MyTabs} />
            <Stack.Screen name="Connect" component={Connection} />
            <Stack.Screen name="Inscrip" component={Inscription} />
            <Stack.Screen name="Person" component={Person} />
            <Stack.Screen name="Prefer" component={Preference} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}