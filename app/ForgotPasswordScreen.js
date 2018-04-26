import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './components/CreatedByView';

class ForgotPasswordScreen extends Component {

    render() {
        return (
            <View style={{
                margin: 20
            }}>
                <Text style={{ marginTop: 30, marginBottom: 20, fontSize: 30, color: '#841584', alignSelf: 'center' }}>Forgot Password</Text>
                <View style={styles.allInputContainer}>
                    <Text>User Name</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={this.onLoginClicked}
                        title="Submit"
                        color="#841584"
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


export default ForgotPasswordScreen;