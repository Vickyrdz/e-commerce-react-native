import { StyleSheet, View } from 'react-native';
import { colors } from './src/global/colors';
import Home from './src/screens/Home'
import { useState } from 'react';
import ItemListCategories from './src/screens/ItemListCategories';
import {useFonts} from 'expo-font';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(""); 

  const [fontsLoaded] = useFonts({
    PoppinSemiRegular:require('./assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
    PoppinMedium:require('./assets/Fonts/Poppins/Poppins-Medium.ttf')
  })

  if(!fontsLoaded) return null; 

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
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
