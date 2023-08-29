import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, TouchableOpacityBase, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const { width, height } = Dimensions.get('window');


const CalcScreen = () => {
  const camera = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const permissionControl = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    permissionControl();
  }, [])

  const sendNotification = async () => {
 
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: description,
      },
      trigger: { seconds: 2 },
    });
  }

  const toggleCameraType = () => {
    setType(x => x === CameraType.back ? CameraType.front : CameraType.back);
  }

  const takePicture = async () => {
    const imageData = await camera.current.takePictureAsync({
      quality: 0.7,
      base64: true
    });

    setImage([...image, imageData]);
    setIsCameraOpen(false);
  }

  const openGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.7,
      base64: false
    });

    if(!result.canceled) {
      setImage([...image, result.assets[0]]);
    }
  }

  
  if(hasPermission === null) return <View />

  if(hasPermission === false) return <Text>İzin verilmedi</Text>
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <KeyboardAwareScrollView >
    <View style={styles.container}>
      
      {
        image.length > 0 && 
        <View style={styles.imageContainer}>
          {
            image.map((item, index) =>
              <TouchableOpacity key={index}
                onPress={() => setSelectedImage(item)}>
                <Image
                  source={{ uri: item?.uri }}
                  style={styles.image}
                  />
              </TouchableOpacity>
              )
          }
        </View>
      }
      <View style={styles.notification}>
      <TextInput
        keyboardType='email-address'
        placeholder='Başlık'
        value={title}
        onChangeText={setTitle}
        style={styles.title}
      />
      <TextInput
        placeholder='İçerik'
        value={description}
        onChangeText={setDescription}
        style={styles.title}
      />
      <TextInput
        placeholder='İçerik'
        value={description}
        onChangeText={setDescription}
        style={styles.title}
      />
      <TextInput
        placeholder='İçerik'
        value={description}
        onChangeText={setDescription}
        style={styles.title}
      />

      <View style={{ height: 200, width: '100%', backgroundColor: 'red'}}></View>

      <TextInput
        placeholder='İçerik'
        value={description}
        onChangeText={setDescription}
        style={styles.title}
      />
      <TextInput
        placeholder='İçerik'
        value={description}
        onChangeText={setDescription}
        style={styles.title}
      />

      <TouchableOpacity style={styles.button} onPress={sendNotification}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setIsCameraOpen(true)}>
        <Text style={styles.buttonText}>Fotoğraf Çek</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openGalery}>
        <Text style={styles.buttonText}>Galeriyi Aç</Text>
      </TouchableOpacity>
    </View>

      {
        isCameraOpen && (
          <View style={styles.cameraContainer}>
              <Camera style={styles.camera} type={type} ref={camera} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.toggle} onPress={toggleCameraType}>
                  <Text style={styles.buttonText}>Toggle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggle} onPress={takePicture}>
                  <Text style={styles.buttonText}>Çek</Text>
                </TouchableOpacity>
              </View>
          </View>
        )
      }

      {
        selectedImage && (
          <TouchableOpacity style={styles.imgContainer} onPress={() => setSelectedImage(null)}>
            <Image source={{ uri: selectedImage.uri }} style={styles.img} />
          </TouchableOpacity>
        )
      }

    </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default CalcScreen;

const styles = StyleSheet.create({
  imgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'#0005',
    padding: 16
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  cameraContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#0005',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 11
  },
  image: {
    width: (width - 22) / 5 - 10,
    height: ((width - 22) / 5 - 10) * 4 / 3,
    resizeMode: 'cover',
    margin: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0005',
  },
  toggle: {
    width: 150,
    height: 42,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height
  },
  notification: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 240,
  },
  title: {
    fontSize: 18,
    width: '100%',
    borderWidth: 1,
    borderColor: '#aaa',
    height:42,
    borderRadius: 4,
    paddingHorizontal: 16,
    marginVertical : 5
  },
  button: {
    width: '100%',
    height: 42,
    backgroundColor: '#f005',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
})