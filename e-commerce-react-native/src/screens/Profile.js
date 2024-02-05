import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useGetProfileImageQuery, useGetProfileLocationQuery } from '../app/Services/shopService';
import { useSelector, useDispatch } from 'react-redux'; 
import { colors } from '../global/colors'
import { deleteSession, fetchSession } from '../DB';
import { deleteUser } from '../features/Auth/AuthSlice';


const Profile = ({ navigation }) => {
  const localId = useSelector(state => state.auth.value.localId); 
  const {data} = useGetProfileImageQuery(localId); 
  const {data:location} = useGetProfileLocationQuery(localId); 

  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSession(localId);
    dispatch(deleteUser()); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={data?.image ? {uri: data.image} : require('../../assets/userProfile.png')} resizeMode='cover' />      
        </View>
        <Pressable style={styles.containerIcon}  onPress={()=> navigation.navigate('ImageSelector')}>
          <Image
          style={styles.icon}
          source={{ uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVR4nO2bW4hVVRjHl5cuU6ApWCE0viQVqd2oKRISe1Enx8DXQSh8kTAfSrAHRckHsSxvUYFGmTIaVJbjJW8P3Yyip57S0hejLDW7mArRLz7Of4+rPXufs885k7PWmf2HYWbW+vaZ9fvW+tb61lp7nCtVqlSMAu4DFgFLgEeBYW4oCBgBvEp/HQJGuyEAv0XAF4B1wErglMq+aFknAMOBtwT6JzDNq7sF+E51XwNjXQvCv5kF37JOALqBXmCZ1/O/A1OrPNMOfB99OADPZkxymT3fciOByrJm+htYAZzR7weBqwp+RpwjgcvwpsUqu9dzwrst6wT+C29a6NW1thPoD38AaEvZDIQTDtuK4kISsNCL+R3AZh8euBq4ZgCc8JOe63KBre9/AP8A83Iafkyz+rAmnbBcz6x2IQn4QQ17KVV+M3BcdR+n6up2ArBW9s+7kAT0eLHf5wRgTrXJqx4nWPKkvYPpIReKgBfUqEvARd8JNuSBR4DrPPtxyg0mFHWC4C3MTK+5QOHnAJ1pJ6TsbwS+Uf1yrzzXCYK39BntIke4EAS86MN75blOAD5SuTlhXKqunxOig6/lBG2K9tlIcBlKOeFgDPBdVeyqhoNsRgOfKMnJyhOCg19TBL5gOFyv1QHlCX7c+05Y6mKELxAO01RmeUJ73wOX622lMPW6wOBnN/B8Z84S2QXc5Nm1AU/rLMHSalP3QPPUJWtwNXjgAWA/8GCNz6m1RLZpA+XrORc4fAdwTjaLmpwT3ggN/mUP/rEa8NuBkU3OCTuCgKcSmwn8xRz49kbg85xgu0gv5sOGNwG3Kkl5u154PX8n8EtqyAcBv7ZGz4+yww393NCpDDDJuwX6FDgpZ/Ydn4UA35kT87/akVQTf8eH3+Nlf8NjgD8nm9cz6kfaKU1yClwAfncCP6iiAr+uDvh+E57grdx0PFb4S1npre7vz8rmnQx4u+ndqnpzUkfGZ9wO/CibvcC1LkD42f8T/B0lfEVlz7tAhv36oTzs118B+ClehmfrfAk/qKLsea7EsL8ruGFvAlapUXadNMNVz/B6amR4ReA/TDZKgy4q21W7rUXfjwrSztqm66s14b23s9Du7S/y1ZM+c48e3gQ8o8atEZAtT08AG4EvVXeqQfi7gdOy+SA4+FT8L3EpaWI7r9AY2+SEN/i7uiwBm9TI+Tn1R1S/ALihZXo+EbBTDX3cZcjbCSaT5M91wO8MGt4EfKbGPuwyBIzXKdDnqUlyeobtPVHBm4Bv1eDbXA1p+H+V5YAo4U1a/kxjXAEBr8h+cc6wD+MYq4iovFmRJEFTCj7zpOy3ez2fXE+/H03Pm4CJXkzb5DbZ1ZCWt+Se3u/53mh6PhEw03NAISdo1FzQyDnr9XyhFxiDEpX7dbKcYHOC9gkdclS3/mtrhdfrpveihDd5Jz+Naku08CZtTvL0G3BC+wF7W2ubHGbv4D4F3O9iFzAX2AVsUDjM0sQYb6+WKlXKVdG/mfo9qEZnAzcAAAAASUVORK5CYII="}}
        /> 
        </Pressable> 
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.containerText}>
          <Text style={styles.text}>{location?.address}</Text>
        </View>   
        <Pressable style={styles.button}  onPress={()=> navigation.navigate('LocationSelector')}>
           <Text style={styles.buttonText}>{{location} ? "See location" : "Add location"}</Text>
        </Pressable>   
      </View>
      <View>
        <Pressable onPress={onLogout} style={styles.logOut}>
          <Text style={styles.close}>Close Session</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Profile; 


const styles = StyleSheet.create({
    container:{
      width: "80%",
      height: "60%",
      alignSelf: "center",
      alignItems: "center",
      marginTop: 130,
      borderRadius: 30,
      backgroundColor: 'white',
      marginTop: 200
    },
    firstContainer: {
      flexDirection: "row",
      width: 320,
      marginLeft: 40,
      gap: 5,
      position: 'relative',
      bottom: 80

    },
    imageContainer:{
      width: 280,
      height: 280,
      borderRadius: 20,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: 'center',

    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20
    },
    containerIcon: {
      width: 25,
      height: 25,
      backgroundColor: colors.mediumGray,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
      marginBottom: 5,
      marginTop: 10
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'cover'
    },
    secondContainer:{
      
      gap: 5,
      width: 320,
      marginLeft: 20,
    },
    containerText:{
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      width: 280,
      justifyContent: 'center',
      marginLeft: 10
    },
    text: {
      fontFamily: "PoppinSemiRegular",
      color: colors.strongGray,
      textAlign: 'center',
    },
    button: {
        backgroundColor: colors.lilac,
        height: 40,
        width: 190,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 20

    },
    buttonText: {
      fontFamily: 'PoppinBold',
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
    },
    logOut: {
      height: 40,
      width: 100,
      marginTop: 40,
      borderWidth: 1,
      borderColor: colors.error,
      borderRadius: 10,
      justifyContent: 'center',
    },
    close: {
      textAlign: 'center',
      fontFamily: 'PoppinSemiRegular',
      color: colors.error,
      fontSize: 12
    },

})

