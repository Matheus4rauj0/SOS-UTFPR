import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from "firebase/auth";

import firebase, { auth, database } from '../db/firebaseConfig';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, push, ref, set } from "firebase/database";

const Add_alergiaScreen = ({ navigation }) => {



    const [nomeAlergia, setNomeAlergia] = useState('');
    const [descricaoAlergia, setDescricaoAlergia] = useState('');
    const [alergiasCruzadas, setAlergiasCruzadas] = useState('');
    const [planoAcao, setPlanoAcao] = useState('');



    const database = getDatabase();
    const route = useRoute();
    const user = route.params.user;

    const handleCadastro = () => {
        // Implemente aqui a lógica para enviar os dados do cadastro para o servidor ou realizar a ação desejada.
        const referencia = push(ref(database, 'user/' + user + '/alergia'))
        console.log(referencia.key)

        set(ref(database, 'user/' + user + '/alergia/' + referencia.key), {
            id : referencia.key,
            nomeAlergia : nomeAlergia, 
            descricaoAlergia : descricaoAlergia, 
            alergiasCruzadas :alergiasCruzadas, 
            planoAcao: planoAcao
        })
        // nomeAlergia : nomeAlergia, 
        // descricaoAlergia : descricaoAlergia, 
        // alergiasCruzadas :alergiasCruzadas, 
        // planoAcao: planoAcao

        console.log('tela de add alergia : ', user)
        console.log('Dados salvos:', nomeAlergia, descricaoAlergia, alergiasCruzadas, planoAcao);
        navigation.navigate('Alergias', { user })
    };









    return (
        <ScrollView style={styles.scroll}>
            <View style={{ padding: 20, marginTop: 100 }}>
                <Text style={styles.label}>Nome da Alergia:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome da alergia"
                    value={nomeAlergia}
                    onChangeText={text => setNomeAlergia(text)}
                />

                <Text style={styles.label}>Descrição da Alergia:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Descrição da alergia"
                    value={descricaoAlergia}
                    onChangeText={text => setDescricaoAlergia(text)}
                />

                <Text style={styles.label}>Substâncias Relacionadas:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Alergias cruzadas 
                    ou substâncias relacionadas"
                    value={alergiasCruzadas}
                    onChangeText={text => setAlergiasCruzadas(text)}
                />

                <Text style={styles.label}>Plano de Ação</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Plano de ação em caso de reação"
                    value={planoAcao}
                    onChangeText={text => setPlanoAcao(text)}
                />
                <View style={styles.deladin}>
                    <TouchableOpacity style={styles.container} onPress={() => console.log('Cadastro cancelado.')}>
                        <Text style={styles.label}> Cancelar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container} onPress={handleCadastro}>
                        <Text style={styles.label}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        margin: '5%',
        height: 25,
        borderRadius: 15,
        width: "40%",
        alignItems: 'center'
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
    inputTEX: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
        fontSize: 18,
        backgroundColor: 'white',
        height: 100
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


    },
    deladin: {
        flexDirection: 'row', justifyContent: 'space-between',
        width: '100%',
        marginTop: 150

    },
});

export default Add_alergiaScreen;