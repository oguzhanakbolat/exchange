import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabBarButton from '../components/TabBarButton';

const { width } = Dimensions.get('window');

function TabNav({ state, navigation }) {
    const insets = useSafeAreaInsets()
    const { navigate } = navigation;
    const activeRoot = state.routeNames[state.index];
   

  return (
    <View style={{ flexDirection: 'row' }}>
        <View style={[styles.footerContainer, { paddingBottom: insets.bottom, height: 52 + insets.bottom}]}>
            <TabBarButton navigate={() => navigate('Main')} text="Ana Ekran" isActive={['Main', 'Detail', 'Parite'].includes(activeRoot)} icon="Home" />
            <TabBarButton navigate={() => navigate('Settings')} text="Ayarlar" isActive={['Settings'].includes(activeRoot)} icon="Settings" />
            <TabBarButton navigate={() => navigate('About')} text="Hakkında" isActive={['About'].includes(activeRoot)} icon="About" />
            <TabBarButton navigate={() => navigate('Contact')} text="İletişim" isActive={['Contact'].includes(activeRoot)} icon="Contact" />
            <TabBarButton navigate={() => navigate('Calc')} text="Hesap Makinesi" isActive={['Calc'].includes(activeRoot)} icon="Calc" />
        </View>
    </View>
  );
}


export default TabNav;

const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 4,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        backgroundColor: '#6592C9'
      },
      button: {
        height: 48,
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      name: {
        fontSize: 10,
        color: '#00387c'
      }
})
