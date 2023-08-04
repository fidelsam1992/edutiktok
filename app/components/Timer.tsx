import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Timer = () => {
  const [minutesSpent, setminutesSpent] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setminutesSpent(old => old + 1);
    }, 1000 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View style={{width: 50, flexDirection: 'row'}}>
      <Icon name="stopwatch" color="rgb(182	181	177	)" size={16} />
      <Text style={styles.textTimer}>{minutesSpent}m</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  textTimer: {color: 'rgb(182	181	177	)', marginLeft: 8},
});
