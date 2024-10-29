import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Datos de ejemplo con URLs de imágenes específicas para cada sección
const restaurantData = [
  {
    id: '1',
    title: 'Groceries',
    subtitle: 'Burger, Dessert',
    rating: '⭐ 4.7 • 15-20 min',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg',
  },
  {
    id: '2',
    title: 'Groceries',
    subtitle: 'Burger, Dessert',
    rating: '⭐ 4.6 • 20-25 min',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg',
  },
];

const groceryData = [
  {
    id: '1',
    title: 'Groceries',
    rating: '⭐ 4.8 • 10-15 min',
    imageUrl: 'https://thumbs.dreamstime.com/b/grocery-bag-full-fresh-vegetables-18305719.jpg',
  },
  {
    id: '2',
    title: 'Groceries',
    rating: '⭐ 4.7 • 12-18 min',
    imageUrl: 'https://thumbs.dreamstime.com/b/grocery-bag-full-fresh-vegetables-18305719.jpg',
  },
  {
    id: '3',
    title: 'Groceries',
    rating: '⭐ 4.9 • 15-20 min',
    imageUrl: 'https://thumbs.dreamstime.com/b/grocery-bag-full-fresh-vegetables-18305719.jpg',
  },
];

const specialsData = [
  {
    id: '1',
    title: 'Wine Collection',
    subtitle: 'Winestory',
    offer: 'Special Offer',
    imageUrl: 'https://wallpaperaccess.com/full/1462457.jpg',
  },
  {
    id: '2',
    title: 'Wine Collection',
    subtitle: 'Winestory',
    offer: 'Special Offer',
    imageUrl: 'https://wallpaperaccess.com/full/1462457.jpg',
  },
];

export default function App() {
  const renderRestaurantItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardRating}>{item.rating}</Text>
    </View>
  );

  const renderGroceryItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardRating}>{item.rating}</Text>
    </View>
  );

  const renderSpecialItem = ({ item }) => (
    <TouchableOpacity style={styles.specialCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.specialImage} />
      <Text style={styles.specialTitle}>{item.title}</Text>
      <Text style={styles.specialSubtitle}>{item.subtitle}</Text>
      <Text style={styles.specialOffer}>{item.offer}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <FontAwesome name="map-marker" size={16} color="black" />
        <Text style={styles.address}>9185 Mayflower Drive Atlanta</Text>
      </View>

      
      <View style={styles.mainImageContainer}>
        <Image
          source={{ uri: 'https://66.media.tumblr.com/c2f872aa9c291807337eb92c81c248f9/tumblr_nos3hfqoWe1uswgqqo1_640.jpg' }}
          style={styles.mainImage}
        />
      </View>

      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All restaurants</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={restaurantData}
          renderItem={renderRestaurantItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Groceries</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={groceryData}
          renderItem={renderGroceryItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specials</Text>
        <FlatList
          horizontal
          data={specialsData}
          renderItem={renderSpecialItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingTop:25,
  },
  address: {
    marginLeft: 8,
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  mainImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007bff',
  },
  card: {
    width: 120,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
  },
  foodImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  cardRating: {
    fontSize: 12,
    color: '#888',
  },
  specialCard: {
    width: 180,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 16,
    marginRight: 10,
    overflow: 'hidden',
  },
  specialImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  specialTitle: {
    color: '#fff',
    fontSize: 14,
  },
  specialSubtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialOffer: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});