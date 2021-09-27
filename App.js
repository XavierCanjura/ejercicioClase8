import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const barca = {
  informacion: {
    nombre: 'Fútbol Club Barcelona',
    escudo: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png',
    presidente: 'Joan Laporta',
    estadio: 'Camp Nou',
    fundador: 'Hans Gamper',
    entrenador: 'Ronald Koeman',
    descripcion: 'El Fútbol Club Barcelona, conocido popularmente como Barça, ​ es una entidad polideportiva con sede en Barcelona, España. Fue fundado como club de fútbol el 29 de noviembre de 1899 y registrado oficialmente el 5 de enero de 1903'
  },
  jugadores: [
    {
      nombre: 'Marc-André ter Stegen',
      dorsal: 1
    },
    {
      nombre: 'Sergiño Dest',
      dorsal: 2
    },
    {
      nombre: 'Gerard Piqué',
      dorsal: 3
    },
    {
      nombre: 'Ronald Araujo',
      dorsal: 4
    },
    {
      nombre: 'Sergio Busquets',
      dorsal: 5
    },
    {
      nombre: 'Riqui Puig',
      dorsal: 6
    },
    {
      nombre: 'Ousmane Dembélé',
      dorsal: 7
    },
    {
      nombre: 'Frenkie de Jong',
      dorsal: 21
    },
    {
      nombre: 'Memphis Depay',
      dorsal: 9
    },
    {
      nombre: 'Ansu Fati',
      dorsal: 10
    },
    {
      nombre: 'Yusuf Demir',
      dorsal: 11
    },
  ],
  partidos: [
    {
      contrario: 'Benfica',
      diaHora: 'Mie, 29/9 13:00',

    },
    {
      contrario: 'Atlético de Madrid',
      diaHora: 'Sab, 2/10 13:00',

    },
    {
      contrario: 'Valencia CF',
      diaHora: 'Dom, 19/10 13:00',

    },
  ]
}

const Home = () => {
  return(
    <>
      <View style = { styles.container }>
        <Text style = { styles.nombre }>{ barca.informacion.nombre }</Text>
        <Image style = { styles.img } source = {{ uri: barca.informacion.escudo}}  />
        <ScrollView  style = {{ marginHorizontal: 30 }}>
          <View style = {{ marginVertical: 10 }}>
            <Text style = {[ styles.info, { fontWeight: 'bold' }]}>Presidente:</Text>
            <Text style = { styles.info }>{ barca.informacion.presidente }</Text>
          </View>
          <View style = {{ marginVertical: 10 }}>
            <Text style = {[ styles.info, { fontWeight: 'bold' }]}>Estadio:</Text>
            <Text style = { styles.info }>{ barca.informacion.estadio }</Text>
          </View>
          <View style = {{ marginVertical: 10 }}>
            <Text style = {[ styles.info, { fontWeight: 'bold' }]}>Fundador:</Text>
            <Text style = { styles.info }>{ barca.informacion.fundador }</Text>
          </View>
          <View style = {{ marginVertical: 10 }}>
            <Text style = {[ styles.info, { fontWeight: 'bold' }]}>Entrenador:</Text>
            <Text style = { styles.info }>{ barca.informacion.entrenador }</Text>
          </View>
          <View style = {{ marginVertical: 10 }}>
            <Text style = {[ styles.info, { fontWeight: 'bold' }]}>Descripción:</Text>
            <Text style = { styles.info }>{ barca.informacion.descripcion }</Text>
          </View>
        </ScrollView >        
      </View>
    </>
  )
}

const ListPlayers = () => {
  return(
    <>
    <SafeAreaView style = { styles.container }>
      <View style = { styles.listPlayers }>
        <Text style = {{ fontSize: 20, fontWeight: 'bold' }}>Nombre de Jugador</Text>
        <Text style = {{ fontSize: 20, width: '40%', textAlign: 'center', fontWeight: 'bold' }}>Dorsal</Text>
      </View>
      <FlatList
        style= {{ width: '90%' }}
        data = { barca.jugadores }
        keyExtractor = { item => item.nombre }
        renderItem = { ({ item }) => (
          <View style = { styles.listPlayers }>
            <Text style = {{ fontSize: 20 }} >{ item.nombre }</Text>
            <Text style = {{ fontSize: 20, width: '20%', textAlign: 'center' }} >{ item.dorsal }</Text>
          </View>
        )}
      />
    </SafeAreaView>
    </>
  )
}

const Activities = () => {
  return(
    <>
      <View style = { styles.container }>
        <Text style = {{ fontSize: 25, fontWeight: 'bold', marginVertical: 15 }}>Partidos</Text>
        { barca.partidos.map( partido => (
          <Card equipo = { partido.contrario} diaHora = { partido.diaHora } />
        )) }
      </View>
    </>
  )
}

const Card = ({ equipo, diaHora }) => {
  return(
    <View style = {{ display: 'flex', width: '90%', marginVertical: 10, borderWidth: 1, padding: 5}}>
      <View style = {{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
        <Text style = {{ width: '40%'}}>Barcelona</Text>
        <Text>VS</Text>
        <Text style = {{ width: '40%', textAlign: 'right'}}>{ equipo }</Text>
      </View>
      <Text style = {{ textAlign: 'center'}}>{ diaHora }</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component ={ Home }
          options = {{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size}) => (
              <Icon name='home' color = {color} size = {size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Jugadores' 
          component ={ ListPlayers }
          options = {{
            tabBarLabel: 'Jugadores',
            tabBarIcon: ({ color, size}) => (
              <Icon name='format-list-bulleted' color = {color} size = {size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Actividades' 
          component = { Activities }
          options = {{
            tabBarLabel: 'Actividades',
            tabBarIcon: ({ color, size}) => (
              <Icon name='soccer' color = {color} size = {size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nombre:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  info: {
    fontSize: 20,
    textAlign: 'justify'
  },
  listPlayers: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  }
});
