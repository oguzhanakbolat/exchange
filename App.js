import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Exchange from './components/Exchange';
import Usd from './constans/icons/usd';

import TopExchange from './components/TopExchange';
import { useEffect, useState } from 'react';
import { getExchange } from './service';
import Parite from './components/Parite';
import AsyncStorage from '@react-native-async-storage/async-storage';

const formatMoney2 = (money) => {
  const list = Number(money);
  if(list > 10000) {
    return list.toFixed(1);
  }
  else if(list > 1000) {
    return list.toFixed(2);
  }
  else if(list > 100) {
    return list.toFixed(3);
  }
  else {
    return list.toFixed(4);
  }
}

export default function App() {
  const [list, setList] = useState([]);

  const getData = async () => {
    const res = await getExchange();

    if(res.data.length > 0) {
      AsyncStorage.setItem('exchange', JSON.stringify(res.data));
      setList(res.data);
    }
    else {
      const data = await AsyncStorage.getItem('exchange');
      if(data) {
        setList(JSON.parse(data));
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ position: 'absolute', opacity: 0.03, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Usd size="600" color="red"/>
      </View>
      <View style={{ height: 100, width: 100}} />
      {
        list.length === 0 ? <Text>Yükleniyor...</Text> : 
        <>
      <TopExchange eur={list[1]} usd={list[0]}  />
      <Parite eur={list[1]} usd={list[0]}/>
      <FlatList
        data={list.slice(2)}
        style={{ width: '100%' }}
        renderItem={({ item }) => <Exchange data={item} />}
        keyExtractor={item => item.id}
      />
      </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
