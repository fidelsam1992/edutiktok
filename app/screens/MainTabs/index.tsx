import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Following from '../Following';
import ForYou from '../ForYou';

const MainTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Following'},
    {key: 'second', title: 'For You'},
  ]);

  const renderTabBar = props => (
    <SafeAreaView
      style={{
        position: 'absolute',
        flex: 1,
        // backgroundColor: 'red',
        width: '100%',
        zIndex: 5,
      }}>
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 6,
          borderRadius: 4,
          // width: '20%',
        }}
        style={{
          width: '60%',
          alignSelf: 'center',
          backgroundColor: 'transparent',
        }}
        renderLabel={({route, focused, color}) => (
          <Text style={{margin: 8, color: 'white', fontSize: 15}}>
            {route.title}
          </Text>
        )}
      />
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

const styles = StyleSheet.create({});
