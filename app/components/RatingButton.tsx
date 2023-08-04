import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RatingButton = ({value}: {value: number}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {backgroundColor: COLOR_MAPPING[value - 1]}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const COLOR_MAPPING = [
  'rgb(241	125	35	)',
  'rgb(251	182	105	)',
  'rgb(255	212	73	)',
  'rgb(22	98	79	)',
  'rgb(31	138	112	)',
];

export default RatingButton;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 3,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
