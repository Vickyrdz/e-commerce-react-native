import Header from '../components/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail'


const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        header: () => {
          return (
            <Header
              title='Home'
            />
          );
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={ItemListCategories} />
      <Stack.Screen name="Detail" component={ItemDetail} />


      
    </Stack.Navigator>
  );
};

export default ShopStack


