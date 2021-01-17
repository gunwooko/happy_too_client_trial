import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = ({navigation}) => {
  const [buddyId, setBuddyId] = useState('');
  const [password, setPassword] = useState('');
  const [alertId, setAlertId] = useState(false);
  const [alertPw, setAlertPw] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // id check
  const doesIdIsCorrect = (id) => {
    return id.length > 0;
  };
  const renderIdFeedbackMessage = () => {
    return <Text style={styles.invalid}>Enter a buddyId</Text>;
  };

  // password check
  const doesPasswordIsCorrect = (pw) => {
    if (pw) {
      return pw.length > 0;
    }
  };
  const renderPasswordFeedbackMessage = () => {
    return <Text style={styles.invalid}>Enter a password</Text>;
  };

  const postLogin = () => {
    if (!doesIdIsCorrect(buddyId)) {
      console.log('budy!!', {buddyId, password, isChecked: toggleCheckBox});
      setAlertId(true);
    } else if (!doesPasswordIsCorrect(password)) {
      console.log('PW!', {buddyId, password, isChecked: toggleCheckBox});
      setAlertPw(true);
    } else if (buddyId && password) {
      console.log('okey', {buddyId, password, isChecked: toggleCheckBox});

      if (toggleCheckBox) {
        rememberUser({
          id: buddyId,
          pw: password,
          checked: toggleCheckBox,
        });
      } else {
        forgetUser();
      }

      // 200 status 받으면
      navigation.navigate('RestaurantList');
    }
  };

  // rememberme function
  const rememberUser = async ({id, pw, checked}) => {
    try {
      const jsonValue = JSON.stringify({id, pw, checked});
      await AsyncStorage.setItem('@storage_key', jsonValue);
    } catch (error) {
      console.log(error);
    }
  };
  const getRememberedUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_key');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
    }
  };
  const forgetUser = async () => {
    try {
      await AsyncStorage.removeItem('@storage_key');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userData = getRememberedUser();
    userData.then((data) => {
      console.log('work?', data);
      if (data) {
        setBuddyId(data.id);
        setPassword(data.pw);
        setToggleCheckBox(data.checked);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Log In with Buddy ID</Text>
        <TextInput
          onChangeText={(text) => {
            setAlertId(false);
            setBuddyId(text);
          }}
          type="text"
          placeholder="Buddy ID (ex. YS0001)"
          value={buddyId}
          style={styles.input}
        />
        {alertId && renderIdFeedbackMessage()}
        <TextInput
          onChangeText={(text) => {
            setAlertPw(false);
            setPassword(text);
          }}
          type="password"
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />
        {alertPw && renderPasswordFeedbackMessage()}
        <View style={styles.check}>
          <CheckBox
            style={styles.checkbox}
            value={toggleCheckBox}
            onValueChange={(newValue) => {
              setToggleCheckBox(newValue);
            }}
          />
          <Text style={styles.text}>Remember me</Text>
        </View>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity onPress={postLogin}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '80%',
  },
  title: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 4,
    marginBottom: 13,
  },
  input: {
    borderBottomWidth: 0.5,
    opacity: 0.7,
    fontSize: 15,
    marginBottom: 3,
  },
  invalid: {color: '#F50B02', fontSize: 15},

  check: {
    flexDirection: 'row',
  },
  checkbox: {color: '#757575'},
  text: {
    fontSize: 19,
    color: '#757575',
    marginTop: 2,
  },

  btnBox: {flex: 2},
  loginBtn: {
    backgroundColor: '#FADF2D',
    width: '77%',
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginBtnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 18,
  },
});

export default Login;
