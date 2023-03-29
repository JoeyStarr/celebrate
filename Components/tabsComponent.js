import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Maps from './homeComponent/maps';
import Feed from './homeComponent/feed';

const Tab = createMaterialBottomTabNavigator();
/*
const res = [
  { route: 'Maps', label: 'Maps', type:Icons.Ionicons, activeIcon: 'grid', inaActiveIcon: ''},
  { route: 'Maps', label: 'Maps', type:Icons.Ionicons, activeIcon: 'grid', inaActiveIcon: ''},
] */

export default function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={{position:'absolute',paddingVertical: 5,borderRadius:16,backgroundColor:'pink'}} 
    >
      <Tab.Screen name="Maps" component={Maps} 
        options={{

        }}
      />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}
