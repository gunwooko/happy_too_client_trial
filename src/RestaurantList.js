import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import testData from './testData';

const RestaurantList = ({navigation}) => {
  const [search, setSearch] = useState('');

  const renderRestaurants = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurant', {
            itemID: item.key,
            data: item,
          });
        }}
        style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: item.src,
            }}
          />
        </View>
        <View style={styles.restaurantInfoBox}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.address}>
            <FontAwesome5
              name="map-marker-alt"
              solid
              style={styles.addressIcon}
            />
            <Text style={styles.addressText}>{item.address}</Text>
          </View>
          <View style={styles.details}>
            <FontAwesome5 name="star" solid style={styles.scoreIcon} />
            <Text style={styles.score}>
              {item.score}
              <Text style={styles.scoreAmount}>
                ({item.scoreAmount}+) &middot;
              </Text>
            </Text>
            <FontAwesome5 name="clock" light style={styles.clockIcon} />
            <Text style={styles.time}>{item.time} min &middot;</Text>
            <Text style={styles.deliveryFee}>
              delivery fee ${item.deliveryFee} &middot; {item.distance}km away
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={styles.searchBar}
        type="text"
        placeholder="search"
      />
      {}
      <FlatList
        data={testData}
        renderItem={renderRestaurants}
        keyExtractor={(data) => String(data.key)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBar: {
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '90%',
    paddingLeft: 20,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 15,
  },

  contentContainer: {},
  imgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  img: {
    alignSelf: 'center',
    width: 350,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  restaurantInfoBox: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    width: 350,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  address: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 10,
    alignItems: 'center',
  },
  addressIcon: {
    color: '#6C6C6C',
  },
  addressText: {color: '#6C6C6C', paddingLeft: 5},
  details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 20,
    paddingBottom: 7,
    alignItems: 'center',
  },
  scoreIcon: {
    color: '#F0D12F',
  },
  score: {color: '#F0D12F', fontWeight: 'bold'},
  scoreAmount: {color: '#6C6C6C', fontWeight: 'normal'},
  clockIcon: {color: '#6C6C6C', marginHorizontal: 3},
  time: {
    fontSize: 15,
    color: '#6C6C6C',
  },
  deliveryFee: {color: '#6C6C6C'},
});

export default RestaurantList;
