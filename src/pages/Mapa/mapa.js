import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import apiRUA from '../../services/api';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/header';

export default function Mapa() {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [cep, setCep] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingCep, setLoadingCep] = useState(true);
  const [makers, setMakers] = useState([]);
  const [loadingLugar, setLoadingLugar] = useState(true);
  const [region, setRegion] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [mapRegion, setmapRegion] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let local = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
      });
      setmapRegion({
        latitude: local.coords.latitude,
        longitude: local.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setLoading(false);
    })();
  }, []);

  const buscaCep = async () => {
    let { data } = await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .catch((err) => {
        alert('digite o CEP');
      });

    let response = await apiRUA
      .get(
        `geocode?q=${data.logradouro}+${data.bairro}&apiKey=ZEUevErmmQDeBAmxSFUGJyqWAwdL4WtA2Ljnyd023X8`
      )
      .catch((erro) => {
        alert('CEP inválido');
      });

    setRegion({
      latitude: response.data.items[0].position.lat,
      longitude: response.data.items[0].position.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    setLoadingCep(false);
  };

  const buscarLugar = async () => {
    let lat = region.latitude
    let lng = region.longitude



    let { data } = await axios
      .get(
        `https://discover.search.hereapi.com/v1/discover?at=${lat},${lng}&limit=5&q=acougue&apiKey=ZEUevErmmQDeBAmxSFUGJyqWAwdL4WtA2Ljnyd023X8`
      )
      .catch((erro) => {
        alert("erro");
      });

    setMakers(data.items)
    setLoadingLugar(false);
  };

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <Header name="Mapa" />
      <Text style={styles.nome_endereco}>Endereço do Evento</Text>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Digite seu CEP"
          placeholderTextColor="#000"
          keyboardType="numeric"
          maxLength={8}
          onChangeText={setCep}
          value={cep}
        />
        <View style={styles.icon_position}>
          <TouchableOpacity style={styles.teste} onPress={buscaCep}>
            <Icon style={styles.icon} name="search" color="#000" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.text_content}>
          <Text style={styles.text}>
            Lojas da swift mais próximas do seu evento:
          </Text>
        </View>
        <View style={styles.content_mapa}>
          <View style={styles.mapa}>
            {loading ? (
              ''
            ) : (
              <MapView
                style={styles.map}
                initialRegion={mapRegion}
                region={region}>
                <Marker title="Sua localização" coordinate={location} />
                {loadingCep ? (
                  ''
                ) : (
                  <Marker title="Local do evento" coordinate={region} />
                )}
                {loadingLugar ? "" : makers.map(item => (
                  <Marker coordinate={{
                    latitude: item.position.lat,
                    longitude: item.position.lng,
                  }} title={item.title}/>
                ))}
              </MapView>
            )}
          </View>
        </View>
        <View style={styles.content_buscarLugar}>
          <Button
            style={styles.button}
            onPress={buscarLugar}
            title="Buscar Açogues proximos"
            color="#EA1D2C"
            accessibilityLabel="Learn more about this purple button"
          />
          <ScrollView horizontal={true} style={styles.scrollugar}>
            <View style={styles.input_lugar}>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => {
            navigation.navigate('Lista');
          }}>
          <Text style={styles.finalizar_text}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  teste: {
    width: 20,
    height: 20,
  },
  textInput: {
    display: 'flex',
    fontFamily: 'Poppins_400Regular',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'space-between',
    left: 20,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  },
  icon_position: {
    right: 15,
  },
  content: {
    height: 1000,
  },
  nome_endereco: {
    fontSize: 20,
    fontWeight: 'regular',
    paddingTop: 25,
    marginLeft: 25,
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  text_content: {
    top: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 10,
    paddingEnd: 10,
  },

  content_mapa: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '90%',
    height: '90%',
  },
  mapa: {
    display: 'flex',
    width: '100%',
    height: 600,
    top: 80,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_buscarLugar: {
    top: 50,
  },
  button: {},
  scrollugar: {
    top: 200,
    left: 15,
  },
  input_lugar: {
    flexDirection: 'row',
  },
  buttonNext: {
    position: 'absolute',
    right: 25,
    bottom: 90,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '90%',
    height: 60,
    borderRadius: 70,
    backgroundColor: '#EA1D2C',
    padding: 10,
  },
  finalizar_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  }
});