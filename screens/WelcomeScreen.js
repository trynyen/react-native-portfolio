import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
  } from 'react-native';
  
export default class Welcome extends React.Component {
    static navigationOptions = {
      title: 'Trinh Nguyen Portfolio',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>Hello! My name is Trinh Nguyen!</Text>
            <Text>Welcome to my page</Text>
        </View>
      );
    }
  }