import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Following from '../Following';
import ForYou from '../ForYou';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Timer from '../../components/Timer';

const MainTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Following'},
    {key: 'second', title: 'For You'},
  ]);

  const renderTabBar = props => (
    <SafeAreaView style={styles.viewSafe}>
      <Timer />
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        renderLabel={({route, color}) => (
          <Text style={[styles.textRoute, {color: color}]}>{route.title}</Text>
        )}
      />
      <TouchableOpacity style={styles.search} activeOpacity={0.8}>
        <Icon name="search" color="white" size={16} />
      </TouchableOpacity>
    </SafeAreaView>
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

const renderScene = SceneMap({
  first: Following,
  second: ForYou,
});

export default MainTabs;

const styles = StyleSheet.create({
  viewSafe: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 5,
    marginHorizontal: 16,
  },
  indicator: {
    backgroundColor: 'white',
    height: 6,
    borderRadius: 4,
  },
  tabBar: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  search: {width: 50},
  textRoute: {margin: 8, color: 'white', fontSize: 15},
});
