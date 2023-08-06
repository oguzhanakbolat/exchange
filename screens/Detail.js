import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getExchangeDetail } from '../service';
import { StatusBar } from 'expo-status-bar';
import BackIcon from '../constans/icons/back';
import { formatMoney } from '../utils/money';
import { dateFormat } from '../utils/date';

const DetailScreen = ({ navigation, route }) => {
  const [data, setData] = useState({exchanges: []});
  const [loading, setLoading] = useState(false);
 
  const getData = async() => {
    setLoading(true);
    const res = await getExchangeDetail(route.params.symbol);

    if(res.success) {
      setData(res.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [route.params.symbol]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Main')}>
            <BackIcon size="32" />
          </TouchableOpacity>
          <Text style={styles.title}>{ data?.name }</Text>
          <View style={styles.imageContianer}>
            <Image source={{ uri: data?.icon }} style={styles.flag} />
          </View>
        </View>
        <View style={styles.exchageContianer}>
          <View style={styles.exchageHeader}>
            <Text style={styles.headerText}>Alış</Text>
            <Text style={styles.headerText}>Satış</Text>
            <Text style={[styles.headerText, styles.lastText]}>Tarih</Text>
          </View>
          {
            loading ?
            <View style={styles.loading}> 
              <ActivityIndicator size="large" color="#f00" />
              <Text>Yükleniyor...</Text> 
            </View> :
            data?.exchanges.length > 0 &&
            data?.exchanges.map((item, index) => 
                <View key={index} style={styles.exchage}>
                  <Text style={styles.text}>{ formatMoney(item.buy) }</Text>
                  <Text style={styles.text}>{ formatMoney(item.sale) }</Text>
                  <Text style={[styles.text, styles.lastText]}>{ dateFormat(item.date) }</Text>
                </View>
              )

          }
          </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    width: 48,
    height: 48,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '300'
  },
  imageContianer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  flag: {
    width: 32,
    height: 32,
  },
  exchageContianer: {
    flex: 1,
    padding: 16
  },
  exchage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 8
  },
  lastText: {
    textAlign: 'right',
    paddingRight: 8
  },

  exchageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: '#222',
    borderRadius: 4
  },
  headerText: {
    paddingLeft: 8,
    fontSize: 16,
    flex: 1,
    color: '#fff',
    fontWeight: '600',
    paddingRight: 8
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
