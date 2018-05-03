import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './components/CreatedByView';
import Constants from './Constants'

export default class ForgotPasswordScreen extends Component {
    static navigationOptions = {
        title: 'Reset Password',
        headerStyle: {
            backgroundColor: Constants.COLOR.DARK_PURPLE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{
                margin: 20
            }}>

                <View style={styles.allInputContainer}>
                    <Text>User Name</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={this.onLoginClicked}
                        title="Submit"
                        color={Constants.COLOR.DARK_PURPLE}
                        accessibilityLabel="submit button"
                    />

                </View>
                <CreatedByView />
            </View >
        );
    }
}

const styles = StyleSheet.create({

    allInputContainer: {
        backgroundColor: '#CCCCCC',
        padding: 20,
        alignSelf: 'stretch',
    }
});