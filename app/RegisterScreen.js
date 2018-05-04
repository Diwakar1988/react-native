import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import CreatedByView from './components/CreatedByView';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import Constants from './Constants'
import { Dropdown } from 'react-native-material-dropdown';

export default class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: Constants.COLOR.DARK_PURPLE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
    onRegisterClicked() {

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
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text>Password</Text>
                    <TextInput
                        style={{ height: 40 }}
                        onChangeText={(text) => this.setState({ text })}
                        secureTextEntry={true}
                    />
                    <Text>Gender</Text>
                    <RadioGroup
                        onSelect={(index, value) => this.onSelect(index, value)}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                        <RadioButton value={'male'} >
                            <Text>Male</Text>
                        </RadioButton>

                        <RadioButton value={'female'} >
                            <Text>Female</Text>
                        </RadioButton>
                    </RadioGroup>
                    <Text>Date of Birth:</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
                        <Text style={{ flex: 1, fontSize: 12 }}>Date</Text>
                        <Text style={{ flex: 1, fontSize: 12 }}>Month</Text>
                        <Text style={{ flex: 1, fontSize: 12 }}>Year</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
                        <TextInput
                            style={{ height: 40, flex: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={{ height: 40, flex: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={{ height: 40, flex: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                            keyboardType='numeric'
                        />
                    </View>
                    <Dropdown
                        label='Highest Qualification'
                        data={Constants.ARRAY_QUALIFICATIONS}
                        baseColor='#000000'
                    />
                    <Button
                        onPress={() => this.onRegisterClicked()}
                        title="Submit"
                        color={Constants.COLOR.DARK_PURPLE}
                        accessibilityLabel="submit button text"
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