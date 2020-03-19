import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

const AddAlarm = ({addAlarm}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const setHr = h => {
    setHours(h);
  };

  const setM = m => {
    setMinutes(m);
  };

  return (
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //console.log(hours, minutes);
            addAlarm(hours, minutes);
          }}>
          <Text style={styles.buttonText}>Add Alarm V2</Text>
        </TouchableOpacity>
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

export default AddAlarm;
