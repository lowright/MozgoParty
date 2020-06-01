import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class AuthScreen extends Component{

  render() {

    return (
      
      <View style={styeles.container}>
            <Text>
                Для авторизации вы можете использовать логин
                и пароль от сайта mozgo.com
            </Text>
            <View style={styeles.form}>
                <Text style={{color : '#979797', fontSize : 12, paddingLeft : 10}}>E-mail</Text>
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                />
                <Text style={{color : '#979797', fontSize : 12, paddingLeft : 10}}>Пароль</Text>
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')}
                style={styeles.btnAuth}
            >
                <Text style={{textAlign : 'center', color : '#fff', fontSize : 14}}>
                    ВОЙТИ
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RecoverScreeen')}
            >
                <Text 
                    style={
                        {
                            textAlign : 'center', 
                            marginVertical : 24,
                            fontSize : 12
                        }
                    }>Забыли пароль?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RegistrationScreeen')}
            >
                <Text 
                    style={
                        {
                            textAlign : 'center', 
                            fontSize : 12
                        }
                    }>Нет аккаунта? Зарегистрируйтесь.</Text>
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
        marginVertical : 30
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
        backgroundColor : '#0B2A5B',
        padding : 16,
        borderRadius : 5
    }
})