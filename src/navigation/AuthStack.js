
import Header from '../components/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator();

const AuthStack
 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign Up"
      screenOptions={({ route }) => {
        header: () => {
          return (
            <Header
              title='Welcome'
            />
          );
        };
      }}
    >
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStack


