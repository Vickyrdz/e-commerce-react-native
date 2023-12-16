import { StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import { colors } from './src/global/colors';
import Home from './src/screens/Home'
import { useState } from 'react';
import ItemListCategories from './src/screens/ItemListCategories';
import {useFonts} from 'expo-font';
import ItemDetail from './src/screens/ItemDetail';

export default function App() {

  const [categorySelected, setCategorySelected] = useState(""); 
  const [productDetailId, setProductDetailId] = useState(0); 

  const [fontsLoaded] = useFonts({
    PoppinSemiRegular:require('./assets/Fonts/Poppins/Poppins-SemiBold.ttf'),
    PoppinMedium:require('./assets/Fonts/Poppins/Poppins-Medium.ttf')
  })

  if(!fontsLoaded) return null; 

  return (
    <>
      <StatusBar barStyle={'light-content'}/>
      <SafeAreaView style={styles.container}>
        {categorySelected ? (
          productDetailId != 0 ? (
            <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId}/>
          ) : (
            <ItemListCategories
            category={categorySelected}
            setCategorySelected={setCategorySelected}
            setProductDetailId={setProductDetailId}
          />
          )
        ) : (
          <Home setCategorySelected={setCategorySelected} />
        )}
      </SafeAreaView>
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
