// App.js (arquivo na raiz do projeto)
import 'react-native-gesture-handler'; 
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';  // Certifique-se de que o caminho está correto

export default function App() {
  return <AppNavigator />;
}