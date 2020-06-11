import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import ImagePicker from 'react-native-image-picker';

export const EditPersonalArea = props => {
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
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {}}
                    style={styles.PersonalActionButton}
                >
                    <View
                        style={styles.EditAvatarIcon}
                    >
                        <Image
                            source = {require('../../src/avatarEdit.png')}
                            style={{
                                width: 12,
                                height: 12
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.PersonInfoWrapper}>
                <Text style={styles.PersonInfoTitle}>Имя и фамилия</Text>
                <TextInput
                    style={styles.PersonInfoDesc}
                    placeholder={'Василий Петечкин'}
                    defaultValue={'Василий Петечкин'}
                />
            </View>
            <View style={styles.PersonInfoWrapper}>
                <Text style={styles.PersonInfoTitle}>Номер телефона</Text>
                <TextInput
                    style={styles.PersonInfoDesc}
                    keyboardType={'number-pad'}
                    placeholder={'+7 (992) 020-02-20'}
                    defaultValue={'+7 (992) 020-02-20'}
                />
            </View>
            <View style={styles.PersonInfoWrapper}>
                <Text style={styles.PersonInfoTitle}>E-mail</Text>
                <TextInput
                    style={styles.PersonInfoDesc}
                    placeholder={'vasyapetechkin@gmail.com'}
                    defaultValue={'vasyapetechkin@gmail.com'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PersonalAreaWrapper : {
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 24,

    },
    PersonAvatarImage : {
        position: 'relative',
        width: 80,
        height: 80,
        marginBottom: 30
    },
    PersonalActionButton : {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    EditAvatarIcon : {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.08)",
      shadowOffset: {
          width: 0,
          height: 0,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
       elevation: 11,
    },
    PersonInfoWrapper: {
        marginBottom: 30
    },
    PersonInfoTitle : {
        paddingHorizontal: 12,
        color: '#979797',
        fontSize: 12,
        lineHeight: 16,
    },
    PersonInfoDesc : {
        paddingHorizontal: 12,
        color: '#333333',
        fontSize: 16,
        lineHeight: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
})
