import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './components/CreatedByView'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'A React-Native Application',
        headerStyle: {
            backgroundColor: '#841584',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        textAlign: 'center',
        alignSelf: 'center'
    };
    onLoginClicked() {
        Alert.alert('LOGIN');
    }

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
                    <Text>Password</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ text })
                        }
                        secureTextEntry={true}
                    />
                    <Text style={{ marginTop: 5, marginBottom: 20, color: '#0000FF', textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot password?</Text>
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
                                onPress={() => this.props.navigation.navigate('Register')}
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