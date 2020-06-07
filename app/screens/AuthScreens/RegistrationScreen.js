import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import {connect} from 'react-redux'
import registrationUser from '../../actions/registrationUser'


class RegistrationScreeen extends Component{

    constructor(props) {
        super(props)

        this.state = {
            checked : false,
            name : '',
            email : '',
            phone : '',
            password : '',
            password_confirmation : ''
        }
    }

    render() {

        const { registrationUser } = this.props
        const { name, email, password, password_confirmation, phone } = this.state

        return (
        
            <View style={styeles.container}>

                <View style={styeles.form}>
                    <TextInput
                        style={styeles.inputForm}
                        onChangeText={name => this.setState({name})}
                        placeholder='Имя и фамилия'
                        value={this.state.name}
                    />
                    <TextInput
                        style={styeles.inputForm}
                        onChangeText={email => this.setState({email})}
                        placeholder='E-mail'
                        value={this.state.email}
                    />
                    <TextInput
                        style={styeles.inputForm}
                        onChangeText={phone => this.setState({phone})}
                        placeholder='Номер телефона'
                        value={this.state.phone}
                    />
                    <TextInput
                        style={styeles.inputForm}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        placeholder='Пароль' 
                        value={this.state.password}
                    />
                    <TextInput
                        style={styeles.inputForm}
                        onChangeText={pass => this.setState({password_confirmation : pass})}
                        secureTextEntry={true}
                        placeholder='Подтвердить пароль'
                        value={this.state.password_confirmation}
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
                    onPress={() => registrationUser(name, email, password, password_confirmation, phone)}
                >
                    <Text style={{textAlign : 'center', color : '#fff', fontSize : 14}}>
                        ЗАРЕГЕСТРИРОВАТЬСЯ
                    </Text>
                </TouchableOpacity>

            </View>
        
        )

    }

}

const mapStateToProps = state => {
    console.log('mapStateToProps >>>>>>>>')
    console.log(JSON.stringify(state))
    return {}
}

const mapDispatchToProps = dispatch => {
    console.log('mapDispatchToProps >>>>>>>>')
    return {
        registrationUser : (name, email, password, password_confirmation, phone) => {
            dispatch(registrationUser(name, email, password, password_confirmation, phone))
        }
    }
}
  
export default connect( mapStateToProps, mapDispatchToProps )(RegistrationScreeen)
  

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