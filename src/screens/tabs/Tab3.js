import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab3 = () => {
  return (
    <View style={styles.container}>
      <Text>Conteúdo da Tab 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab3;