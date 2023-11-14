import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { getDatabase, push, ref, set } from "firebase/database";

const Add_HM = ({ navigation }) => {



    const [nomeDaDoenca, setNomeDaDoenca] = useState({});
    const [dataDoDiagnostico, setDataDoDiagnostico] = useState({});
    const [sintomas, setSintomas] = useState([{}]);
    const [tratamento, setTratamento] = useState({});
    const [historicoFamiliar, setHistoricoFamiliar] = useState({});
    const [acompanhamentoPosTratamento, setAcompanhamentoPosTratamento] = useState({});
    const [vacinacoes, setVacinacoes] = useState({});



    const database = getDatabase();
    const route = useRoute();
    const user = route.params.user;

    const handleCadastro = () => {
        // Implemente aqui a lógica para enviar os dados do cadastro para o servidor ou realizar a ação desejada.
        const referencia = push(ref(database, 'user/' + user + '/Historico_Medico'))
        console.log(referencia.key)

        set(ref(database, 'user/' + user + '/Historico_Medico/' + referencia.key), {
            id: referencia.key,
            nomeDaDoenca: nomeDaDoenca,
            dataDoDiagnostico: dataDoDiagnostico,
            sintomas: sintomas,
            
            tratamento: tratamento,
            historicoFamiliar: historicoFamiliar,
            trataacompanhamentoPosTratamentomento: acompanhamentoPosTratamento,
            vacinacoes: vacinacoes,
        })
        
        navigation.navigate('HM', { user });
    };









    return (
        <ScrollView style={styles.scroll}>
            <View style={{ padding: 20, marginTop: 100 }}>
                <Text style={styles.label}>Nome da Doença:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Anote o nome oficial da doença"
                    value={nomeDaDoenca}
                    onChangeText={text => setNomeDaDoenca(text)}
                />

                <Text style={styles.label}>Data do Diagnóstico:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="DD/MM/AAAA"
                    value={dataDoDiagnostico}
                    onChangeText={text => setDataDoDiagnostico(text)}
                />

                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Liste os sintomas que você experimentou"
                    value={sintomas}
                    onChangeText={text => setSintomas(text)}
                />

                <Text style={styles.label}>Tratamento:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Registre os tratamentos recebidos, incluindo medicamentos, terapias, cirurgias, etc.
                     Anote as doses, a frequência e a duração dos medicamentos"
                    value={tratamento}
                    onChangeText={text => setTratamento(text)}
                />




                <Text style={styles.label}>Histórico Familiar:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Se relevante, inclua informações sobre doenças semelhantes na sua família"
                    value={historicoFamiliar}
                    onChangeText={text => setHistoricoFamiliar(text)}
                />
                <Text style={styles.label}>Acompanhamento Pós-Tratamento:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Registre os tratamentos recebidos, incluindo medicamentos, terapias, cirurgias, etc.
                     Anote as doses, a frequência e a duração dos medicamentos"
                    value={acompanhamentoPosTratamento}
                    onChangeText={text => setAcompanhamentoPosTratamento(text)}
                />
                <Text style={styles.label}>Vacinações:</Text>
                <TextInput
                    style={styles.inputTEX}
                    placeholder="Mantenha um registro de vacinas relevantes,
                     como aquelas associadas à doença que você teve ou outras vacinações importantes"
                    value={vacinacoes}
                    onChangeText={text => setVacinacoes(text)}
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

export default Add_HM;