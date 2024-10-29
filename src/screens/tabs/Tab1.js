import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text>Conteúdo da Tab 1</Text>
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

export default Tab1;
