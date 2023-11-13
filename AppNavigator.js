import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './Pages/login'
import Remedios from './Pages/remedios'
import Alergias from './Pages/alergias'
import HM from './Pages/HMedico'
import Contatos from './Pages/contatos'
import BV from './Pages/BV'
import Home from './Pages/home'
import CADASTRO from './Pages/cadastro'
import Add_alergiaScreen from './Pages/add_alergia';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      
        <Stack.Navigator initialRouteName="BV">
          <Stack.Screen name="home" component={Home} options={{
            title: 'S.O.S - UTFPR',
            headerStyle: {
              backgroundColor: '#E15100',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerLeft: () => null
  
          }} />
          
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Remedios" component={Remedios}
            options={{
              title: ' ',
              headerStyle: {
                backgroundColor: '#E15100'
              }
            }}
          />
          <Stack.Screen name="Alergias" component={Alergias}
            options={{
              title: ' ',
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />
  
  <Stack.Screen name="HM" component={HM}
            options={{
              title: ' ',
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />
            <Stack.Screen name="Contatos" component={Contatos}
            options={{
              title: ' ',
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />
            <Stack.Screen name="BV" component={BV}
            options={{
              title: ' ',
              headerShown:false,
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />
            <Stack.Screen name="Cadastro" component={CADASTRO}
            options={{
              title: ' ',
              headerShown:false,
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />
            <Stack.Screen name="add_alergia" component={Add_alergiaScreen}
            options={{
              title: ' ',
              headerShown:false,
              headerStyle: {
                backgroundColor: '#E15100'
              }
  
            }} />

            
            
  
  
  
  
        </Stack.Navigator>
      
    );
  }

export default AppNavigator;