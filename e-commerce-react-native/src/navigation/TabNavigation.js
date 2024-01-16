import { StyleSheet } from 'react-native';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from './CartStack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import OrderStack from './OrderStack';
import { Octicons } from '@expo/vector-icons';

 
const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
      <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}>
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack} 
          options={{
            tabBarIcon: ({focused}) => <AntDesign name="appstore1" size={24} title='lola' color={ focused ? colors.mediumBlue : colors.strongGray} />
          }}/>
        <Tab.Screen 
          name="CartStack" 
          component={CartStack} 
          options={{
            tabBarIcon: ({focused}) => <MaterialIcons name="shopping-cart" size={24} color={ focused ? colors.mediumBlue : colors.strongGray} />
          }}/>
         <Tab.Screen 
          name="OrderStack" 
          component={OrderStack} 
          options={{
            tabBarIcon: ({focused}) => <Octicons name="list-unordered"  size={24} color={ focused ? colors.mediumBlue : colors.strongGray} />
          }}/> 
      </Tab.Navigator>
  );
}

export default TabNavigation

const styles = StyleSheet.create({
  tabBar: {
    elevation: 4,
    position: 'absolute',  
   

  }
})

