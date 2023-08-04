import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Flashcard from './Flashcard';
import Mcq from './Mcq';
import {IPage} from '../types/Page';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SideButton from './SideButton';
import FlipIcon from './FlipIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PLAYLIST_HEIGHT} from '../constants';

const {width, height} = Dimensions.get('window');

const Page = ({page}: {page: IPage}) => {
  const [answerVisible, setAnswerVisible] = useState<boolean>(false);

  const insets = useSafeAreaInsets();
  const onFlip = () => {
    setAnswerVisible(old => !old);
  };
  return (
    <View style={styles.page_container}>
      {page.type === 'flashcard' && (
        <Flashcard page={page} answerVisible={answerVisible} />
      )}
      {page.type === 'mcq' && <Mcq page={page} />}

      {/* Side Button */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: PLAYLIST_HEIGHT + insets.bottom,
          justifyContent: 'flex-end',
          marginRight: 8,
          paddingBottom: 16,
        }}>
        <SideButton subtitle={17} iconName={'heart'} />
        <SideButton subtitle={17} iconName={'comments'} />
        <SideButton subtitle={17} iconName={'bookmark'} />
        <SideButton subtitle={17} iconName={'share'} />
        {page.type === 'flashcard' && <FlipIcon onPress={onFlip} />}
      </View>

      {/* User Details */}

      <View
        style={{
          position: 'absolute',
          bottom: PLAYLIST_HEIGHT + insets.bottom,
          padding: 16,
          alignSelf: 'flex-start',
        }}>
        <Text style={styles.textUserName}>{page.user.name}</Text>
        <Text style={styles.textDescription}>{page.description}</Text>
      </View>

      {/* Playlist Part */}
      {page.playlist && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: PLAYLIST_HEIGHT + insets.bottom,
            bottom: 0,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              padding: 16,
              justifyContent: 'space-between',
              backgroundColor: '#222',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: PLAYLIST_HEIGHT,
              }}>
              <Text
                style={{marginRight: 16, color: 'white', fontWeight: 'bold'}}>
                Playlist • {page.playlist}
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" color="white" />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: 'rgb(1,41,55)',
  },
  textUserName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  textDescription: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
});
