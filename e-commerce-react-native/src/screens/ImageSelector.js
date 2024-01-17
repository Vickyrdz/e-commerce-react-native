import { View, Text, Image, StyleSheet, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton/AddButton';
import * as ImagePicker from 'expo-image-picker';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../app/Services/shopService';
import { useSelector } from 'react-redux'; 


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
    <View>
      <Image 
        style={styles.image} 
        source={image ? {uri: image} : require('../../assets/userProfile.png')} 
        esizeMode='cover' 
       />
      <AddButton title='Take another photo' onPress={pickImage}/>
      <Button title='Confirm photo' onPress={confirmImage}/>
    </View>
  )
}

export default ImageSelector;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})