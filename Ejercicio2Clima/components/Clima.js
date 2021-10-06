import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Clima = ({ resultado }) => {

    const { name, main,wind } = resultado;

    if (!name) return null;
    const kelvin = 273.15;


    console.log(resultado)
    return (
        <View style={styles.clima}>
            <View style={styles.alinear}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={{ uri: "https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png" }}
                />
                <Text style={styles.texto}>{name}</Text>

            </View>
            <View style={styles.alinear}>
                <Image
                    style={{ width: 150, height: 140 }}
                    source={{ uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png` }}
                />
            </View>

            <Text style={[styles.texto, styles.actual]}>
                {parseInt(main.temp - kelvin)}
                <Text style={styles.temperatura}>
                    &#x2103;
                </Text>
                <Text style={styles.temperatura}>
                    {"    "}{resultado.weather[0].main}
                </Text>

                <View style={styles.temperaturas}>
                    <Text style={styles.texto}> Min {" "}
                        <Text style={styles.temperatura}>
                            {parseInt(main.temp_min - kelvin)}  &#x2103;
                        </Text>
                    </Text>
                    <Text style={styles.texto}> Max {" "}
                        <Text style={styles.temperatura}>
                            {parseInt(main.temp_max - kelvin)}  &#x2103;
                        </Text>
                    </Text>
                </View>
                <View style={styles.viento}>
                    <Text style={styles.texto}> Humedad: 
                    {"  "}{main.humidity}%
                    </Text>
                    <Text style={styles.texto}> Viento:
                    {"  "}{wind.speed} m/s
                    </Text>
                </View>

            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    clima: {
        marginTop: 20,

    },
    texto: {
        color: '#FFF',
        fontSize: 20,
        textAlign: "center",
        marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: "bold"
    },
    temperatura: {
        fontSize: 24,
        fontWeight: "bold"
    },
    temperaturas: {
        flexDirection: "row",
        justifyContent: "center"
    },
    alinear: {
        flexDirection: "row",
        justifyContent: "center"
    },
    viento:{
        padding:50
    }
   


})

export default Clima;