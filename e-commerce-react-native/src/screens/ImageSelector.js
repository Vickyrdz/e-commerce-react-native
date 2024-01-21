import { View, Text, Image, StyleSheet, Button, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton/AddButton';
import * as ImagePicker from 'expo-image-picker';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../app/Services/shopService';
import { useSelector } from 'react-redux'; 
import { colors } from '../global/colors';


const ImageSelector = ({navigation}) => {

    const [image, setImage] = useState('');
    const [triggerProfileImage] = usePostProfileImageMutation(); 
    const localId = useSelector(state => state.auth.value.localId); 
    const {data, isSuccess} = useGetProfileImageQuery(localId); 

    useEffect(()=>{
      if(isSuccess) setImage(data?.image)
    }, [isSuccess])
 
    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if (granted) {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
            base64: true
          });
       
          
          if (!result.canceled) {
            setImage('data:image/jpeg;base64,' + result.assets[0].base64);
          }
        }
    };

    const confirmImage = () => {
      triggerProfileImage({localId,image});
      navigation.goBack(); 
    }; 

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={image ? {uri: image} : require('../../assets/userProfile.png')} 
          esizeMode='cover' 
        />
      </View>

      <Pressable style={styles.button} onPress={pickImage}>
        <Text style={styles.takeText}>Take another photo</Text>
      </Pressable>
      <Pressable onPress={confirmImage}>
        <Text style={styles.confirmText}>Confirm photo</Text>
      </Pressable>
    </View>
  )
}

export default ImageSelector;

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
        width: 240,
        height: 240,
        borderRadius: 20
  },
  button: {
    backgroundColor: colors.lilac,
    height: 40,
    width: 190,
    borderRadius: 5,
    justifyContent: 'center',
    position: 'relative',
    bottom: "8%"
  },
  takeText: {
    color: 'white',
    fontFamily: "PoppinBold",
    fontSize: 17,
    textAlign: 'center',
  },
  confirmText: {
    fontFamily: 'PoppinSemiRegular',
    color: colors.lilac,
    fontSize: 15,
    marginTop: 40
  }
})