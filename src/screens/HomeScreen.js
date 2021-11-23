import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
 
  return (
    <View>
      <Text style={styles.text}>Hello Fellow</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
    </View>
  )
};




const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

