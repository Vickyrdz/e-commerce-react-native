import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from '../screens/Home'; 
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetail';
import Header from '../components/Header/Header';

const Stack = createNativeStackNavigator(); 


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          ({route}) => 
            {
              header: () => {
                return <Header title={
                  route.name === 'Categories' ? "Categories" :
                  route.name === "ItemListCategory" ? route.params.category : 
                  'Detail'
                }/>
              }
            }
        }
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

