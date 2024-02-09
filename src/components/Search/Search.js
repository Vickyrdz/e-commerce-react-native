import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const Search = ({setKeyword}) => {

  const [input, setInput] = useState("");
  const [error, setError] = useState(""); 

  const search = () => {
    const expression = /\d/; 
    if(expression.test(input)){
      setError("¡Please, Do not enter numbers!")
    } else {
      setKeyword(input)
    }
  };

  const removeInputAndError = () => {
    setInput("");
    setError("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={input}
          onChangeText={(t) => setInput(t)}
        />
        <View style={styles.icons}>
          <Pressable onPress={search}>
            <EvilIcons name="search" color="black" size={25} />
          </Pressable>
          <Pressable onPress={removeInputAndError}>
            <EvilIcons name="close" color="black" size={25} />
          </Pressable>
        </View>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

    </View>
  );
}

export default Search

const styles = StyleSheet.create({
container: {
  width: "80%",
  alignSelf: 'center',
  marginTop: 10
},
container2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    
},
input:  {
  color: "gray",
  backgroundColor: 'white', 
  padding: 10,
  borderWidth: 1,
  width: '80%',
  borderColor: 'white',
  borderRadius: 10
},
icons: {
  flexDirection: 'row',
  width: "20%",
  justifyContent: 'center',
  paddingLeft: 15
},
error: {
  marginTop: 5,
  color: 'red',
  fontStyle: 'italic'
}
})