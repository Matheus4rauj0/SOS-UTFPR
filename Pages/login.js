import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Button} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
  signInWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(' user Completo :',user)
    const id = user.uid;
    
    navigation.navigate('home',{id});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(
      errorMessage,
      errorCode,
      [
        {
          text: 'OK',
          onPress: () => console.log('Botão OK Pressionado')
        }
      ],
      { cancelable: false }
    );
  });
    
  };

  const handleForgotPassword = () => {
    // Implemente a lógica para lidar com "Esqueci minha senha"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={margin= 10}>  Para acessar o aplicativo, é preciso fazer o login!  </Text>
      <TextInput
        style={styles.input}
        placeholder=" Email "
        onChangeText={text => setEmail(text)}
        value={Email}
      />
      <TextInput
        style={styles.input}
        placeholder=" Senha "
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}> "Esqueci minha senha" </Text>
      </TouchableOpacity>
      <Button
        title=" Login "
        onPress={handleLogin}
        buttonStyle={styles.loginButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E15100'
  },
  title: {
    fontSize: 120,
    fontWeight: 'bold',
    marginBottom: 100,

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor : 'white'
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 5,
  },
});

export default LoginScreen;