import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Image: {
    height: '84%',
  },

  HeaderContainer: {
    position: 'absolute',
    marginTop: 100,
  },
  HeaderTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  TextStyle: {
    fontSize: 100,
    color: 'white',
    fontWeight: 'bold',
    //alignSelf: 'center',
  },
  MidStyle: {
    fontSize: 100,
    color: '#FF1744',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  TextContainer: {
    alignSelf: 'center',
  },
  ContentContainer: {
    marginTop: 20,
    // marginHorizontal: 60,

    flex: 1,
    alignSelf: 'center',
    width: '60%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  ContentStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  EventContainer: {
    backgroundColor: '#FF1744',
    borderRadius: 100,
    marginTop: 18,
    width: '20%',
    alignSelf: 'center',
    // marginHorizontal: 530,
  },
  EventText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 18,
  },
  item: {
    flexDirection: 'column',
    width: '23%',
    height: '75%',
    marginLeft: 20,
    marginVertical: 10,
  },

  title: {
    color: 'black',
    fontSize: 24,
    paddingLeft: 18,
    color: '#FFFFFF',
  },
});

export default styles;
