import React, {Component, useState, useEffect} from 'react';
import UUIDGenerator from 'react-native-uuid-generator';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import AddAlarm from './AddAlarm';

const AlarmArea = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [alarms, setAlarms] = useState([
    {
      id: UUIDGenerator.getRandomUUID(),
      hr: 12,
      min: 10,
    },
    {
      id: UUIDGenerator.getRandomUUID(),
      hr: 1,
      min: 19,
    },
  ]);

  const setHr = h => {
    setHours(h);
  };

  const setM = m => {
    setMinutes(m);
  };

  const AlarmItem = (hour, minutes) => {
    return (
      <View style={styles.singleAlarmItem}>
        <Text style={styles.singleAlarmText}>
          {hour} : {min}
        </Text>
      </View>
    );
  };

  const addAlarm = (hour, minutes) => {
    setAlarms(prevItems => {
      return [
        {id: UUIDGenerator.getRandomUUID(), hr: hour, min: minutes},
        ...prevItems,
      ];
    });
  };

  const addToAlarms = (hr, min) => {
    console.log();

    setAlarms(prevItems => {
      return [{id: UUIDGenerator.getRandomUUID(), hr, min}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <AddAlarm addAlarm={addAlarm} />
      <View style={styles.allAlarms}>
        <SafeAreaView>
          <FlatList
            data={alarms}
            renderItem={({item}) => (
              <View style={styles.singleAlarmItem}>
                <Text style={styles.singleAlarmText}>
                  {item.hr} : {item.min}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addAlarmSection: {
    flex: 1,
    backgroundColor: '#343434',
    marginHorizontal: 7,
    marginTop: 10,
    borderRadius: 25,
  },
  timerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addAlarmButton: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#232a36',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'auto',
    textAlignVertical: 'center',
  },
  allAlarms: {
    flex: 2,
    padding: 5
  },
  singleAlarmItem: {
    backgroundColor: '#343434',
    marginHorizontal: 7,
    marginTop: 10,
    marginBottom: 7,
    borderRadius: 25,
    padding: 15
  },
  singleAlarmText: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'Roboto',
    textAlign: 'auto',
    textAlignVertical: 'center',
  },
});

export default AlarmArea;

/*
old add alarm
<TouchableOpacity style={styles.button} onPress={addToAlarms}>
            <Text style={styles.buttonText}>Add Alarm</Text>
          </TouchableOpacity>
*/

/*
hopefuly last

import React, {Component, useState, useEffect} from 'react';
import UUIDGenerator from 'react-native-uuid-generator';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import AddAlarm from './AddAlarm';

const AlarmArea = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [alarms, setAlarms] = useState([
    {
      id: UUIDGenerator.getRandomUUID(),
      hr: 12,
      min: 10,
    },
    {
      id: UUIDGenerator.getRandomUUID(),
      hr: 1,
      min: 19,
    },
  ]);

  const setHr = h => {
    setHours(h);
  };

  const setM = m => {
    setMinutes(m);
  };

  const AlarmItem = (hour, minutes) => {
    return (
      <View style={styles.singleAlarmItem}>
        <Text style={styles.singleAlarmText}>
          {hour} : {min}
        </Text>
      </View>
    );
  };

  const addAlarm = (hour, minutes) => {
    setAlarms(prevItems => {
      return [{id: UUIDGenerator.getRandomUUID(), hr:hour, min:minutes}, ...prevItems];
    });
  };

  const addToAlarms = (hr, min) => {
    console.log();

    setAlarms(prevItems => {
      return [{id: UUIDGenerator.getRandomUUID(), hr, min}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.addAlarmSection}>
        <View style={styles.timerSection}>
          <NumericInput
            value={hours}
            onChange={setHr}
            minValue={0}
            maxValue={24}
            totalWidth={150}
            totalHeight={50}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor="#232a36"
            leftButtonBackgroundColor="#232a36"
          />
          <NumericInput
            value={minutes}
            onChange={setM}
            minValue={0}
            maxValue={60}
            totalWidth={150}
            totalHeight={50}
            iconSize={20}
            step={1}
            valueType="real"
            rounded
            textColor="#ffffff"
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor="#232a36"
            leftButtonBackgroundColor="#232a36"
          />
        </View>
        <View style={styles.addAlarmButton}>
          <AddAlarm addAlarm={addAlarm} />
        </View>
      </View>
      <View style={styles.allAlarms}>
        <SafeAreaView>
          <FlatList
            data={alarms}
            renderItem={({item}) => (
              <View style={styles.singleAlarmItem}>
                <Text style={styles.singleAlarmText}>
                  {item.hr} : {item.min}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addAlarmSection: {
    flex: 1,
    backgroundColor: '#343434',
    marginHorizontal: 7,
    marginTop: 10,
    borderRadius: 25,
  },
  timerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addAlarmButton: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#232a36',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'auto',
    textAlignVertical: 'center',
  },
  allAlarms: {
    flex: 2,
    backgroundColor: '#343434',
    marginHorizontal: 7,
    marginTop: 10,
    marginBottom: 7,
    borderRadius: 25,
  },
  singleAlarmItem: {},
  singleAlarmText: {},
});

export default AlarmArea;


*/

/*

import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';
//import TimePicker from 'react-native-24h-timepicker';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import TimePicker from 'react-native-simple-time-picker';
import NumericInput from 'react-native-numeric-input';

const AlarmArea = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [alarms, setAlarms] = useState([
    {hr: 12, min: 10},
    {hr: 1, min: 19},
  ]);

  const setHr = h => {
    setHours(h);
  };

  const setM = m => {
    setMinutes(m);
  };

  const addToAlarms = (hours, minutes) => {
    setAlarms([
      ...alarms,
      {
        hr: hours,
        min: minutes,
      },
    ]);
  };

  return (
    <View style={styles.fullAlarmArea}>
      <View style={styles.inputTime}>
        <NumericInput
          value={hours}
          onChange={setHr}
          minValue={0}
          maxValue={24}
          totalWidth={150}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#232a36"
          iconStyle={{color: 'white'}}
          rightButtonBackgroundColor="#232a36"
          leftButtonBackgroundColor="#232a36"
        />
        <NumericInput
          value={minutes}
          onChange={setM}
          minValue={0}
          maxValue={60}
          totalWidth={150}
          totalHeight={50}
          iconSize={20}
          step={1}
          valueType="real"
          rounded
          textColor="#232a36"
          iconStyle={{color: 'white'}}
          rightButtonBackgroundColor="#232a36"
          leftButtonBackgroundColor="#232a36"
        />
      </View>
      <View style={styles.addTime}></View>
      <View style={styles.allAlarms}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullAlarmArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  inputTime: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  addTime: {
    flex: 2,
    padding: 80,
    backgroundColor: 'blue',
  },
  addAlarmBtn: {},
  allAlarms: {
      flex:4,
      backgroundColor: 'red'
  }
});

export default AlarmArea;

*/

/*

<View style={styles.addTime}>
        <Button title="Add Alarm" style={styles.addAlarmsBtn} />
      </View>


const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () style={styles.inputTime}=> {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );


  <View style={styles.container}>
      <Text>
        {hr} Hours : {min} Minutes
      </Text>
      <TimePicker onChange={onTimeChange} />
    </View>



     container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
*/
