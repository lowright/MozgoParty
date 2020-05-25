import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import GamesProtoBuf from './app/components/GamesProtoBuf'



const GAMES =  ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({value, setValue});
    const renderCell = ({index, symbol, isFocused}) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [
                        0, 1
                    ],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR]
                })
                : animationsColor[index].interpolate({
                    inputRange: [
                        0, 1
                    ],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR]
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS]
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [
                            0, 1
                        ],
                        outputRange: [0.2, 1]
                    })
                }
            ]
        };

        setTimeout(() => {
            animateCell({hasValue, index, isFocused});
    }, 0);

        return (
            <AnimatedText
                key={index}
                style={[styles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused
                    ? <Cursor/>
                    : null)}
            </AnimatedText>
        );
    };
    const applyCode = async () => {
        
        const navigationProps = navigation.state.params;
        const settings = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone : navigationProps.phone,
            code : value
          })
        };
        try {
          const data = await fetch(`https://infinite-beyond-48165.herokuapp.com/api/v1/checksmscode`, settings);
          const json = await data.json()
          if(JSON.stringify(data.status) === "400"){
            await navigation.navigate('Registration', {phone : navigationProps.phone})
          } else{
            await AsyncStorage.setItem('userToken', JSON.stringify(json.access_token));
            await navigation.navigate('User');
          }
        } 
        catch (error) { alert(error) }
    }

    return (
        <SafeAreaView style={styles.root}>
            <Image style={styles.icon} source={source}/>
            <Text style={styles.subTitle}>
                Введите код подтверждения{'\n'}
                отправленый Вам
            </Text>

            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                renderCell={renderCell}
            />
            <TouchableOpacity onPress={() => applyCode()} style={styles.techBtn}>
                <Text style={styles.resendCode}>
                    Отправить код 
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default class App extends Component{

  render() {

    return (
      
      <GamesProtoBuf
        jsonGames="https://party-games.mozgo.com/YW9ozMWjl6"
      />
     
    )

  }

}


const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});