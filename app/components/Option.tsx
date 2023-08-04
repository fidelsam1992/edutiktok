import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {IOption} from '../types/Page';
const Option = ({
  option,
  onPress,
  isSelected,
  isCorrect,
  isWrong,
}: {
  option: IOption;
  onPress: () => void;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isCorrect && isSelected
          ? {backgroundColor: 'rgba(45,136,106,0.75)'}
          : {},
        ,
        isWrong && isSelected ? {backgroundColor: 'rgba(171,74,70,0.75)'} : {},
      ]}
      activeOpacity={0.8}
      onPress={isSelected ? () => {} : onPress}>
      <Text style={styles.text}>{option.answer}</Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
