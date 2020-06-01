import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class CardGameScreen  extends Component{

  render() {

    return (
      
      <View style={styles.container}>

        <View style={styles.headerGames}>
            <Image
                source={require('../../src/game.png')}
                style={styles.logo}
            />

            <Text style={{color : "#333333", fontSize : 18, fontWeight : 'bold'}}>Кино и Музыка. Эпоха  VHS</Text>
        </View>

        <View style={styles.aboutGame}>

            <Text style={{color : "#BD006C", fontSize : 12, fontWeight : 'bold', marginRight : 24}}>300 ₽</Text>

            <Text style={{color : "#333", fontSize : 12, fontWeight : 'bold', marginRight : 24}}>122 Мб</Text>

            <Text style={{color : "#333", fontSize : 12, fontWeight : 'bold', marginRight : 24}}>12+</Text>

            <TouchableOpacity
                style={{flexDirection : 'row', alignItems : 'center'}}
            >
                <Image
                    source={require('../../src/like.png')}
                    style={
                        {
                            width : 20.5,
                            height : 18,
                            marginRight : 5
                        }
                    }
                />
                <Text>В избранное</Text>
            </TouchableOpacity>
        </View>
            

        <TouchableOpacity
            style={styles.btnAuth}
        >
            <Text style={{textAlign : 'center', color : '#fff', fontSize : 14}}>
                ДОБАВИТЬ В КОРЗИНУ
            </Text>
        </TouchableOpacity>

        <View style={styles.description}>
            <Text style={{fontSize : 14, fontWeight : 'bold', marginBottom : 10}}>Описание</Text>
            <Text style={{fontSize : 12, fontWeight : '200', marginBottom : 10}}>
                Самое культовое и легендарное из нашего «кассетного» прошлого! 
                От Терминатора и Queen до Брата и Руки Вверх.
            </Text>
            <TouchableOpacity
                style={styles.categor}
            >
                <Text style={{textAlign : 'center', color : '#333333', fontSize : 12}}>
                    Топ-5
                </Text>
            </TouchableOpacity>
        </View>


      </View>
     
    )

  }

}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 16,
        paddingVertical : 16
    },
    logo: {
        width : 94,
        height : 94,
        borderRadius : 5,
        marginRight : 10
    },
    btnAuth : {
        backgroundColor : '#0B2A5B',
        padding : 16,
        borderRadius : 5
    },
    headerGames : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    aboutGame : {
        marginVertical : 30,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',

    },
    categor : {
        backgroundColor : 'rgba(255, 206, 66, 0.5)',
        width : 60,
        padding : 6,
        borderRadius : 24
    },
    description : {
        marginVertical : 30
    }
})