import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import CurrentTime from './components/CurrentTime';
import AlarmArea from './components/AlarmArea';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CLOCK APP</Text>
      </View>
      <View style={styles.currentArea}>
        <CurrentTime />
      </View>
      <View style={styles.allAlarmArea}>
        <AlarmArea />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 65,
    padding: 13,
    backgroundColor: '#202020',
    elevation: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  currentArea: {
    flex: 4,
    backgroundColor: '#1F2128',
  },
  allAlarmArea: {
    flex: 10,
    backgroundColor: '#1F2128',
  },
});

export default App;

/*

import React from 'react';
import {View, Text, StyleSheet, PLatform} from 'react-native';
import CurrentTime from './components/CurrentTime';
import AlarmArea from './components/AlarmArea';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.currentTime}>
        <CurrentTime />
      </View>
      <View style={styles.alarmArea}>
        <AlarmArea />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentTime: {
    flex: 2,
    justifyContent: 'center',
  },
  alarmArea: {
    flex: 5,
  },

});

export default App;

*/
