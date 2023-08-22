import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Exchange from '../components/Exchange';
import Usd from '../constans/icons/usd';

import TopExchange from '../components/TopExchange';
import { useEffect } from 'react';
import Parite from '../components/Parite';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getExchange } from '../store/exchangeSlice';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch();
  const {exchange, eur, usd, loading} = useSelector(state => state.exchange);
  
  useEffect(() => {
    if(exchange.length === 0) {
      dispatch(getExchange());
    }

    return () => {
      console.log('Main Screen Unmount')
    }
  }, []);
  
  return (
    <View style={[styles.container, { marginTop: insets.top}]} >
      <StatusBar style="auto" />
      <View style={styles.context}>
        <View style={{ position: 'absolute', opacity: 0.03, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Usd size="600" color="red"/>
        </View>
        {
        loading ?
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Yükleniyor...</Text>
        </View>
        :  
        <>
          <TopExchange eur={eur} usd={usd}  />
          <Parite eur={eur} usd={usd} />
          <FlatList
            data={exchange}
            style={{ width: '100%' }}
            renderItem={({ item }) => <Exchange data={item} />}
            keyExtractor={item => item.symbol}
          />
        </>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: 4,
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  button: {
    height: 48,
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
});
