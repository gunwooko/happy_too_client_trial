import {symbol} from 'prop-types';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RestaurantList = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={styles.searchBar}
        type="text"
        placeholder="search"
      />
      {}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurant');
        }}
        style={styles.contentContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            }}
          />
        </View>
        <View style={styles.restaurantInfoBox}>
          <Text style={styles.title}>Pepe's Mexican Restaurant Newmarket</Text>
          <View style={styles.address}>
            <FontAwesome5
              name="map-marker-alt"
              solid
              style={styles.addressIcon}
            />
            <Text style={styles.addressText}>
              2 Mason St, North Lakes QLD 4509
            </Text>
          </View>
          <View style={styles.details}>
            <FontAwesome5 name="star" solid style={styles.scoreIcon} />
            <Text style={styles.score}>
              4.9 <Text style={styles.scoreAmount}>(1000+) &middot;</Text>
            </Text>
            <FontAwesome5 name="clock" light style={styles.clockIcon} />
            <Text style={styles.time}>20-35 min &middot;</Text>
            <Text style={styles.deliveryFee}>
              delivery fee $9.5 &middot; 2.7km awayasdfsdfds
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
