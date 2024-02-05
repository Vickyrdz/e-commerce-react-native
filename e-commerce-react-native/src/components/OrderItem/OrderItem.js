import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../global/colors";

const OrderItem = ({ order, navigation }) => {
  const total = order.items?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.color} />
      <Text style={styles.date}>{order.updateAt?.split(", ")?.[0]}</Text>
      <View style={styles.containerPrice}>
        <Text style={styles.texts}>Total ${total}</Text>
        <Pressable
          onPress={() => navigation.navigate("OrderDetail", { order })}
        >
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={colors.strongGray}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    height: 80,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  color: {
    height: 76,
    width: 14,
    backgroundColor: colors.lilac,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  date: {
    fontFamily: "PoppinMedium",
    color: colors.strongGray,
    width: "50%",
    marginLeft: 15,
  },
  texts: {
    fontFamily: "PoppinMedium",
    color: colors.strongGray,
    width: "95%",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  containerPrice: {
    flexDirection: "row",
    width: "35%",
    alignItems: "center",
  },
});
