import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import AddButton from '../components/AddButton/AddButton';
import { useGetProfileImageQuery } from '../app/Services/shopService';
import { useSelector } from 'react-redux'; 

const Profile = ({ navigation }) => {
  const localId = useSelector(state => state.auth.value.localId); 
  const {data} = useGetProfileImageQuery(localId); 

  return (
    <View>
      <Image style={styles.image} source={data?.image ? {uri: data.image} : require('../../assets/userProfile.png')} resizeMode='cover' />
      <AddButton title='Select image' onPress={()=> navigation.navigate('ImageSelector')}/>
    </View>
  )
}

export default Profile; 


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})

