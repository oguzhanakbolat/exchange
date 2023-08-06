import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EMailIcon from '../constans/icons/email'
import LoginInput from '../components/LoginInput'
import Password from '../constans/icons/password';
import { loginService } from '../service'
import { useNavigation } from '@react-navigation/native'
import * as yup from 'yup';
import { useAuth } from '../contextAPI/useAuth'

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Lütfen geçerli bir e-posta adresi giriniz.')
        .required('Lütfen e-posta adresinizi giriniz.'),
    password: yup
        .string()
        .typeError('Şifreniz harf veya rakam içermelidir.')
        .min(6, 'Şifreniz en az 6 karakter olmalıdır.')
        .max(32, 'Şifreniz en fazla 32 karakter olmalıdır.')
        .required('Lütfen şifrenizi giriniz.')
});

const LoginScreen = () => {
    const { navigate } = useNavigation();
    const { login } = useContext(useAuth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async() => {
        LoginSchema.validate({ email, password })
            .then(async() => {
                login({ identifier: email, password }, navigate);
            })
            .catch((err) => {
                Alert.alert('Hata', err.errors[0]);
            });
    }

  return (
    <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
            <Image source={require('../images/login.png')} />
            <Text style={styles.title}>Giriş</Text>

            <LoginInput
                lowerCase
                placeholder="E-Posta Adresi"
                leftIcon={<EMailIcon size={18} color="#6592C9"/>}
                value={email}
                setValue={setEmail}
            />

            <LoginInput
                secure
                placeholder="Şifre"
                leftIcon={<Password size={18} color="#6592C9"/>}
                value={password}
                setValue={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Register')}>
                <Text style={styles.registerButton}>Hesabınız yok mu? Kayıt olun.</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#6592C9',
        width: '100%',
        paddingVertical: 36
    },
    button: {
        backgroundColor: '#6592C9',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 48
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    registerButton: {
        color: '#6592C9',
        fontSize: 16,
        padding: 16,
        marginTop: 16
    }
});