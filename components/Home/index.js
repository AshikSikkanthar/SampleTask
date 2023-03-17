import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  TextInput,
  ImageBackground,
} from 'react-native';
import styles from './styles';

import BackImage from '../Assets/BackImage.png';
import GameSeries from '../Assets/GameSeries.png';

import play from '../Assets/Play.png';

import Search from '../Assets/Search.png';
import ScreenDetails from '../ScreenDetails';

const DATA = [
  {
    id: '1',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '2',
    title: 'Vikings',
    image: GameSeries,
  },
  {
    id: '3',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '4',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '5',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '6',
    title: 'Vikings',
    image: GameSeries,
  },
  {
    id: '7',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '8',
    title: 'Stranger Things',
    image: GameSeries,
  },

  {
    id: '9',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '10',
    title: 'Vikings',
    image: GameSeries,
  },
  {
    id: '11',
    title: 'Stranger Things',
    image: GameSeries,
  },
  {
    id: '12',
    title: 'Stranger Things',
    image: GameSeries,
  },
];

const Home = ({navigation, route}) => {
  const [text, setText] = useState('Search Movies');

  const Item = ({item}) => (
    <View style={styles.item}>
      <View style={{}}>
        <Image
          style={{width: '100%', height: 200}}
          source={item.image}
          resizeMode="cover"

          // {{
          //   uri: 'https://reactnative.dev/img/tiny_logo.png',
          // }}
        />
      </View>

      <View
        style={{
          borderRadius: 8,

          backgroundColor: '#24446B',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 5,
          }}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{color: '#F8D70F', paddingLeft: 17}}> ⭐⭐⭐⭐⭐</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenDetails);
            }}
            style={{marginRight: 10}}>
            <Image source={play} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      <View
        style={{
          height: 84,
          backgroundColor: '#263E60',
          alignContent: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',

            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              // backgroundColor: '#263E60',
              borderRadius: 16,
              marginVertical: 20,
              flexDirection: 'row',
              borderRadius: 8,
              borderColor: '#FFFFFF',
              borderWidth: 1,
            }}>
            <TextInput
              style={{
                color: 'white',
                fontSize: 20,

                width: 280,

                paddingHorizontal: 30,

                borderRadius: 16,
                paddingVertical: 10,
              }}
              onChangeText={setText}
              value={text}
              keyboardType="default"
              placeholderTextColor="white"
            />
          </View>

          <TouchableOpacity
            style={{backgroundColor: '#FF6563', padding: 13, marginLeft: 5}}>
            <Image
              source={Search}
              style={{
                width: 20,
                height: 18,
              }}
            />
          </TouchableOpacity>

          <StatusBar
            backgroundColor="red"
            barStyle="light-content"
            hidden={true}
          />

          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'right',
                paddingHorizontal: 30,

                fontSize: 32,
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              LogOut
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{height: '50%'}}>
          <ImageBackground
            source={BackImage}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderTitle}>
                  Welcome to Our movie site
                </Text>

                <View style={styles.TextContainer}>
                  <Text style={styles.TextStyle}>
                    Our special <Text style={styles.MidStyle}>Movies</Text>
                  </Text>
                </View>

                <View style={styles.ContentContainer}>
                  <Text style={styles.ContentStyle} numberOfLines={4}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industrioy. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown.
                  </Text>

                  <TouchableOpacity style={styles.EventContainer}>
                    <Text style={styles.EventText}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginBottom: 100,
            backgroundColor: 'black',
          }}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            numColumns={4}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
