import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contextAPI/useAuth';

const AboutScreen = ({ navigation }) => {
  const { navigate } = useNavigation();
  const { logout, user } = useContext(useAuth);

  const handleEditProfile = () => {
    navigation.navigate('EditProfil'); // EditProfil ekranına gitmek için navigate kullanıyoruz
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>{user.username}</Text>
      </View>
      <View style={styles.item}>
        <Text>{user.email}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfil')}>
        <Text style={styles.buttonText}>Düzenle</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => logout(navigate)}>
        <Text style={styles.buttonText}>Çıkış</Text>
      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#6592C9',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6592C9',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutScreen;
