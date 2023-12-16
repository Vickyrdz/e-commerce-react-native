import { StyleSheet, StatusBar} from 'react-native';
import { colors } from './src/global/colors';
import {useFonts} from 'expo-font';
import Navigation from './src/navigation/Navigation';
import { fonts } from './src/global/fonts';


export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) return null; 

  return (
    <>
      <StatusBar barStyle={'light-content'}/>
      <Navigation/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'start',
  },
});
