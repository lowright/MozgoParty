import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartedScreen extends Component{

  render() {

    return (
      
        <View style={styles.container}>

            <ImageBackground source={require('../../src/backLoginScreen.png')} style={styles.images}>
                <Image
                    style={styles.logo}
                    source={require('../../src/logo.png')}
                />
                <View style={{paddingHorizontal : 16, position : 'absolute', bottom : 30}}>
                    <Text style={styles.description}>
                        Нажимая «Продолжить», вы соглашаетесь
                        на обработку персональных данных и принимаете 
                        условия пользовательского соглашения
                    </Text>
                    <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={() => this.props.navigation.navigate('AuthScreen')}
                    >
                        <Text 
                            style={{color : '#fff', fontSize : 17, textTransform : 'uppercase', textAlign : 'center'}}
                        >Продолжить</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
        </View>
        
    )

  }

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    },
    images: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems : 'center',
        height : '100%'
    },
    description: {
        textAlign : 'center',
        color : '#fff',
        fontWeight : '100'
    }, 
    nextBtn : {
        marginTop : 40,
        padding: 16,
        backgroundColor : '#BD006C',
        borderRadius : 45,
        width : '100%'
    }
});