import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text, Alert, Button,Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { blockStatement } from "@babel/types";
const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const { ciudad } = busqueda;

    const consultarClima = () => {

        if (ciudad.trim() === "nada") {
            mostrarAlerta();
            return;
        }
        else{
       //Consultar la API
       guardarConsultar(true)
        }

    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Selecciona Una Ciudad',
            [{ text: 'Entendido' }]
        )
    }

    return (
        <>
            <View style={styles.formulario}>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Text style={styles.titulo}>Clima en SV</Text>
                    <Image
                    style={{ width: 80, height: 80 }}
                    source={{ uri: `https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/Weather+Targeting` }}
                />
                </View>
                <View>
                    <Picker
                        selectedValue={ciudad}
                        style={{height: 50, backgroundColor: "#35A6E9",fontWeight:"bold",color:'#FFF' }}
                        onValueChange={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
                    >
                        <Picker.Item label="-- Ciudades --" value="nada" />
                        <Picker.Item label="Apopa" value="3587345" />
                        <Picker.Item label="Aguilares" value="3587428" />
                        <Picker.Item label="Ayutuxtepeque" value="3587308" />
                        <Picker.Item label="Ciudad Delgado" value="3586814" />
                        <Picker.Item label="Cuscatancingo" value="3586833" />
                        <Picker.Item label="El Paisnal" value="3586204" />
                        <Picker.Item label="Guazapa" value="3585636" />
                        <Picker.Item label="Ilopango" value="3585484" />
                        <Picker.Item label="Mejicanos" value="3584399" />
                        <Picker.Item label="Nejapa" value="3583127" />
                        <Picker.Item label="Panchimalco" value="3584156" />
                        <Picker.Item label="Rosario de Mora" value="3583937" />
                        <Picker.Item label="San Marcos" value="3583480" />
                        <Picker.Item label="San Martin" value="3583471" />
                        <Picker.Item label="San Salvador" value="3583361" />
                        <Picker.Item label="Santiago Texacuangos" value="3583194" />
                        <Picker.Item label="Santo Tomás" value="3583183" />
                        <Picker.Item label="Soyapango" value="3583096" />
                        <Picker.Item label="Tonacatepeque" value="3582918" />

                    </Picker>

                </View>
                <View>
                

                    <View
                        style={styles.btnBuscar}
                    >
                    <Button
                        onPress={() => consultarClima()}
                        title="Buscar Clima"
                        color="#35A6E9"

                    />
                    </View>
                </View>

            </View>

        </>
    );

}

const styles = StyleSheet.create({
    titulo: {
        padding: 0,
        height: 50,
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 40
    },
    btnBuscar: {
        marginTop: 50,
        padding: 20,
        justifyContent: "center"
    },
    textoBuscar: {
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 18
    }


})

export default Formulario;