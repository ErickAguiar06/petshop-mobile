import AsyncStorage from '@react-native-async-storage/async-storage';

export const adicionarAoCarrinho = async (produto) => {
  const carrinho = JSON.parse(await AsyncStorage.getItem('carrinho')) || [];
  // Lógica similar ao JS do front
  await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
};