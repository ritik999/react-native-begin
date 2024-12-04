import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const index = () => {
  return (
      <ImageBackground
        source={require('../../assets/entry-page.jpg')}
        resizeMode="cover"
        style={{flex:1, padding: 25}}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          Ecommerce App
        </Text>
      </ImageBackground>
    
  );
};

export default index;

const styles = StyleSheet.create({});
