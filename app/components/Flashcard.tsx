import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPage} from '../types/Page';
import Animated, {
  FadeIn,
  FlipInYRight,
  FlipOutYLeft,
} from 'react-native-reanimated';
import RatingButton from './RatingButton';
const {width, height} = Dimensions.get('window');

type FlashcardProps = {
  page: IPage;
  answerVisible: boolean;
};

const Flashcard = ({page, answerVisible}: FlashcardProps) => {
  // const insets = useSafeAreaInsets();
  return (
    <View style={styles.page_container}>
      {/* Front */}
      {!answerVisible && (
        <Animated.View
          style={styles.front}
          entering={FadeIn}
          exiting={FlipOutYLeft}>
          <Text style={styles.frontText}>{page.flashcard_front}</Text>
        </Animated.View>
      )}
      {/* Back */}
      {answerVisible && (
        <Animated.View
          style={styles.back}
          entering={FlipInYRight}
          exiting={FlipOutYLeft}>
          {/* Question */}
          <View>
            <Text style={styles.frontText}>{page.flashcard_front}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />
          {/* Answer */}
          <View>
            <Text style={styles.textAnswerTitle}>Answer</Text>
            <Text style={styles.textAnswerContent}>{page.flashcard_back}</Text>
          </View>
          {/* How well do you know ?  */}

          <View>
            <Text style={styles.textHowWell}>How well did you know this?</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 8}}>
            <RatingButton value={1} />
            <RatingButton value={2} />
            <RatingButton value={3} />
            <RatingButton value={4} />
            <RatingButton value={5} />
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default Flashcard;

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  frontText: {
    color: 'white',
    fontSize: 24,
  },
  divider: {
    backgroundColor: 'grey',
    width: '100%',
    height: 2,
    marginTop: 16,
    marginBottom: 16,
  },
  front: {
    flex: 1,
    width: '100%',
    // alignItems: 'flex',
    justifyContent: 'center',
    padding: 16,
    paddingRight: 70,
  },
  back: {
    flex: 1,
    width: '100%',
    padding: 16,
    paddingRight: 70,
    marginTop: 120,
  },
  textAnswerTitle: {
    fontSize: 16,
    color: 'rgb(42,185,151)',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  textAnswerContent: {
    fontSize: 24,
    color: 'rgb(102,119,125)',
    marginBottom: 24,
  },
  textHowWell: {
    fontSize: 16,
    color: 'rgb(102,119,125)',
  },
});
