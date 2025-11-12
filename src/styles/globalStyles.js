import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Container Principal
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fffaf0',
    paddingBottom: 30,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c4520c',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  nav: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  navText: {
    color: 'white',
    marginHorizontal: 10,
  },

  // Carousel/Hero
  hero: {
    height: 300,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width,
    height: 300,
    resizeMode: 'cover',
  },

  // Titles
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: '#c4520c',
  },

  // Serviços
  servicosContainer: {
    paddingHorizontal: 10,
  },
  servicoCard: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  servicoImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  servicoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5d1da8',
    marginTop: 10,
  },
  servicoDesc: {
    fontSize: 14,
    marginVertical: 10,
    color: '#333',
  },

  // Produtos
  productsContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-around',
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c4520c',
    marginVertical: 5,
  },

  // Produtos Estáticos
  productsStatic: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  productStatic: {
    width: 200,
    alignItems: 'center',
    margin: 10,
  },
  productStaticImage: {
    width: 120,
    height: 120,
  },
  productStaticName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productStaticPrice: {
    fontSize: 14,
    color: '#c4520c',
    marginTop: 5,
  },

  // Banner
  banner: {
    backgroundColor: '#4b0082',
    padding: 30,
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlights: {
    marginTop: 20,
  },
  highlight: {
    color: 'white',
    fontSize: 16,
    marginVertical: 5,
  },

  // Categorias
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },

  // Marcas
  marcas: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  marcaImage: {
    width: 200,
    height: 300,
    margin: 10,
    resizeMode: 'cover',
  },

  // Botões
  btn: {
    backgroundColor: '#ffc107',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnRoxo: {
    backgroundColor: '#ffc107',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },

  // Footer
  footer: {
    backgroundColor: '#000',
    padding: 20,
    marginTop: 30,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  footerCol: {
    flex: 1,
    minWidth: 200,
    margin: 10,
  },
  footerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerLink: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 14,
  },
  footerBottom: {
    marginTop: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 15,
  },
  footerText: {
    color: '#eee',
    fontSize: 14,
    marginVertical: 5,
  },

  // Redes Sociais
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialIcon: {
    fontSize: 24,
    marginHorizontal: 5,
  },
});

export default styles;
