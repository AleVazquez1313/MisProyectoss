import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display'; // Importa la fuente Playfair Display


export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const fadeSubtitle = useRef(new Animated.Value(0)).current

  //Fuente de letra

const [fontsLoaded] = useFonts({
  PlayfairDisplay_400Regular,
});

  useEffect(() => {
    Animated.timing(fadeTitle, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeSubtitle, {
      toValue: 1,
      duration: 1200,
      delay: 600,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
  return null;
}

  // SPLASH
  if (showSplash) {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('./assets/LogoPrincipal.png.png')}
          style={[styles.logo, { opacity: fadeTitle }]}
          resizeMode="contain"
        />
        <Animated.Text style={[styles.subtitle, { opacity: fadeSubtitle }]}>
          Recuerda lo increible que eres y lo mucho que vales 💖
        </Animated.Text>

        <StatusBar style="auto" />
      </View>
    );
  }

  // MENU
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diario Girl 💋</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🩵 Nueva Nota</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🩵 Notas Anteriores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🩵 Frase del Día</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🩵 Mi Amiga AI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🩵 Configuración</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffe1ff', //fondo principal
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 500,
    height: 500,
    marginBottom: 5, //imagen logo
  },
  title: {
  fontSize: 32,
  fontFamily: 'PlayfairDisplay_400Regular', //fuente del titulo
  color: '#8b00c7ff',
  marginBottom: 10,
},

  subtitle: {
    fontSize: 20,
    color: '#6a1b9a', //Texto debajo del logo
    marginBottom: 150,
  },
  button: {
    width: '100%',
    backgroundColor: '#b700ffb4',
    padding: 15, //ajuste de espacio dentro del boton
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff', //texto dentro del boton
    fontSize: 18,
    textAlign: 'center',
  },
});
