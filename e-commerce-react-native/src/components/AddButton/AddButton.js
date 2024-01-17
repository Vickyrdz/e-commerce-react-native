import { View, Text, Pressable } from 'react-native'
import React from 'react'

const AddButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress}>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default AddButton