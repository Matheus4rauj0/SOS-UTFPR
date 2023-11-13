import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { auth } from '../db/firebaseConfig';
import { Alert } from 'react-native';


const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');






  const handleCadastro = () => {
    // Implemente aqui a lógica para enviar os dados do cadastro para o servidor ou realizar a ação desejada.
    console.log('Nome:', nome, sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);



    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.uid)

        const database = getDatabase();

        set(ref(database, 'user/' + user.uid), {
          nome: nome,
          sobrenome: sobrenome,
        })
        const id = user.uid;


        




        // ...
        navigation.navigate('home',{id})
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

        // ..
      });



  };









  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>

        <View style={styles.ConTi}>
          <Text style={styles.title}>SOS </Text>
        </View>




        <Text style={styles.label1}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSobrenome(text)}
          value={sobrenome}
        />


        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry={true}
        />






        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E15100'
  },
  label1: {
    fontSize: 18,
    marginBottom: 4,
    marginTop: 100,
    marginEnd: 100
  },
  label: {
    fontSize: 18,
    marginBottom: 4,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 18,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 50,
    color: 'white'
  },
  ConTi: {
    alignItems: 'center',
    marginTop: 100
  },
  scroll: {
    backgroundColor: '#E15100',

  }
});

export default CadastroScreen;
