import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Home from '../Home';
import styles from './styles';

const Login = ({navigation, route}) => {
  const [text, setText] = useState('User Name');
  const [password, setPassword] = useState('Password');

  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Sign In</Text>
        </View>

        <View style={styles.HeaderTitleContainer}>
          <Text style={styles.HeaderTitleText}>
            Sign in to your self service portal
          </Text>
        </View>

        <View style={styles.UserContainer}>
          <TextInput
            style={styles.InputContainer}
            onChangeText={setText}
            value={text}
            keyboardType="default"
            placeholderTextColor="#505050"
          />
        </View>

        <View style={styles.PassContainer}>
          <TextInput
            style={styles.InputContainer}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            keyboardType="default"
            placeholderTextColor="#505050"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Home);
          }}
          style={styles.EventContainer}>
          <Text style={styles.ActionText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
