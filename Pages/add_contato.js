import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, push, ref, set } from "firebase/database";

const Add_contatoScreen = ({ navigation }) => {



    const [nomeContato, setNomeContato] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Email, setEmail] = useState('');
    



    const database = getDatabase();
    const route = useRoute();
    const user = route.params.user;

    const handleCadastro = () => {
        // Implemente aqui a lógica para enviar os dados do cadastro para o servidor ou realizar a ação desejada.
        const referencia = push(ref(database, 'user/' + user + '/contato'))
        console.log(referencia.key)

        set(ref(database, 'user/' + user + '/contato/' + referencia.key), {
            id : referencia.key,
            nomeContato : nomeContato, 
            Telefone : Telefone, 
            Email : Email, 
            
        })
        navigation.navigate('Contatos',{user})
    };


    return (
        <ScrollView style={styles.scroll}>
            <View style={{ padding: 20, marginTop: 100 }}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Contato de Emergência"
                    value={nomeContato}
                    onChangeText={text => setNomeContato(text)}
                />

                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Telefone/Celular"
                    value={Telefone}
                    onChangeText={text => setTelefone(text)}
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Email para Contato"
                    value={Email}
                    onChangeText={text => setEmail(text)}
                />

                <View style={styles.deladin}>
                    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
                        <Text style={styles.label}> Cancelar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container} onPress={handleCadastro}>
                        <Text style={styles.label}> Salvar </Text>
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

export default Add_contatoScreen;