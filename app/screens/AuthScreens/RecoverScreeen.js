import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class RecoverScreeen extends Component{

  render() {

    return (
      
      <View style={styeles.container}>
            <Text >
                Укажите адрес электронный почты, который вы использовали для регистрации
            </Text>
            <View style={styeles.form}>
                <Text style={{color : '#979797', fontSize : 12, paddingLeft : 10}}>E-mail</Text>
                <TextInput
                    style={styeles.inputForm}
                    onChangeText={text => text}
                />
               
            </View>

            <TouchableOpacity
                style={styeles.btnAuth}
            >
                <Text style={{textAlign : 'center', color : '#fff', fontSize : 14, textTransform : 'uppercase'}}>
                    Восстановить пароль
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