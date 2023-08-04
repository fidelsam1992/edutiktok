import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import VerticalViewPager from 'react-native-vertical-view-pager';
import Page from '../../components/Page';
import {IPage} from '../../types/Page';

const Following = () => {
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
      type: 'mcq',
      id: 7228,
      playlist: 'Period 6: 1865-1898',
      description: '5.5 Sectional Conflict: Regional Differences #apush',
      image:
        'https://cross-platform-rwa.rp.devfactory.com/images/7228%20-%20John%20Browns%20attack%20at%20Harpers%20Ferry.png',
      question:
        "Why did John Brown's attack at Harper's Ferry shock the nation?",
      options: [
        {
          id: 'A',
          answer:
            "It created fears that white northerner's would initiate acts of violence to end slavery",
        },
        {
          id: 'B',
          answer:
            'It was successful and resulted in hundreds of slaves being freed',
        },
        {
          id: 'C',
          answer:
            'The level of violence over the issue of slavery had not been seen before',
        },
      ],
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

export default Following;
