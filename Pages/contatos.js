import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Button, Image, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, onValue, push, ref, set, on, once, remove } from "firebase/database";

const ContatosScreen = ({navigation}) => {

  const route = useRoute();
  const user = route.params.user;
  const dados = getDatabase();
  const [itensDoBancoDeDados, setItensDoBancoDeDados] = useState([]);
    const referencia = ref(dados, 'user/' + user + '/contato')

    useEffect(() => {
        const fetchData = async () => {
            await onValue(referencia, snapshot => {
                const data = snapshot.val();
                if (data) {
                    const itens = Object.values(data);
                    console.log('Data :', data)
                    setItensDoBancoDeDados(itens);
                }
            });

        };

        fetchData(); // Chama a função fetchData uma vez ao montar o componente

        // Remova o listener do banco de dados quando o componente for desmontado
        return () => {
            // Lógica para remover listeners, se necessário
        };
    }, []); // A dependência vazia [] garante que o useEffect seja chamado apenas uma vez

    

    console.log('Itens do banco:', itensDoBancoDeDados);


return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Contatos de Emergência 
      </Text>
      <ScrollView style={ styles.Scroll}>
        {itensDoBancoDeDados.map( (item) => (
          <View
          key={item.id}
          style ={ styles.caixaContatos}
          >
            <Text>Nome: {item.nomeContato}</Text>
            <Text>Telefone: {item.Telefone}</Text>
            <Text>Email: {item.Email}</Text>
          </View>
        ))}
        <View>
        <TouchableOpacity
        style={styles.caixa}
        onPress={()=> navigation.navigate('add_contato', { user })}
        >
            <Image 
                style={styles.adicionar}
                source={require('../image/adicionar.png')}
            />
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    </View>
  );
};


export default ContatosScreen;

const styles = StyleSheet.create({
    titulo:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom:30,
        margin:20
    },
    adicionar:{
        width:100,
        height:100,
        margin: 20,
        
    },
    caixa:{
        backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius:15,
        width: "96%",
        alignItems: 'center' ,
        padding: 10
    },
    Scroll:{
      marginBottom: 160
    },
    caixaContatos:{
      backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius:15,
        width: "96%",
        alignItems: 'row' ,
        padding: 10
    }
})