import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Menu = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>House specials</Text>
        <View style={styles.menusBox}>
          <View style={styles.contentsBox}>
            <Text style={styles.title}>title</Text>
            <Text style={styles.description}>
              descriptiondescriptiondescrisdfsdf sdfsd
            </Text>
            <Text style={styles.price}>price</Text>
          </View>
          <View style={styles.photoBox}>
            <Image
              style={styles.photo}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
              }}
            />
            <FontAwesome5 name="heart" regular style={styles.heartIcon} />
          </View>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Main dishes</Text>
        <View style={styles.menusBox}>
          <View style={styles.contentsBox}>
            <Text style={styles.title}>title</Text>
            <Text style={styles.description}>description</Text>
            <Text style={styles.price}>price</Text>
          </View>
          <View style={styles.photoBox}>
            <Image
              style={styles.photo}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
              }}
            />
            <FontAwesome5 name="heart" regular style={styles.heartIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  subContainer: {
    backgroundColor: Colors.white,
    paddingLeft: 15,
    marginVertical: 5,
  },
  subContainerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  menusBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentsBox: {},
  photoBox: {marginHorizontal: 15},
  title: {fontWeight: 'bold', fontSize: 17, marginBottom: 5},
  description: {
    fontSize: 14,
    color: '#818181',
    marginBottom: 5,
  },
  price: {fontSize: 17},
  photo: {width: 130, height: 110, borderRadius: 20},
  heartIcon: {
    position: 'absolute',
    fontSize: 20,
    color: Colors.white,
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingTop: 10,
  },
});

export default Menu;
