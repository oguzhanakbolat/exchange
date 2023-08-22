import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { enableScreens } from 'react-native-screens';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import RooNavigation from './navigation/root';

import Toast from './layout/Toast';
import { useEffect } from 'react';
import useFonts from './constans/fonts';
import { store } from './store';

enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {



  const loadApp = async () => {
    try {
      await useFonts();
    }
    catch (e) {
      console.warn(e);
    }
    finally {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Toast>
          <LinearGradient
            colors={['#f005', 'transparent']}
            style={styles.background}
          />
          <RooNavigation />
        </Toast>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
