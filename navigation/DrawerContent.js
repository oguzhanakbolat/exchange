import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image,  } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { AboutIcon, CalcIcon, ContactIcon, HomeIcon, SettingIcon } from '../constans/icons';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window');

const DrawerContent = (props) => {
    const insets = useSafeAreaInsets();
    const { user } = useSelector(state => state.user);



  return (
    <View style={styles.container}>

        <SafeAreaView>
            <TouchableOpacity style={[styles.menu, { top: insets.top}]} onPress={props.navigation.toggleDrawer}>

            </TouchableOpacity>

            <View style={styles.userPhotoContainer}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3386&q=80'}} style={styles.userPhoto} />
            </View>

            <Text style={styles.listText}>{user?.email}</Text>
            <Text style={styles.listText}>{user?.username}</Text>

            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('Main')}>
                <HomeIcon size={32} color={'#fff' }/>
                <Text style={styles.listText}>Main</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('About')}>
                <AboutIcon size={32} color={'#fff' }/>
                <Text style={styles.listText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('Settings')}>
                <SettingIcon size={32} color={'#fff' }/>
                <Text style={styles.listText}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('Contact')}>
                <ContactIcon size={32} color={'#fff' }/>
                <Text style={styles.listText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem} onPress={() => props.navigation.navigate('Calc')}>
                <CalcIcon size={32} color={'#fff' }/>
                <Text style={styles.listText}>Calc</Text>
            </TouchableOpacity>



      </SafeAreaView>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        height
    },
    menu: {
        position: 'absolute',
        right: -10,
        backgroundColor: 'blue',
        height: 40,
        width: 40
    },
    listItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    listText: {
        color: '#fff',
        marginLeft: 20
    },
    userPhotoContainer: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    userPhoto: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#fff',
    }


})