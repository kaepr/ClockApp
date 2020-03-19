import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const CurrentTime = () => {
  const [currTime, setCurrTime] = useState(null);
  const [currDay, setCurrDay] = useState(null);

  var daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getCurentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    setCurrTime(hour + ' : ' + minutes + ' : ' + seconds + ' ');

    daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        setCurrDay(item.toUpperCase());
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurentTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.time}>{currTime}</Text>
        <Text style={styles.date}>{currDay}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    marginHorizontal: 7,
    marginTop: 10,
    borderRadius: 25,
  },
  innerContainer: {
    flex: 1,
    paddingLeft: 20,
    padding: 30,
  },
  time: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Roboto',
  },
  date: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default CurrentTime;

/*
 useEffect(() => {
    setInterval(() => {
      getCurentTime();
    });
  });
*/
