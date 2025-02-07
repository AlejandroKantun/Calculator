import React from 'react'

import {View,Text, SafeAreaView, StatusBar} from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}> 
      <StatusBar backgroundColor='black' barStyle='light-content'/>
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;
