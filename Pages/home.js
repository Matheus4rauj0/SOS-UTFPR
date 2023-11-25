import React, {useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, onValue } from "firebase/database";



function HomeScreen({ navigation }) {
  const route = useRoute();
  const user = route.params.id

  const [nome, setNome] = useState([]);
  const db = getDatabase();
  const referencia = (ref(db, 'user/' + user + '/nome'))
  useEffect(() => {
    const fetchData = async () => {
      await onValue(referencia, (snapshot) => {
         const n =  snapshot.val();
         console.log('nome :', n)
        setNome(n);
      })
      console.log('referencia :', referencia)
    }
    fetchData();
  }, [])



  return (
    <View style={{ flex: 1, alignItems: 'center' }}>


      <TouchableOpacity style={styles.button_sos} onPress={() => navigation.navigate('telaDeSocorro')}>
        <Image
          style={styles.alerta}
          source={require('../image/alerta.png')}

        />
        <Text style={styles.sos}> S.O.S </Text>
      </TouchableOpacity>



      <View style={{ width: '90%', height: '20%', flexDirection: 'row', justifyContent: 'space-between', }}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Remedios', { user })}>
          <Text style={styles.textButton}>Remédios </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alergias', { user })}>
          <Text style={styles.textButton}>Alergias </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', height: '20%', flexDirection: 'row', justifyContent: 'space-between', }}>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HM', { user })}>
          <Text style={styles.textButton}>Historico Medico </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contatos', { user })}>
          <Text style={styles.textButton}>Contatos de Emerg. </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', }}>
        <Image
          style={styles.logo}
          source={require('../image/utfpr_logo.png')} />
        <View style={styles.ViewCenter}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              style={styles.perfil}
              source={require('../image/sem_foto.png')}
            />
          </TouchableOpacity>
          <Text style={styles.nomePerfil}>
            {nome}
          </Text>
        </View>


      </View>


    </View>


  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  button_sos: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: '#E71717',
    borderRadius: 150,
    width: '70%',
    height: '35%',
    borderColor: '#CB0909',
    borderWidth: 15,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    width: '50%',
    height: '90%',
  },
  sos: {
    fontSize: 50
  },
  alerta: {
    width: 100,
    height: 100
  },
  logo: {
    marginLeft: 15,
    width: 130,
    height: 50
  },
  perfil: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  textButton: {
    fontSize: 15
  },
  nomePerfil: {
    fontSize: 13,
    alignItems: 'center'
  },
  ViewCenter: {

  }
});
