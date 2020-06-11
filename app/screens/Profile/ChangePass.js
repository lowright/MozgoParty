import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";

export const ChangePass = props => {
    return(
        <View style={styles.ChangePassWrapper}>
            <View style={styles.ChangePassInputWrapper}>
                <Text style={styles.ChangePassDecorText}>Текущий пароль</Text>
                <TextInput
                    style={styles.PassInput}
                    secureTextEntry={true}
                    value={{}}
                />
            </View>
            <View style={styles.ChangePassInputWrapper}>
                <Text style={styles.ChangePassDecorText}>Новый пароль</Text>
                <TextInput
                    style={styles.PassInput}
                    secureTextEntry={true}
                    value={{}}
                />
            </View>
            <View style={styles.ChangePassInputWrapper}>
                <Text style={styles.ChangePassDecorText}>Повторите пароль</Text>
                <TextInput
                    style={styles.PassInput}
                    secureTextEntry={true}
                    value={{}}
                />
            </View>
            <View style={styles.ForgotPassWrapper}>
                <TouchableOpacity
                    onPress={()=>{}}
                    activeOpacity={0.9}
                >
                    <Text style={styles.ForgotPassText}>Забыли пароль?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChangePassWrapper : {
        paddingHorizontal: 16,
        paddingVertical: 29
    },
    ChangePassInputWrapper : {
        position: 'relative',
        marginBottom: 30,
        justifyContent: 'flex-end'
    },
    ChangePassDecorText : {
        fontSize: 16,
        lineHeight: 24,
        color: '#979797',
        position: 'absolute',
        top: 19,
        left: 12,
    },
    ChangePassDecorTextActive : {
        top: 0,
        fontSize: 12,
        lineHeight: 16,
    },
    PassInput : {
        paddingHorizontal: 12,
        paddingTop: 19,
        paddingBottom: 6,
        borderBottomWidth: 1,
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
        borderBottomColor: 'rgba(0, 0, 0, 0.38)'
    },
    ForgotPassWrapper : {
        marginTop: 11,
        alignItems: 'center'
    },
    ForgotPassText : {
        fontSize: 12,
        lineHeight: 15,
        color: '#0B2A5B',
        textDecorationLine: 'underline'
    }
})
