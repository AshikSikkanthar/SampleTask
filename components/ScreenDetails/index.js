import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import MoviePic from '../Assets/MoviePic.png';

import Play from '../Assets/Play.png';

const ScreenDetails = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 150, marginTop: 130, flex: 0.55}}>
          <Text
            style={{fontSize: 36, color: 'white', fontWeight: 'bold'}}
            numberOfLines={6}>
            Game of Thrones - Conquest & Rebellion: An Animated History of the
            Seven Kingdoms
          </Text>

          <Text style={{fontSize: 32, color: 'white', paddingVertical: 48}}>
            Rating : 3.92 / 5
          </Text>

          <Text style={{fontSize: 28, color: '#DDDBDB', paddingBottom: 48}}>
            HBO's animated history of Westeros brings to life all the events
            that shaped the Seven Kingdoms in the thousands of years before Game
            of Thrones' story begins.
          </Text>

          <Text
            style={{
              fontSize: 32,
              color: 'white',
              fontWeight: 'bold',
              paddingBottom: 20,
            }}>
            Release Date :2017-12-12
          </Text>

          <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
            Orginal Language en
          </Text>
        </View>

        <View style={{flex: 0.45, marginHorizontal: 40}}>
          <Image
            source={MoviePic}
            resizeMode="contain"
            style={{height: '110%', width: '100%'}}
          />

          <View
            style={{
              position: 'absolute',
              marginHorizontal: 200,
              marginVertical: 440,
            }}>
            <TouchableOpacity>
              <Image source={Play} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScreenDetails;
