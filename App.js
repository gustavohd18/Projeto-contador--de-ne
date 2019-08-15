
import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import imagem from './img/julione.jpeg'
export default class App extends Component {

  state = {
    count: 0
  }

  counter() {
    const countMoreOne = this.state.count + 1
    this.setState({count: countMoreOne})
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={{width: '100%', height: '60%'}}>
        <Text style={styles.count}>{this.state.count}</Text>
        <Text style={styles.ne}>Né...</Text>
        </ImageBackground>
        <Button onPress= {() => this.couter()} title= 'Bora contar né'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  count: {
    width: 100,
    marginLeft: 30,
    marginTop: 25,
    fontSize: 50,
  },
  ne: {
    marginLeft: 290,
    marginTop: -55,
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
