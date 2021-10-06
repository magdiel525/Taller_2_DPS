import React,{useState,useEffect} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

const App = () =>  {

  const [ busqueda, guardarBusqueda]= useState({
    ciudad:''
  });
  const [consultar,guardarConsultar]=useState(false);
  const [ resultado,guardarResultado ]=useState({});


  const {ciudad}=busqueda;

  useEffect(()=>{
    const consultarClima=async()=>{
      if(consultar){
        const appID="729a59999a2c9a22b53ffee2d364dd6d"
        const url =`http://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=${appID}`;

  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
  
      }
  
    }
    consultarClima();
 

  },[consultar])



  return (
    <>
    <View style={styles.app}>
      <View style={styles.contenido}>
      <Formulario
      busqueda={busqueda}
      guardarBusqueda={guardarBusqueda}
      guardarConsultar={guardarConsultar}
      />
      <Clima
        resultado={resultado}
      />

      </View>
    </View>
    </>
    );

};

const styles = StyleSheet.create({
 app:{
   flex: 1,
   backgroundColor: 'rgb(71,149,212)'
 },

 contenido:{
   marginHorizontal:'2.5%',
   marginVertical:'10%'
 }


});

export default App;
