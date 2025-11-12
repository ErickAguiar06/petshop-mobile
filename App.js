// App.js (arquivo na raiz do projeto)
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator'; // Certifique-se de que o caminho está correto
import './src/styles/global.css'; // Importa os estilos CSS customizados

export default function App() {
  return <AppNavigator />;
}