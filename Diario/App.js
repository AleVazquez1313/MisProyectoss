import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Animated, Dimensions, ImageBackground} from 'react-native';

export default function App() {
  return (

    //titulo y botones principales
    <View style={styles.container}>
      <Text style={styles.title}>Diario Girl💋</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Nueva Nota</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notas Anteriores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Frase Del Día</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mi Amiga AI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Configuraciones</Text>
      </TouchableOpacity>
      

      <StatusBar style="auto" />
    </View>
  );
}

//Apartado de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#880E4F',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#F48FB1',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  secondaryButton: {
    marginTop: 20,
  },
  secondaryText: {
    color: '#880E4F',
    fontSize: 16,
  },
});
