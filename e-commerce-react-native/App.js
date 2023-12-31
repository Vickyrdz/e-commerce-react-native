import { StyleSheet, StatusBar} from 'react-native';
import { colors } from './src/global/colors';
import {useFonts} from 'expo-font';
import { fonts } from './src/global/fonts';
import TabNavigation from './src/navigation/TabNavigation';
import { store } from './src/app/store';
import { Provider } from 'react-redux';


export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) return null; 

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Provider store={store}>
        <TabNavigation />
      </Provider>
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
