import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { colors } from '../../global/colors';

const mayus = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};


const OrderDetailItem = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{mayus(item.title)}</Text>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <View style={styles.containerText}>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.containerPrice}>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.price}>${item.price * item.quantity}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default OrderDetailItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    width: "100%",
    paddingBottom: 20,
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontFamily: 'PoppinMedium',
    color: colors.strongLilac,
    fontSize: 16,
    marginBottom: 20
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 10
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  containerText:{
    width: "70%"
  },
  containerPrice: {
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
    marginTop: 20
  },
  description: {
    textAlign: 'center',
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
    fontSize: 12
  },
  quantity:{
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
    fontSize: 14
  },
  price: {
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
    fontSize: 14
  }
})