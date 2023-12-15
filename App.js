import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useRef } from "react";

export default function App() {
  const [num, setNum] = useState('0');
  const [acumulador, setAcum] = useState(null);
  const [presionar, setPres] = useState(false);
  const operadorAnt = useRef('');

  function realizarOpe(operador) {
    setPres(false);

    switch (operador) {
      case '+':
      case '-':
      case '*':
      case '/':
        setAcum(parseFloat(num));
        setNum('0');
        operadorAnt.current = operador;
        break;
      case '=':
        if (acumulador !== null) {
          const numFloat = parseFloat(num);
          switch (operadorAnt.current) {
            case '+':
              setNum((acumulador + numFloat).toString());
              break;
            case '-':
              setNum((acumulador - numFloat).toString());
              break;
            case '*':
              setNum((acumulador * numFloat).toString());
              break;
            case '/':
              setNum((acumulador / numFloat).toString());
              break;
            default:
              break;
          }
          setAcum(null);
          setPres(true);
        }
        break;
      default:
        setNum(presionar ? operador : num === '0' ? operador : num + operador);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pantalla}>
        <Text style={styles.pantTxt}>{num}</Text>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('*')}>
          <Text style={styles.txtBtn}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('/')}>
          <Text style={styles.txtBtn}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('-')}>
          <Text style={styles.txtBtn}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('7')}>
          <Text style={styles.txtBtn}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('8')}>
          <Text style={styles.txtBtn}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('9')}>
          <Text style={styles.txtBtn}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('4')}>
          <Text style={styles.txtBtn}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('5')}>
          <Text style={styles.txtBtn}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('6')}>
          <Text style={styles.txtBtn}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('1')}>
          <Text style={styles.txtBtn}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('2')}>
          <Text style={styles.txtBtn}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('3')}>
          <Text style={styles.txtBtn}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnCont}>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('+')}>
          <Text style={styles.txtBtn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('0')}>
          <Text style={styles.txtBtn}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => realizarOpe('=')}>
          <Text style={styles.txtBtn}>=</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA9AD'
  },
  contCalc: {
    margin: 5,
    marginTop: 15
  },
  pantalla: {
    backgroundColor: '#010203',
    width: 500,
    height: 190,
    flexDirection: 'row'
  },
  pantTxt:{
    paddingTop: 100,
    paddingLeft: 16,
    color: "#fff",
    fontSize: 50
  },
  btn: {
    flexDirection: 'column',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 27,
    height: 90,
    width: 90,
    fontSize: 30,
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    borderRadius: 5,
    justifyContent:'center',
  },
  btnCont:{
    flexDirection: 'row'
  },
  txtBtn:{
    color: '#fff',
    fontSize: 40,
    paddingLeft: 35
  }
});
