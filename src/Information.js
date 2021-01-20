import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>Information</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
});

export default Information;
