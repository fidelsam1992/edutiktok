import {Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import VerticalViewPager from 'react-native-vertical-view-pager';
import {Page} from '../../components';
import {IPage} from '../../types/Page';
import {getFollowingPost} from '../../api';
const {height} = Dimensions.get('window');

const Following = () => {
  const [pages, setPages] = useState<IPage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex > pages.length - 2) {
      getFollowingPost()
        .then(response => response.json())
        .then(responseJson => {
          setPages(old => [...old, responseJson]);
        });
    }
  }, [currentIndex, pages]);

  const onScroll = event => {
    const index = event.nativeEvent.contentOffset.y / height;
    setCurrentIndex(index);
  };

  return (
    <VerticalViewPager
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={onScroll}>
      {pages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </VerticalViewPager>
  );
};

export default Following;
