import React, { useState } from "react";
import { ScrollView, Text, AsyncStorage } from "react-native";
import { ThemedInput, ThemedButton } from "../../components";
import * as FirebaseAPI from '../../modules/firebaseAPI'; //* import all functions from firebaseAPI 
import firebase from 'firebase';
import {connect} from 'react-redux';
import {logIn, signUp} from '../../store/actions/auth/authActions';



const LoginScreen = ({navigation, login, signup}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    return (
      <ScrollView style={{flex:1, backgroundColor:'#E5F2F2'}}>
        <ThemedInput 
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <ThemedInput 
          placeholder='password'
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <ThemedButton
          title="Create new User"
          onPress={() => {signup(email, password); navigation.navigate('Dashboard')}}
        />
        <ThemedButton
          title="Login"
          onPress={() => {login(email, password); navigation.navigate('Dashboard')}}
        />
      </ScrollView>
    )
  }


LoginScreen.navigationOptions = {
  title: "Login"
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch( logIn(email, password)),
    signup: (email, password) => dispatch( signUp(email, password))
  }
}

export default connect (null, mapDispatchToProps)(LoginScreen);



  // componentDidMount() {
  //   this.watchAuthState(this.props.navigation)
  // }

  // watchAuthState(navigation) {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     console.log('onAuthStateChanged: ', user);

  //     if (user) {
  //       navigation.navigate('Dashboard');
  //     }
  //   });
  // }

  // createUser() {
  //   FirebaseAPI.createUser(this.state.email, this.state.password)
  // }

  // signIn() {
  //   FirebaseAPI.signInUser(this.state.email, this.state.password)
  // }