import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IPage} from '../types/Page';
import Option from './Option';
import {revealAnswer} from '../api';
import * as _ from 'lodash';
import {
  PLAYLIST_HEIGHT,
  SIDE_BUTTONS_WIDTH,
  TAB_BAR_HEIGHT,
} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const Mcq = ({page}: {page: IPage}) => {
  const [correctOptions, setCorrectOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const insets = useSafeAreaInsets();
  const selectAnswer = answerId => {
    setSelectedOption(answerId);
    revealAnswer({questionId: `${page.id}`})
      .then(response => response.json())
      .then(responseJson => {
        const {correct_options} = responseJson;
        setCorrectOptions(correct_options);
      });
  };
  return (
    <ImageBackground style={styles.imageBackground} source={{uri: page.image}}>
      <View style={styles.viewContent}>
        {/* Question */}
        <View
          style={[
            styles.viewQuestion,
            {marginTop: TAB_BAR_HEIGHT + insets.top},
          ]}>
          <Text style={styles.textQuestion}>{page.question}</Text>
        </View>
        {/* Options */}
        <View style={styles.viewOptions}>
          {page.options.map(option => (
            <Option
              isSelected={!!selectedOption}
              isCorrect={
                correctOptions.length > 0 &&
                _.find(correctOptions, {id: option.id})
              }
              isWrong={
                correctOptions.length > 0 &&
                selectedOption === option.id &&
                !_.find(correctOptions, {id: option.id})
              }
              option={option}
              onPress={() => {
                selectAnswer(option.id);
              }}
            />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Mcq;

const styles = StyleSheet.create({
  imageBackground: {
    width,
    height,
    flex: 1,
  },
  viewContent: {
    width,
    height: height,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: PLAYLIST_HEIGHT + 80,
    paddingRight: SIDE_BUTTONS_WIDTH,
  },
  viewQuestion: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  textQuestion: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  viewOptions: {
    padding: 16,
  },
});
