import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Restaurant = ({route}) => {
  const {itemId, data} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: data.src}} style={styles.image}>
        <View style={styles.nav}>
          <FontAwesome5 name="arrow-left" solid style={styles.navIconArrow} />
          <View style={styles.navIconRigth}>
            <FontAwesome5 name="heart" regular style={styles.navIconHeart} />
            <FontAwesome5 name="search" solid style={styles.navIconSearch} />
          </View>
        </View>
        <View style={styles.restaurantInfoBox}>
          <Text style={styles.category}>{data.category}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.address}>
            <FontAwesome5
              name="map-marker-alt"
              solid
              style={styles.addressIcon}
            />
            <Text style={styles.addressText}>{data.address}</Text>
          </View>
          <View style={styles.details}>
            <FontAwesome5 name="star" solid style={styles.scoreIcon} />
            <Text style={styles.score}>
              {data.score}
              <Text style={styles.scoreAmount}>
                ({data.scoreAmount}+) &middot;
              </Text>
            </Text>
            <FontAwesome5 name="clock" light style={styles.clockIcon} />
            <Text style={styles.time}>{data.time} min &middot;</Text>
            <Text style={styles.deliveryFee}>
              delivery fee ${data.deliveryFee} &middot; {data.distance}km away
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentsContainer}>
        <Text>navi menu, review, info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },

  image: {flex: 2, resizeMode: 'cover'},

  nav: {
    flex: 0.3,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  navIconArrow: {color: '#ffffff', fontSize: 20},
  navIconRigth: {flexDirection: 'row'},
  navIconHeart: {
    color: '#ffffff',
    fontSize: 20,
    paddingRight: 12,
  },
  navIconSearch: {
    color: '#ffffff',
    fontSize: 20,
    paddingRight: 12,
  },

  restaurantInfoBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    resizeMode: 'cover',
    paddingBottom: 13,
  },
  category: {
    backgroundColor: '#FADF2D',
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 5,
    width: 80,
    textAlign: 'center',
    borderRadius: 50,
    paddingVertical: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 12,
    color: Colors.white,
    marginBottom: 11,
  },
  address: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 12,
    alignItems: 'center',
    marginBottom: 11,
  },
  addressIcon: {
    color: '#CDCDCD',
  },
  addressText: {color: '#FFFFFF', paddingLeft: 5},

  details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: 12,
    paddingBottom: 7,
    alignItems: 'center',
  },
  scoreIcon: {
    color: '#FADF2D',
  },
  score: {color: '#FADF2D', fontWeight: 'bold'},
  scoreAmount: {color: '#C1C1C2', fontWeight: 'normal'},
  clockIcon: {color: '#C1C1C2', marginHorizontal: 3},
  time: {
    fontSize: 15,
    color: '#C1C1C2',
  },
  deliveryFee: {color: '#C1C1C2'},

  contentsContainer: {
    flex: 3,
  },
});

export default Restaurant;
