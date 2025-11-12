import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/globalStyles';
import { listarProdutos } from '../utils/api';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carregar = async () => {
      const data = await listarProdutos(6);
      setProdutos(data);
    };
    carregar();
  }, []);

  // Autoplay para o carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselData.length;
        carouselRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);  // 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Dados do carrossel de banners
  const carouselData = [
    { id: 1, source: require('../assets/img/imagem.gif') },
    { id: 2, source: require('../assets/img/video2.webp') },
    // Adicione mais slides se quiser
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.source} style={styles.carouselImage} />
    </View>
  );

  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('Products', { product: item })}>
      <Image source={{ uri: item.imagem || 'https://via.placeholder.com/150' }} style={styles.productImage} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productPrice}>R$ {item.preco}</Text>
    </TouchableOpacity>
  );

  const renderServico = ({ item }) => (
    <TouchableOpacity style={styles.servicoCard} onPress={() => navigation.navigate('Services')}>
      <Image source={item.imagem} style={styles.servicoImage} />
      <Text style={styles.servicoTitle}>{item.title}</Text>
      <Text style={styles.servicoDesc}>{item.desc}</Text>
      <TouchableOpacity style={styles.btnRoxo}>
        <Text style={styles.btnText}>Saber mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const servicos = [
    { imagem: require('../assets/img/banho.jpg'), title: 'Banho', desc: 'Limpeza prática e segura. Profissionais próximos de você, prontos para deixar seu pet limpo, cheiroso e feliz.' },
    { imagem: require('../assets/img/vete.jpg'), title: 'Veterinário', desc: 'Consulta veterinária online para seu pet, onde e quando precisar. Tire dúvidas, receba orientações e tenha tranquilidade.' },
    { imagem: require('../assets/img/tosa_na_tesoura.webp'), title: 'Tosa na Tesoura', desc: 'Atendimento veterinário online para seu pet, onde e quando precisar. Tire dúvidas, receba orientações e tenha tranquilidade.' },
  ];

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      bounces={true}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/img/4patas.png')} style={styles.logo} />
        <Text style={styles.logoText}>Petshop 4 Patas</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Text style={styles.navText}>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.navText}>Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousel de Banners com Autoplay */}
      <View style={styles.hero}>
        <FlatList
          ref={carouselRef}
          data={carouselData}
          renderItem={renderCarouselItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
        />
      </View>

      {/* Carrossel de Serviços */}
      <Text style={styles.sectionTitle}>Serviços Petlove</Text>
      <FlatList
        data={servicos}
        renderItem={renderServico}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.servicosContainer}
      />

      {/* Produtos Recomendados */}
      <Text style={styles.sectionTitle}>Produtos Recomendados</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsContainer}
      />

      {/* Banner de Serviços */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Petshop 4 Patas</Text>
        <View style={styles.highlights}>
          <Text style={styles.highlight}>Rede confiável: + de 5 mil parceiros verificados</Text>
          <Text style={styles.highlight}>Todo tipo de cuidado: banho, hospedagem, pet sitter e mais</Text>
          <Text style={styles.highlight}>Sem limite de uso: para todos os pets, quantas vezes quiser</Text>
        </View>
      </View>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Compre por Categorias</Text>
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => navigation.navigate('DogProducts')}>
          <Image source={require('../assets/img/dog1.jpg')} style={styles.categoryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CatProducts')}>
          <Image source={require('../assets/img/cat2.jpg')} style={styles.categoryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TurtleProducts')}>
          <Image source={require('../assets/img/tortue.jpg')} style={styles.categoryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FishProducts')}>
          <Image source={require('../assets/img/fishing.jpg')} style={styles.categoryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BirdProducts')}>
          <Image source={require('../assets/img/bird.jpg')} style={styles.categoryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RabbitProducts')}>
          <Image source={require('../assets/img/roedodores.png')} style={styles.categoryImage} />
        </TouchableOpacity>
      </View>

      {/* Mais Vendidos */}
      <Text style={styles.sectionTitle}>Mais Vendidos</Text>
      <View style={styles.productsStatic}>
        <View style={styles.productStatic}>
          <Image source={require('../assets/img/magnus.png')} style={styles.productStaticImage} />
          <Text style={styles.productStaticName}>Ração Magnus</Text>
          <Text style={styles.productStaticPrice}>R$ 59,90</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductDetail', { id: 1 })}>
            <Text style={styles.btnText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productStatic}>
          <Image source={require('../assets/img/imagempremier1.png')} style={styles.productStaticImage} />
          <Text style={styles.productStaticName}>Fórmula Natural</Text>
          <Text style={styles.productStaticPrice}>R$ 29,90</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductDetail', { id: 2 })}>
            <Text style={styles.btnText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productStatic}>
          <Image source={require('../assets/img/origens.webp')} style={styles.productStaticImage} />
          <Text style={styles.productStaticName}>Ração Origens</Text>
          <Text style={styles.productStaticPrice}>R$ 39,90</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductDetail', { id: 3 })}>
            <Text style={styles.btnText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productStatic}>
          <Image source={require('../assets/img/pas1.png')} style={styles.productStaticImage} />
          <Text style={styles.productStaticName}>Ração para Calopsita</Text>
          <Text style={styles.productStaticPrice}>R$ 39,90</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductDetail', { id: 4 })}>
            <Text style={styles.btnText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productStatic}>
          <Image source={require('../assets/img/gran1.png')} style={styles.productStaticImage} />
          <Text style={styles.productStaticName}>Ração Gran Plus</Text>
          <Text style={styles.productStaticPrice}>R$ 39,90</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductDetail', { id: 5 })}>
            <Text style={styles.btnText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Marcas Favoritas */}
      <Text style={styles.sectionTitle}>Marcas Favoritas</Text>
      <View style={styles.marcas}>
        <Image source={require('../assets/img/magnusbn.jpg')} style={styles.marcaImage} />
        <Image source={require('../assets/img/formbn.jpg')} style={styles.marcaImage} />
        <Image source={require('../assets/img/oribn.jpg')} style={styles.marcaImage} />
        <Image source={require('../assets/img/prbn.jpg')} style={styles.marcaImage} />
        <Image source={require('../assets/img/gt.jpg')} style={styles.marcaImage} />
        <Image source={require('../assets/img/nt.jpg')} style={styles.marcaImage} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View style={styles.footerCol}>
            <Text style={styles.footerTitle}>DEPARTAMENTOS</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Text style={styles.footerLink}>Produtos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Cuidados com seu Pet</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Como Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Contato</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerTitle}>NAVEGAÇÃO</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DogProducts')}>
              <Text style={styles.footerLink}>Rações</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Brinquedos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Acessórios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Text style={styles.footerLink}>Serviços</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerTitle}>REDES SOCIAIS</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity>
                <Text style={styles.socialIcon}>📘</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.socialIcon}>📷</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.socialIcon}>▶️</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.socialIcon}>🎥</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerCol}>
            <Text style={styles.footerTitle}>CONTATOS</Text>
            <Text style={styles.footerLink}>📞 (11) 2577-3077</Text>
            <Text style={styles.footerLink}>💬 (11) 91648-1992</Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
          <Text style={styles.footerText}>Meios de pagamento: 💳 🏦 💰 💳</Text>
          <Text style={styles.footerText}>Copyright 4 Patas - Todos os direitos reservados</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;