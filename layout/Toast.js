import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { ToastProvider } from 'react-native-toast-notifications'
import { Eur, Gbp, Usd } from '../constans/icons';
import EMailIcon from '../constans/icons/email';

const { width } = Dimensions.get('window');

const Toast = ({ children }) => {
  return (
<ToastProvider
        placement="top"
        duration={4000}
        animationType='slide-in'
        animationDuration={250}
        successColor="green"
        dangerColor="red"
        warningColor="orange"
        normalColor="gray"
        icon={<Usd />}
        successIcon={<Eur />}
        dangerIcon={<Gbp />}
        warningIcon={<EMailIcon />}
        textStyle={{ fontSize: 20 }}
        offset={50}
        offsetTop={30}
        swipeEnabled={true}
        bg="blue"
        renderToast={ toastOptions =>
        <View style={[styles.toastContainer, { backgroundColor: toastOptions.message.type === 'success' ? 'red' : 'green'}]}>

          {console.log(toastOptions)}

          <Text>{toastOptions.message?.title}</Text>
          <Text>{toastOptions.message?.description}</Text>


        </View>
        }
       
       >
      {
        children
      }
    </ToastProvider>

  )
}

export default Toast;

const styles = StyleSheet.create({
    toastContainer: {
      padding: 16,
      borderRadius: 8,
      marginTop: 12,
      width: width - 24,
  
    }
  });