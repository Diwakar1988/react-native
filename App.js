import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './app/components/CreatedByView'

export default class App extends React.Component {
  onLoginClicked() {
    Alert.alert('LOGIN');
  }
  onRegisterClicked() {
    Alert.alert('REGISTER');
  }
  onForgotPasswordClick() {
    Alert.alert('FORGOT PASSWORD');
  }
  render() {
    return (
      <View style={{
        margin: 20
      }}>
        <Text style={{ marginTop: 30, marginBottom: 20, fontSize: 30, color: '#841584', alignSelf: 'center' }}>User Login</Text>
        <View style={styles.allInputContainer}>
          <Text>User Name</Text>
          <TextInput
            style={{ height: 40 }}
            onChangeText={(text) => this.setState({ text })}
          />
          <Text>Password</Text>
          <TextInput
            style={{ height: 40 }}
            onChangeText={(text) => this.setState({ text })
            }
            secureTextEntry={true}
          />
          <Text style={{ marginTop: 5, marginBottom: 20, color: '#0000FF', textDecorationLine: 'underline' }} onPress={this.onForgotPasswordClick}>Forgot password?</Text>
          <View style={styles.buttonContainer}>
            <View style={{ flex: 1, marginRight: 5 }}>
              <Button
                onPress={this.onLoginClicked}
                title="Login"
                color="#841584"
                accessibilityLabel="login button"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }} >
              <Button
                onPress={this.onRegisterClicked}
                title="Register"
                color="#841584"
                accessibilityLabel="register button"
              />
            </View>
          </View>

        </View>
        <CreatedByView />

      </View >
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allInputContainer: {
    backgroundColor: '#CCCCCC',
    padding: 20,
    alignSelf: 'stretch',
  }
});
