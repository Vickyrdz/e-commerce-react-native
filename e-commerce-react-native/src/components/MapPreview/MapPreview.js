import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { GoogleApi } from '../../firebase/GoogleApi'

const MapPreview = ({latitude, longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude}, ${longitude}
    &zoom=13
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C${latitude}, ${longitude}
    &key=${GoogleApi}`;

    console.log({ mapPreviewUrl });

  return (
      <Image 
        source={latitude ? {uri:mapPreviewUrl} : require('../../../assets/location.png')}
        style={styles.image}
        />
  )
}

export default MapPreview

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 20
},
})