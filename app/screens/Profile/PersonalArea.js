import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class PersonalArea extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../src/check.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
    };
    
    render() {
        return(
            <View style={styles.PersonalAreaWrapper}>
                <View style={styles.PersonAvatarImage}>
                    <Image
                        source = {require('../../src/PersonAvatar.png')}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            marginBottom: 29
                        }}
                    />
                </View>
                <View style={styles.PersonInfoWrapper}>
                    <Text style={styles.PersonInfoTitle}>Имя и фамилия</Text>
                    <Text style={styles.PersonInfoDesc}>Василий Петечкин</Text>
                </View>
                <View style={styles.PersonInfoWrapper}>
                    <Text style={styles.PersonInfoTitle}>Номер телефона</Text>
                    <Text style={styles.PersonInfoDesc}>+7 (992) 020-02-20</Text>
                </View>
                <View style={styles.PersonInfoWrapper}>
                    <Text style={styles.PersonInfoTitle}>E-mail</Text>
                    <Text style={styles.PersonInfoDesc}>vasyapetechkin@gmail.com</Text>
                </View>
                <View style={styles.PersonalActionButtonsWrapper}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('EditPersonalArea')}
                        style={styles.PersonalActionButton}
                    >
                        <Text style={styles.PersonalActionButtonText}>Изменить данные</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ChangePass')}
                        style={styles.PersonalActionButton}
                    >
                        <Text style={styles.PersonalActionButtonText}>Изменить пароль</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Shop')}
                        style={styles.PersonalActionButton}
                    >
                        <Text style={styles.PersonalLogoutButtonText}>Выйти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SettingsStack')}
                        style={styles.PersonalActionButton}
                    >
                        <Text style={styles.PersonalLogoutButtonText}>Настройки TEST</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    PersonalAreaWrapper : {
       paddingTop: 24,
       paddingHorizontal: 16,
       paddingBottom: 24
    },
    PersonInfoWrapper: {
        paddingHorizontal: 12,
        marginBottom: 32
    },
    PersonInfoTitle : {
        color: '#979797',
        fontSize: 12,
        lineHeight: 16,
    },
    PersonInfoDesc : {
        color: '#333333',
        fontSize: 16,
        lineHeight: 24
    },
    PersonalActionButtonsWrapper : {
        marginTop: 19
    },
    PersonalActionButton : {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DADADA',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5
    },
    PersonalActionButtonText : {
        color: '#333333',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    PersonalLogoutButtonText : {
        color: '#ED1C24',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})
