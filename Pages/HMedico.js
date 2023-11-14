import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, onValue, ref } from "firebase/database";

const HMScreen = ({ navigation }) => {

    const dados = getDatabase();
    const route = useRoute();
    const user = route.params.user;

    const [itensDoBancoDeDados, setItensDoBancoDeDados] = useState([]);
    const referencia = ref(dados, 'user/' + user + '/Historico_Medico')

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

        return () => { };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Historico Medico
            </Text>
            <ScrollView style={ styles.Scroll}>
                {itensDoBancoDeDados.map(item => (
                    <View
                        key={item.id}
                        style={
                            styles.caixaHM
                        }
                    >
                        <Text styles={ styles.titulo}>
                            Nome: {item.nomeDaDoenca}
                        </Text>
                        <Text>----------------------------------------------------------------</Text>
                        <Text>
                            Data do Diagnostico: {item.dataDoDiagnostico}
                        </Text>
                        <Text>----------------------------------------------------------------</Text>
                        <Text>
                            Sintomas:{item.sintomas}
                        </Text>
                        <Text>----------------------------------------------------------------</Text>
                        <Text>
                        Acompanhamento Pós-Tratamentomento:
                        </Text>
                        <Text>
                        {item.trataacompanhamentoPosTratamentomento}
                        </Text>
                        <Text>----------------------------------------------------------------</Text>
                        <Text>
                            Vacinas:{item.vacinacoes}
                        </Text>
                        <Text>----------------------------------------------------------------</Text>
                        <Text>
                            Historico Familiar: {item.historicoFamiliar}
                        </Text>

                    </View>
                ))}
            
            <View>
                <TouchableOpacity
                    style={styles.caixa}
                    onPress={() => navigation.navigate('add_HM', { user })}
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


export default HMScreen;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 30,
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    caixaHM: {
        backgroundColor: '#D9D9D9',
        margin: 10,
        borderRadius: 15,
        width: "95%",
        alignItems: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    Scroll:{
        marginBottom:100
    }
})