import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const FlipIcon = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.icon}>
        <Icon size={24} color="white" name={'undo'} />
      </View>
      <Text style={styles.text}>Flip</Text>
    </TouchableOpacity>
  );
};

export default FlipIcon;

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 8,
  },
  text: {fontSize: 12, color: 'white', marginTop: 4},
});
