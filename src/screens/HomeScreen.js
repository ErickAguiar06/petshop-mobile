import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../components/Carousel';  // Componente customizado
import { listarProdutos } from '../utils/api';  // Migração da API

const HomeScreen = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await listarProdutos(6);  // Limite de 6 como no front
      setProdutos(data);
    };
    carregar();
  }, []);

  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.imagem }} style={styles.productImage} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productPrice}>R$ {item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/img/4patas.png')} style={styles.logo} />
        <Text style={styles.logoText}>Petshop 4 Patas</Text>
        {/* Adicione nav aqui, ou use um componente Header */}
      </View>

      {/* Carousel de Banners */}
      <Carousel />  {/* Componente customizado para banners/vídeos */}

      {/* Carrossel de Serviços */}
      <Text style={styles.sectionTitle}>Serviços</Text>
      {/* Adapte o carrossel de serviços aqui, similar ao HTML */}

      {/* Produtos Recomendados */}
      <Text style={styles.sectionTitle}>Produtos Recomendados</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id.toString()}
        horizontal  // Carrossel horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Outras seções: Serviços, Categorias, etc. */}
      {/* Adapte o resto do HTML aqui */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fffaf0' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#c4520c', padding: 20 },
  logo: { width: 60, height: 60, borderRadius: 10 },
  logoText: { color: 'white', fontSize: 18, marginLeft: 10 },
  sectionTitle: { fontSize: 24, textAlign: 'center', margin: 20 },
  productCard: { width: 250, margin: 10, backgroundColor: '#fff', borderRadius: 8, padding: 10 },
  productImage: { width: '100%', height: 120 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 14, color: '#c4520c' },
  // Adicione mais estilos do seu CSS convertido
});

export default HomeScreen;