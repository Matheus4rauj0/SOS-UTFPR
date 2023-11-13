import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Button, Image} from 'react-native';
//import { Button } from 'react-native-elements';

const RemediosScreen = () => {
return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Remédios
      </Text>
      <View>
        <TouchableOpacity
        style={styles.caixa}
        >
            <Image 
                style={styles.adicionar}
                source={require('../image/adicionar.png')}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default RemediosScreen;

const styles = StyleSheet.create({
    titulo:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom:100,
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
        width: "50%",
        alignItems: 'center' 
    }
})