import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';


const BVScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                BEM-VINDO.
            </Text>
            <Text style={styles.titulo2}>
                SOS-UTFPR.
            </Text>
            <View style={styles.deladin} >
                <TouchableOpacity style={styles.caixa} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.msr}>
                        Cadastrar-se </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.caixa} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.msr}>
                        Login </Text>
                </TouchableOpacity>


            </View >
            
        </View>
    );
};


export default BVScreen;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 50,
        margin: 20,
        marginTop: 200,
        color: 'white'
    },
    titulo2: {
        fontSize: 60,
        textAlign: 'center',
        marginBottom: 100,
        margin: 20,
        color: 'white'
    },
    adicionar: {
        
        width: 100,
        height: 100,
        margin: 20,

    },
    container: {
        backgroundColor: '#E15100',
        height:4000,
        alignItems:'center'
    },
    caixa: {
        marginTop:10,
        backgroundColor: 'white',
        margin: '5%',
        height: 50,
        borderRadius: 15,
        width: "40%",
        alignItems: 'center'
    },
    deladin:{
        flexDirection: 'row', justifyContent: 'space-between',
        width: '100%',
        marginTop:150
        
    },
    msr:{
        marginTop:15
    },
    

})
