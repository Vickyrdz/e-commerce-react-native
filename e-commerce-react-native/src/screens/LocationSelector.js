import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton/AddButton';
import * as Location from 'expo-location';
import MapPreview from '../components/MapPreview/MapPreview';
import { GoogleApi } from '../firebase/GoogleApi';
import { usePostProfileLocationMutation } from '../app/Services/shopService';
import { useSelector } from 'react-redux'; 
import { colors } from '../global/colors';


const LocationSelector = ({navigation}) => {

    const [location, setLocation] = useState(latitude='', longitude="");  
    const [address, setAddress] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const [triggerProfileLocation, {data, isSuccess}] = usePostProfileLocationMutation(); 
    const localId = useSelector(state => state.auth.value.localId); 
 
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({ 
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })();
    }, []);


    const onConfirm = async () => {
        const locationFormatted = {
            address,
            ...location
        }
        const data = await triggerProfileLocation({localId, locationFormatted})
        navigation.goBack(); 
    }


    useEffect(()=> {
        (async ()=>{
            try {
                if(location.latitude) {
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${GoogleApi}`)
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address); 
                   
                }
            } catch (error) {
                setErrorMsg(error); 
            }
          
        })();
    }, [location]); 



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MapPreview style={styles.image} latitude={location.latitude} longitude={location.longitude}/>
      </View>
      <Text style={styles.textLocation}>{address}</Text>
      <Pressable onPress={onConfirm}>
        <Text  style={styles.textConfirm}>Confirm</Text>
      </Pressable>
    </View>
  );
}

export default LocationSelector

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "80%",
    height: "50%",
    marginTop: 200,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20
  },
  imageContainer:{
    width: 280,
    height: 280,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: 'center',
    position: 'relative',
    bottom: 60
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20
  },
  textLocation: {
    textAlign: 'center',
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
    fontSize: 16,
    position: 'relative',
    bottom: '5%'
  },
  textConfirm: {
    color: colors.lilac,
    fontFamily: 'PoppinSemiRegular',
    fontSize: 16,
    marginTop: 20
  }
})