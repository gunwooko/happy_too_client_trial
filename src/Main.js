import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Main = () => {
  const onLogin = () => {
    console.log('go to login page');
  };

  const onAppleLogin = () => {
    console.log('go to apple login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./image/demoMainImg.jpg')}
        style={styles.image}>
        <View style={styles.subContainerTitles}>
          <Text style={styles.appTitle}>Happy Too</Text>
          <Text style={styles.appSubTitle}>Buddy App</Text>
        </View>

        <View style={styles.subContainerBtn}>
          <TouchableOpacity onPress={onLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log in with BuddyID</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.orStyle}>
            <View style={styles.orLine} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <TouchableOpacity onPress={onAppleLogin}>
            <View style={styles.appleSigninButton}>
              <Text style={styles.appleSigninButtonText}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.policy}>
            By logging in you agree to HappyToo Terms and Conditions including
            Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  subContainerTitles: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    color: Colors.white,
    fontSize: 55,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  appSubTitle: {
    color: Colors.white,
    fontSize: 25,
  },

  subContainerBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  loginButton: {
    backgroundColor: '#F8B102',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    padding: 20,
    color: '#FFFFFF',
    fontSize: 15,
  },
  appleSigninButton: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  appleSigninButtonText: {
    textAlign: 'center',
    padding: 20,
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  orStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  orLine: {
    width: '35%',
    borderBottomWidth: 0.9,
    borderColor: '#ffffff',
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  or: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  policy: {
    opacity: 0.4,
    alignSelf: 'center',
    textAlign: 'center',
    width: '70%',
  },
});

export default Main;
