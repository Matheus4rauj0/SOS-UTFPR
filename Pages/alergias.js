import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image, ScrollView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, onValue, push, ref, set, on, once } from "firebase/database";


const AlergiasScreen = ({ navigation }) => {

    const [idEspecifico, setIdEspecifico] = useState({});
    const [modalVisivel, setModalVisivel] = useState(false);
    const dados = getDatabase();
    const route = useRoute();
    const user = route.params.user;

    const [itensDoBancoDeDados, setItensDoBancoDeDados] = useState([]);
    const referencia = ref(dados, 'user/' + user + '/alergia')

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
                Alergias
            </Text>
            <ScrollView style={styles.Scroll}>


                <View>

                    {itensDoBancoDeDados.map((item) => (

                        <TouchableOpacity
                            style={styles.caixa}
                            key={item.id}
                            onPress={() => (setModalVisivel(true), setIdEspecifico(item.id))}
                        >

                            <Text style={styles.nome}>
                                {item.nomeAlergia}
                            </Text>
                            <Text style={styles.descricao}>
                            <Text style={styles.negrito}>Descrição:</Text>  {item.descricaoAlergia}
                            </Text>

                        </TouchableOpacity>

                    ))}
                    <Modal
                        transparent={true}
                        visible={modalVisivel}
                        animationType="slide"

                    >
                        <View style={styles.Modal}>
                            {itensDoBancoDeDados.map((item) => (
                                item.id === idEspecifico && (
                                <TouchableOpacity
                                    style={styles.caixaMODAL}
                                    key={item.id}
                                    onPress={() => setModalVisivel(false)}
                                >

                                    <Text style={styles.nome}>
                                        {item.nomeAlergia}
                                    </Text>
                                    <Text style={styles.descricao}>
                                    <Text style={styles.negrito}>Descrição: </Text>{item.descricaoAlergia}
                                    </Text>
                                    <Text style={styles.descricao}>
                                    <Text style={styles.negrito}>Plano de Ação: </Text>{item.planoAcao}
                                    </Text><Text style={styles.descricao}>
                                    <Text style={styles.negrito}>alergiasCruzadas: </Text>{item.alergiasCruzadas}
                                    </Text>

                                </TouchableOpacity>
                                )
                            ))}
                        </View>
                    </Modal>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.caixaAdd}
                        onPress={() => navigation.navigate('add_alergia', { user })}
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


export default AlergiasScreen;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
        margin: 20
    },
    adicionar: {
        width: 100,
        height: 100,
        margin: 20,

    },
    caixa: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius: 15,
        width: "95%",
        padding: 10,


    },
    caixaAdd: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius: 15,
        width: "95%",
        alignItems: 'center',

        padding: 10,
    },
    Scroll: {
        borderRadius: 15,
        marginBottom: 110
    },
    nome: {
        margin: 10,
        fontSize: 19,
        fontWeight: 'bold',
        //fontFamily: 'Times New Roman',
    },
    descricao: {
        marginLeft: 5,
        padding: 10,
        fontSize: 13
    },
    Modal: {
        marginTop: 150
    },
    caixaMODAL:{
        backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius: 15,
        width: "95%",
        padding: 10,
        borderColor: 'black', // Cor da borda
        borderWidth: 10, // Largura da borda
    },
    negrito: {
        fontWeight: 'bold',
        fontSize: 15
      },
})