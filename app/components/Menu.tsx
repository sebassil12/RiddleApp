import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Menu = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Menu;