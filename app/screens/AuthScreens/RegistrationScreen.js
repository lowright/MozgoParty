import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'


export default class RegistrationScreeen extends Component{

    constructor(props) {
        super(props)

        this.state = {
            checked : false
        }
    }

  render() {

    return (
      
      <View style={styeles.container}>

            <View style={styeles.form}>
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                    placeholder='Имя и фамилия'
                />
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                    placeholder='E-mail'
                />
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                    secureTextEntry={true}
                    placeholder='Пароль' 
                />
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                    secureTextEntry={true}
                    placeholder='Подтвердить пароль'
                />
            </View>

            <CheckBox
                title='Я соглашаюсь на обработку персональных данных и прочитал пользовательское соглашение'
                checked={this.state.checked}
                onPress={() => this.setState({checked : this.state.checked ? false : true})}
                style={{}}
            />

            <TouchableOpacity
                style={styeles.btnAuth}
            >
                <Text style={{textAlign : 'center', color : '#fff', fontSize : 14}}>
                    ЗАРЕГЕСТРИРОВАТЬСЯ
                </Text>
            </TouchableOpacity>



      </View>
     
    )

  }

}

const styeles = StyleSheet.create({
    container : {
        paddingHorizontal : 16,
        paddingVertical : 16
    },
    text : {
        fontSize : 16,
        fontWeight : '100'
    },
    form : {
    },
    inputForm : {
        height: 40, 
        borderBottomWidth: 1, 
        paddingLeft: 9,
        paddingRight: 15,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
        fontSize : 16,
        marginBottom : 25 
    },
    btnAuth : {
        marginTop : 30,
        backgroundColor : '#0B2A5B',
        padding : 16,
        borderRadius : 5
    }
})