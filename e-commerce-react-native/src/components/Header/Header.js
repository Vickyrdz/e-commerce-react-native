import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: colors.strongGray,
        fontFamily: 'PoppinSemiRegular',
        fontWeight: '600',
        marginTop: 30
    }
})