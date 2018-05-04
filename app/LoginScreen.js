import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './components/CreatedByView'
import Constants from './Constants'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }

    }
    static navigationOptions = {
        title: 'A React-Native Application',
        headerStyle: {
            backgroundColor: Constants.COLOR.DARK_PURPLE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        textAlign: 'center',
        alignSelf: 'center'
    };
    onLoginClicked() {
        if (this.validateInput() == false) {
            return;
        }

        Alert.alert('LOGIN email= ' + this.state.email + ', password= ' + this.state.password);
    }
    validateInput() {
        if (this.state.email == null || this.state.email == '') {
            Alert.alert('Please enter a valid email address');
            return false;
        }
        return true;
    }

    render() {
        return (
            <View style={{
                margin: 20
            }}>

                <View style={styles.allInputContainer}>
                    <Text>Email</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Text>Password</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ password: text })
                        }
                        secureTextEntry={true}
                    />
                    <Text style={{ marginTop: 5, marginBottom: 20, color: '#0000FF', textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>Forgot password?</Text>
                    <View style={styles.buttonContainer}>
                        <View style={{ flex: 1, marginRight: 5 }}>
                            <Button
                                onPress={() => this.onLoginClicked()}
                                title="Login"
                                color={Constants.COLOR.DARK_PURPLE}
                                accessibilityLabel="login button"
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }} >
                            <Button
                                onPress={() => this.props.navigation.navigate('Register')}
                                title="Register"
                                color={Constants.COLOR.DARK_PURPLE}
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