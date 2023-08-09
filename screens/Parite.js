import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getExchange } from "../service";
import { formatMoney } from "../utils/money";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Exchange from "../components/Exchange";
import { SafeAreaView } from "react-native-safe-area-context";
import PariteExchange from "../components/PariteExchange";
import BackIcon from "../constans/icons/back";

const { width, height } = Dimensions.get("window");

const PariteScreen = ({ navigation }) => {
  const [enteredValue, setEnteredValue] = useState({
    value: 0,
    currency: "",
  });

  const handleReset = () => {
    setEnteredValue({
      value: 0,
      currency: "",
    });
  };
  const handleInputChange = (value, currency) => {
    setEnteredValue({
      value,
      currency,
    });
  };

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await getExchange();

    if (res.success) {
      const newList = res.data.data.map((item) => ({
        ...item,
        buying: formatMoney(item.buying),
        sales: formatMoney(item.sales),
      }));

      AsyncStorage.setItem("exchange", JSON.stringify(newList));
      setList(newList);
    } else {
      const data = await AsyncStorage.getItem("exchange");
      if (data) {
        setList(JSON.parse(data));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Yükleniyor...</Text>
        </View>
      ) : (
        <>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Main")}
            >
              <BackIcon size="32" />
            </TouchableOpacity>
            {!!enteredValue.value && (
            <Text style={styles.TL}>
              {(
                enteredValue.value *
                list.find((item) => item.symbol === enteredValue.currency).sales
              ).toFixed(2)}
              TL
            </Text>
          )}
          </View>

          

          <FlatList
            data={list}
            style={{ width: "100%" }}
            renderItem={({ item }, i) => {
              const amountCalcute = () => {
                if (!enteredValue.value) return enteredValue.value;

                const newAmount =
                  (enteredValue.value *
                    list.find((item) => item.symbol === enteredValue.currency)
                      ?.sales) /
                  item.sales;

                return newAmount.toFixed(2);
              };

              const amount = amountCalcute();

              return (
                <PariteExchange
                  key={i}
                  data={item}
                  handleReset={handleReset}
                  enteredValue={amount}
                  handleInputChange={handleInputChange}
                />
              );
            }}
            keyExtractor={(item) => item.symbol}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default PariteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  back: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    marginLeft: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TL: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    position: "absolute",
   
  },
});
