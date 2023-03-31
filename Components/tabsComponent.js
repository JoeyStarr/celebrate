import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Maps from './homeComponent/maps';
import Feed from './homeComponent/feed';
import Icon from 'react-native-ionicons';
import Profil from './homeComponent/profl';
import Ticket from './homeComponent/ticket';
import Home from './homeComponent/home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
/*
const res = [
  { route: 'Maps', label: 'Maps', type:Icons.Ionicons, activeIcon: 'grid', inaActiveIcon: ''},
  { route: 'Maps', label: 'Maps', type:Icons.Ionicons, activeIcon: 'grid', inaActiveIcon: ''},
] */

export default function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'lightgray',
      activeBackgroundColor: '#c4461c',
      inactiveBackgroundColor: '#b55031',
          style: {
                backgroundColor: '#CE4418',
                paddingBottom: 3
          }
   }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Maps') {
              iconName = focused
                ? 'planet'
                : 'planet-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'navigate' : 'navigate-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Ticket') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'people' : 'people-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          }
        })
        
      }
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Ticket" component={Ticket} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
