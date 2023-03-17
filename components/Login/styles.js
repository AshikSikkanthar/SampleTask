import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '50%',
  },

  HeaderContainer: {
    marginTop: 10,
    paddingLeft: 30,
  },

  HeaderText: {
    fontSize: 48,
    color: '#28261F',
  },

  HeaderTitleContainer: {
    marginTop: 5,
    paddingLeft: 30,
  },

  HeaderTitleText: {
    fontSize: 16,

    color: '#505050',
  },

  UserContainer: {
    marginTop: 34,
  },

  PassContainer: {
    marginTop: 15,
  },

  InputContainer: {
    color: 'black',
    fontSize: 20,
    borderColor: '#505050',
    paddingHorizontal: 32,
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 16,
    paddingVertical: 20,
  },

  EventContainer: {
    marginHorizontal: 30,
    backgroundColor: '#FF7D65',
    marginTop: 27,
    marginBottom: 31,
    paddingVertical: 10,
    borderRadius: 12,
  },
  ActionText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
  },
});

export default styles;
