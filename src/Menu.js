import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import testData from './testData';

const Menu = () => {
  const menuData = testData[0].menu;
  const houseSpecial = menuData[0].data;
  const mainDishes = menuData[1].data;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>House specials</Text>
        {houseSpecial.map((data) => (
          <View style={styles.menusBox} key={data.title}>
            <View style={styles.contentsBox}>
              <Text style={styles.title}>{data.title}</Text>
              <Text
                style={styles.description}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {data.description}
              </Text>
              <Text
                style={styles.description}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {data.description}
              </Text>
              <Text style={styles.price}>{`AU$${data.price}`}</Text>
            </View>
            <View style={styles.photoBox}>
              <Image
                style={styles.photo}
                source={{
                  uri: data.photo,
                }}
              />
              <FontAwesome5 name="heart" regular style={styles.heartIcon} />
            </View>
          </View>
        ))}
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Main dishes</Text>
        {mainDishes.map((data) => (
          <View style={styles.menusBox} key={data.title}>
            <View style={styles.contentsBox}>
              <Text style={styles.title}>{data.title}</Text>
              <Text
                style={styles.description}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {data.description}
              </Text>
              <Text
                style={styles.description}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {data.description}
              </Text>
              <Text style={styles.price}>{`AU$${data.price}`}</Text>
            </View>
            <View style={styles.photoBox}>
              <Image
                style={styles.photo}
                source={{
                  uri: data.photo,
                }}
              />
              <FontAwesome5 name="heart" regular style={styles.heartIcon} />
            </View>
          </View>
        ))}
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
  contentsBox: {flex: 5},
  photoBox: {marginHorizontal: 15, flex: 3},
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
