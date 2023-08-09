import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PariteExchange = ({
  data,
  enteredValue,
  handleInputChange,
  handleReset,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { symbol: data.symbol })}
    >
      <View style={styles.container}>
        <View style={styles.iconContianer}>
          <Image style={styles.icon} source={{ uri: data.icon }} />
        </View>
        <View style={styles.title}>
          <Text style={styles.symbol}>{data.symbol}</Text>
          <Text style={styles.name}>{data.name}</Text>
        </View>

        <View style={styles.exchagne}>
          <Text style={styles.text}>Satış</Text>
          <Text style={styles.price}>{data.sales}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onFocus={handleReset}
            style={styles.input}
            onChangeText={(text) => handleInputChange(Number(text), data.symbol)}
            value={enteredValue}
            keyboardType="numeric"
            placeholder="Değer Giriniz"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PariteExchange;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  iconContianer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  icon: {
    width: 48,
    height: 48,
  },
  title: {
    flex: 1,
    justifyContent: "center",
  },
  symbol: {
    fontSize: 21,
    fontWeight: "700",
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
  },
  exchagne: {
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 72,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "300",
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginLeft: 5,
  },
});
