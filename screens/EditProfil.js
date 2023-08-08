import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, na } from 'react-native';

const EditProfil = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    // Kullanıcının güncellenmiş bilgilerini kaydetmek için bir işlem yapabilirsiniz.
    // Örnek olarak, burada bir API çağrısı yapabilirsiniz.
    
    // Başarılı mesajını göstermek için bir yöntem ekleme
    showSuccessMessage();
  };

  const showSuccessMessage = () => {
    // Başarılı mesajı göstermek için Alert kullanıyoruz.
    Alert.alert('Başarılı', 'Bilgileriniz başarıyla güncellendi!', [
      { text: 'Tamam' }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kullanıcı Adı:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Kullanıcı adınızı girin"
      />
      <Text style={styles.label}>E-posta Adresi:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-posta adresinizi girin"
      />
      <Text style={styles.label}>Mevcut Şifre:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mevcut şifrenizi girin"
        secureTextEntry
      />
      <Text style={styles.label}>Yeni Şifre:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Yeni şifrenizi girin"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingVertical: 80,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6592C9',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfil;
