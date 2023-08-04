import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const SideButton = ({iconName, subtitle}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Icon size={24} color="white" name={iconName} />
      <Text style={styles.text}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default SideButton;

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  text: {fontSize: 12, color: 'white', marginTop: 4},
});
