import React, {useState} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Button, Modal, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe'
function Feed() {
  return (
    <ScrollView style={{ backgroundColor: '#212121' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.banner} source={require('./src/img/d.jpg')} />
      </View>
      <Text style={styles.titulo}>Comedia</Text>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia5.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/comedia6.jpg')}
          />
        </View>
      </ScrollView>
      <Text style={styles.titulo}>Acción</Text>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion5.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.imagen}
            source={require('./src/img/accion6.jpg')}
          />
        </View>
      </ScrollView>
      <Text style={styles.titulo}>Romance</Text>
      <ScrollView horizontal>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l3.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l1.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l2.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l4.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l5.jpg')} />
        </View>
        <View>
          <Image style={styles.imagen} source={require('./src/img/l6.jpg')} />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

function Profile() {
  const [modalVisibleplaya,setModalVisibleplaya] = useState(false);
  const [modalVisibleplaya2,setModalVisibleplaya2] = useState(false);
  const [modalVisibleplaya3,setModalVisibleplaya3] = useState(false);
  const [modalVisibleplaya4,setModalVisibleplaya4] = useState(false);
  return (
    <ScrollView style={{ backgroundColor: '#212121' }}>
        <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text style={styles.subtitulo,{textAlign: 'center'}}>Venom: Let There Be Carnage{'\n'}</Text>
        <View>
          <YoutubePlayer
          height={170}
          play={true}
          videoId={'-FmWuCgJmxo'}
          
          />
        </View>
        <Text style={{textAlign: 'justify'}}>Regreso de Eddie Brock (Tom Hardy), el astuto periodista y reportero que, después de quedar infectado, experimentará radicales cambios en su cuerpo y adquirirá los poderes del simbionte Venom, que usa a Brock como huésped y le convertirá en un despiadado y peligroso súpervillano.{'\n'}Fecha de estreno: 5 de Octubre</Text>
        <Button title="Cerrar" onPress={() =>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
      </View>
    </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalVisibleplaya2} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text style={styles.subtitulo,{textAlign: 'center'}}>Eternals{'\n'}</Text>
        <View>
          <YoutubePlayer
          height={170}
          play={true}
          videoId={'x_me3xsvDgk'}
          
          />
        </View>
        <Text style={{textAlign: 'justify'}}>Hace millones de años, los seres cósmicos conocidos como los Celestiales comenzaron a experimentar genéticamente con los humanos. Su intención era crear individuos superpoderosos que hicieran únicamente el bien, pero algo salió mal y aparecieron los Desviantes, destruyendo y creando el caos a su paso.{'\n'}Fecha de estreno: 5 de Noviembre</Text>
        <Button title="Cerrar" onPress={() =>{setModalVisibleplaya2(!modalVisibleplaya2)}}></Button>
      </View>
    </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalVisibleplaya3} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text style={styles.subtitulo,{textAlign: 'center'}}>The Witcher Season 2{'\n'}</Text>
        <View>
          <YoutubePlayer
          height={170}
          play={true}
          videoId={'7snHc-_gm30'}
          
          />
        </View>
        <Text style={{textAlign: 'justify'}}>Mientras los reyes, elfos, humanos y demonios del continente luchan por la supremacía fuera de sus muros, él debe proteger a la niña de algo mucho más peligroso: el misterioso poder que posee en su interior.{'\n'}Fecha de estreno: 17 de diciembre</Text>
        <Button title="Cerrar" onPress={() =>{setModalVisibleplaya3(!modalVisibleplaya3)}}></Button>
      </View>
    </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalVisibleplaya4} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
    <View style={styles.vistaModal}>
      <View style={styles.Modal}>
        <Text style={styles.subtitulo,{textAlign: 'center'}}>Stranger Things Season 4{'\n'}</Text>
        <View>
          <YoutubePlayer
          height={170}
          play={true}
          videoId={'WpT2b3raLYM'}
          
          />
        </View>
        <Text style={{textAlign: 'justify'}}>{'\n'}Fecha de estreno: 2022</Text>
        <Button title="Cerrar" onPress={() =>{setModalVisibleplaya4(!modalVisibleplaya4)}}></Button>
      </View>
    </View>
  </Modal>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.banner} source={require('./src/img/d.jpg')} />
      </View>
      <Text style={styles.titulo}>Próximos estrenos - Películas</Text>
      <View>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
          <Image
            style={styles.imagen2}
            source={require('./src/img/v.jpg')}
          />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalVisibleplaya2(!modalVisibleplaya2)}}>
          <Image
            style={styles.imagen2}
            source={require('./src/img/eternals.jpg')}
          />
          </TouchableHighlight>
        </View>
        
      </ScrollView>
     </View> 
     <Text style={styles.titulo}>Próximos estrenos - Series</Text>
      <View>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya3(!modalVisibleplaya3)}}>
          <Image
            style={styles.imagen2}
            source={require('./src/img/witch.jpg')}
          />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalVisibleplaya4(!modalVisibleplaya4)}}>
          <Image
            style={styles.imagen2}
            source={require('./src/img/st4.png')}
          />
          </TouchableHighlight>
        </View>
       <Text>{'\n'}</Text> 
      </ScrollView>
     </View> 
    </ScrollView>
  );
}

function Pantalla1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola a todos!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <ScrollView style={{ backgroundColor: '#212121' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.banner} source={require('./src/img/d.jpg')} />
      </View>
      <Text style={styles.titulo}>Acción</Text>
      <View>
        <View
          style={styles.caja}>
          <Image style={styles.mejores} source={require('./src/img/a1.jpg')} />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Daredevil</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 3 {'\n'}Daredevil gira en torno a Matt Murdock, un
              abogado de día y superhéroe de noche. A pesar de ser ciego, posee
              un oído, un olfato, una fuerza y una agilidad increíblemente
              desarrolladas.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>The Defenders</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 1 {'\n'}Un abogado ciego, una mujer con súper fuerza, un multimillonario experto en artes marciales y un auténtico hombre de acero serán los encargados de detener a la villana Alexandra.
            </Text>
          </View>
          <Image style={styles.mejores} source={require('./src/img/a2.jpg')} />
        </View>
        <View
          style={styles.caja}>
          <Image style={styles.mejores} source={require('./src/img/a3.jpg')} />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>The Punisher</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 2 {'\n'}Frank Castle, un ex soldado lleno de dolor y venganza que quiere acabar con aquellos que le arrebataron a su familia en un brutal asesinato.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Peaky Blinders</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 5 {'\n'}Narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales.
            </Text>
          </View>
          <Image style={styles.mejores} source={require('./src/img/a4.jpg')} />
        </View>
      </View>

      <Text style={styles.titulo}>Comedia</Text>
      <View>
        <View
          style={styles.caja}>
          <Image
            style={styles.mejores}
            source={require('./src/img/friends.jpg')}
          />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Friends</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 10 {'\n'}La serie es una comedia que trata de las aventuras y desventuras de un grupo de 6 amigos (Ross, Joey, Chandler, Phoebe, Rachel y Monica) que viven en Manhattan.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>How I Met Your Mother</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 9 {'\n'}Un relato contado a sus hijos sobre cómo llegó a conocer a su madre, centrándose en las aventuras y peripecias que vivió durante los años previos a que esto sucediese.
            </Text> 
          </View>
          <Image style={styles.mejores} source={require('./src/img/h1.jpg')} />
        </View>
        <View
          style={styles.caja}>
          <Image style={styles.mejores} source={require('./src/img/h2.jpg')} />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Rick & Morty</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 5 {'\n'}Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>South Park</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 24 {'\n'}En South Park lo natural se mezcla con lo sobrenatural, y este grupo de amigos se ve inmerso en extrañas aventuras.
            </Text>
          </View>
          <Image style={styles.mejores} source={require('./src/img/h3.jpg')} />
        </View>
      </View>
      <Text style={styles.titulo}>Fantasía / Ciencia Ficción</Text>
      <View>
        <View
          style={styles.caja}>
          <Image
            style={styles.mejores}
            source={require('./src/img/f1.jpg')}
          />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Stranger Things</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 3 {'\n'}La historia narra la súbita desaparición de un niño en esta ciudad durante la década de los 80, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>The Witcher</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 1 {'\n'}Geralt de Rivia es un brujo, mutado durante su infancia para ser más efectivo en su labor, matar monstruos por dinero. Durante sus viajes Geralt conoce a Jaskier, un trovador demasiado hablador, y a Yennefer de Vengerberg, una poderosa hechicera.
            </Text>
          </View>
          <Image style={styles.mejores} source={require('./src/img/ff2.jpg')} />
        </View>
        <View
          style={styles.caja}>
          <Image style={styles.mejores} source={require('./src/img/f4.png')} />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>Dark</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 3 {'\n'}La desaparición de un niño lleva a cuatro familias a una frenética búsqueda, mientras descubren un misterio que abarca tres generaciones.
            </Text>
          </View>
        </View>
        <View
          style={styles.caja}>
          <View style={{ marginRight: 4 }}>
            <Text style={{ marginTop: 4, color: 'white' }}>The Rain</Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'justify',
                flexWrap: 'wrap',
                width: 280,
              }}>
              Temporadas: 3 {'\n'}The Rain narra la situación de Escandinavia seis años después desde que una gran catástrofe biológica aniquilara a casi toda la población.
            </Text>
          </View>
          <Image style={styles.mejores} source={require('./src/img/f3.jpeg')} />
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Nesflix"
      screenOptions={{
        tabBarActiveTintColor: '#E50B14',
        tabBarInactiveBackgroundColor: '#303030',
        tabBarActiveBackgroundColor: '#303030',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Peliculas"
        component={Feed}
        options={{
           headerShown:false,
          tabBarLabel: 'Películas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Series',
           headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-filter"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Próximamente',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },

  imagen: {
    width: 100,
    height: 130,
    marginRight: 10,
  },
  mejores: {
    width: 100,
    height: '100%',
    marginVertical: 5,
  },
  titulo: {
    fontSize: 20,
    color: 'white',
  },
  caja:{
    flexDirection: 'row',
    backgroundColor: '#424242',
 
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    height: 500,
    width: 400
  },
  Modal:{
    backgroundColor: '#fff',
    borderRadius:10,
    flex: 1,
    margin: 20,
    padding: 40,
    
  },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  },
  imagen2: {
    width: 300,
    height: 400,
    marginRight: 10,
  },
});
