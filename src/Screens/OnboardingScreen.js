import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width dynamically

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track active screen index
  const flatListRef = useRef(null); // Ref to control FlatList programmatically

  // Onboarding screens data
  const screens = [
    {
      id: 1,
      title: 'All Your Needs in One Place',
      description: 'Order meals, groceries, and medicines with just a few taps.',
      image: require('../../assets/icon.png'), // Replace with your images
    },
    {
      id: 2,
      title: 'Fast, Reliable Delivery',
      description: 'From groceries to meals and essential medicines, we bring everything straight to your doorstep.',
      image: require('../../assets/icon.png'),
    },
    {
      id: 3,
      title: 'Track Your Orders With Ease',
      description: 'Stay updated with your orders by tracking them at your comfort.',
      image: require('../../assets/icon.png'),
    },
  ];

  // Scroll listener to update currentIndex
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentIndex(newIndex);
  };

  // Manual navigation to a specific screen
  const navigateToScreen = (index) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  };

  // Render each onboarding screen
  const renderItem = ({ item }) => (
    <View style={styles.screen}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Log In</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* FlatList for onboarding screens */}
      <FlatList
        ref={flatListRef}
        data={screens}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {screens.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateToScreen(index)}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  button: {
    backgroundColor: '#ff8c00',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#ff8c00',
    textDecorationLine: 'underline',
  },
  pagination: {
    position: 'absolute',
    top: 440,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#ff8c00',
  },
  inactiveDot: {
    backgroundColor: '#e0e0e0',
  },
});

export default OnboardingScreen;
