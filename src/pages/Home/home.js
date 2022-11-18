import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import Header from '../../components/Header/header';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { ChangaOne_400Regular } from '@expo-google-fonts/changa-one';
import { Video } from 'expo-av';
export default function Home() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Cookie_400Regular,
    ChangaOne_400Regular,
  });

  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const video2 = React.useRef(null);
  const [status2, setStatus2] = React.useState({});

  const video3 = React.useRef(null);
  const [status3, setStatus3] = React.useState({});

  const video4 = React.useRef(null);
  const [status4, setStatus4] = React.useState({});

  const video5 = React.useRef(null);
  const [status5, setStatus5] = React.useState({});

  const video6 = React.useRef(null);
  const [status6, setStatus6] = React.useState({});

  const video7 = React.useRef(null);
  const [status7, setStatus7] = React.useState({});

  return (
    <ScrollView>
      <Header name="Calculadora de churrasco" />
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>ChurrasTchê!</Text>
        </View>
        <View style={styles.cardRed}>
          <Text style={styles.textChamamento}>
            VAMOS TE AJUDAR A MANDAR BRASA NO SEU CHURRASCO!
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderWidth: 4,
              margin: 40,
              marginTop: 35,
            }}
          />
          <Text style={styles.textPreencher}>
            Preencha as informações e te indicaremos uma lista de compras ideal
            para o seu churrasco.
          </Text>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => {
              navigation.navigate('Convidados');
            }}>
            <Text style={styles.textAvancar}>Vamos lá!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.receitas}>
          <View>
            <Text style={styles.textWhite}>Receitas:</Text>
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                CUPIM na CHURRASQUEIRA com MANTEIGA e farofa de TORRESMO
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/CUPIM+na+CHURRASQUEIRA+com+MANTEIGA+e+farofa+de+TORRESMO.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                PICANHA NA GRELHA
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video2}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/PICANHA+NA+GRELHA+POR+%40Júlia+Carvalho+-+Cozinha+e+Churrasco.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                A MAMINHA COMBINOU MUITO COM O MILHO CREMOSO DE QUEIJO E BACON! 
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video3}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/A+MAMINHA+COMBINOU+MUITO+COM+O+MILHO+CREMOSO+DE+QUEIJO+E+BACON.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
               PICANHA DE PORCO DO EX-MASTERCHEF TENENTE
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video4}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/PICANHA+DE+PORCO+DO+EX-MASTERCHEF+TENENTE.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                LINGUIÇA RECHEADA COM PASTA DE ALHO NA CHURRASQUEIRA
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video5}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/LINGUIÇA+RECHEADA+COM+PASTA+DE+ALHO+NA+CHURRASQUEIRA+_+Receitas+de+Churrasco+_+Swift.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                SOBRECOXA AO CHIMICHURRI ACOMPANHADA DE BRÓCOLIS COM LIMÃO SICILIANO
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video6}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/SOBRECOXA+AO+CHIMICHURRI+ACOMPANHADA+DE+BRÓCOLIS+COM+LIMÃO+SICILIANO+_+Especial+Dia+dos+Pais+_+Swift.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
          <View style={styles.videoCard}>
            <View style={styles.textCard}>
              <Text style={styles.textVideo}>
                O MELHOR SANDUBA DE CORAÇÃO COM QUEIJO!!
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 2,
                margin: 40,
                marginTop: 15,
                
              }}
            />
            <Video
              ref={video7}
              style={styles.video}
              source={{
                uri: 'https://videosreceitas.s3.amazonaws.com/O+MELHOR+SANDUBA+DE+CORAÇÃO+COM+QUEIJO!!+_+Receitas+de+Churrasco+_+Swift.mp4',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 90,
    marginTop: 40,
    fontFamily: 'Cookie_400Regular',
  },
  cardRed: {
    backgroundColor: '#EA1D2C',
    height: 700,
    width: '100%',
    marginTop: 40,
  },
  textChamamento: {
    color: '#fff',
    fontSize: 56,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 55,
    fontFamily: 'ChangaOne_400Regular',
  },
  textPreencher: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 30,
  },
  buttonNext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '45%',
    height: 60,
    borderRadius: 12,
    backgroundColor: 'white',
    marginTop: 50,
  },
  textAvancar: {
    fontFamily: 'Poppins_400Regular',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  receitas: {
    height: 3400,
    width: '100%',
    marginTop: 40,
  },
  textWhite: {
    textAlign: 'center',
    fontSize: 120,
    marginTop: 20,
    fontFamily: 'Cookie_400Regular',
  },
  videoCard: {
    height: 450,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textVideo: {
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    fontWeight: 'regular',
    fontSize: 28,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  textCard: {},
});