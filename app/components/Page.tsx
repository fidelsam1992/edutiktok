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
import {PLAYLIST_HEIGHT, SIDE_BUTTONS_WIDTH} from '../constants';

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

      {/* Side Buttons */}
      <View
        style={[
          styles.viewSideButtons,
          {bottom: PLAYLIST_HEIGHT + insets.bottom},
        ]}>
        <SideButton subtitle={17} iconName={'heart'} />
        <SideButton subtitle={220} iconName={'comments'} />
        <SideButton subtitle={82} iconName={'bookmark'} />
        <SideButton subtitle={62} iconName={'share'} />
        {page.type === 'flashcard' && <FlipIcon onPress={onFlip} />}
      </View>

      {/* User Details */}
      <View
        style={[styles.userDetails, {bottom: PLAYLIST_HEIGHT + insets.bottom}]}>
        <Text style={styles.textUserName}>{page.user.name}</Text>
        <Text style={styles.textDescription}>{page.description}</Text>
      </View>

      {/* Playlist Part */}
      {page.playlist && (
        <View
          style={[styles.playlist, {height: PLAYLIST_HEIGHT + insets.bottom}]}>
          <TouchableOpacity activeOpacity={0.8} style={styles.playlistButton}>
            <View style={styles.playlistInner}>
              <Text style={styles.textPlaylist}>
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
  viewSideButtons: {
    position: 'absolute',
    right: 0,

    justifyContent: 'flex-end',
    marginRight: 8,
    paddingBottom: 16,
    width: SIDE_BUTTONS_WIDTH,
  },
  userDetails: {
    position: 'absolute',
    padding: 16,
    alignSelf: 'flex-start',
  },
  playlist: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  playlistButton: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#222',
    alignItems: 'flex-start',
  },
  playlistInner: {
    flexDirection: 'row',
    height: PLAYLIST_HEIGHT,
  },
  textPlaylist: {marginRight: 16, color: 'white', fontWeight: 'bold'},
});
