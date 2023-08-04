import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import VerticalViewPager from 'react-native-vertical-view-pager';
import Page from '../../components/Page';
import {IPage} from '../../types/Page';

const ForYou = () => {
  const [pages, setPages] = useState<IPage[]>([
    {
      type: 'flashcard',
      id: 3047,
      playlist: 'Period 5: 1844-1877',
      flashcard_front: 'Manifest Destiny is the idea that the U.S. had',
      flashcard_back:
        "The idea that the United States was to possess the entire continent from the Atlantic Ocean to the Pacific Ocean and that this right was given to them by God. John O'Sullivan was the first to coin this term describing westward expansion.",
      description: 'Topic 5.2: Manifest Destiny #apush',
      user: {
        name: 'AP US History',
        avatar:
          'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
      },
    },
    {
      type: 'flashcard',
      id: 3047,
      playlist: 'Period 5: 1844-1877',
      flashcard_front: 'Manifest Destiny is the idea that the U.S. had',
      flashcard_back:
        "The idea that the United States was to possess the entire continent from the Atlantic Ocean to the Pacific Ocean and that this right was given to them by God. John O'Sullivan was the first to coin this term describing westward expansion.",
      description: 'Topic 5.2: Manifest Destiny #apush',
      user: {
        name: 'AP US History',
        avatar:
          'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
      },
    },
    {
      type: 'flashcard',
      id: 3047,
      playlist: 'Period 5: 1844-1877',
      flashcard_front: 'Manifest Destiny is the idea that the U.S. had',
      flashcard_back:
        "The idea that the United States was to possess the entire continent from the Atlantic Ocean to the Pacific Ocean and that this right was given to them by God. John O'Sullivan was the first to coin this term describing westward expansion.",
      description: 'Topic 5.2: Manifest Destiny #apush',
      user: {
        name: 'AP US History',
        avatar:
          'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
      },
    },
  ]);

  return (
    <VerticalViewPager showsVerticalScrollIndicator={false}>
      {pages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </VerticalViewPager>
  );
};

export default ForYou;
