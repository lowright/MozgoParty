import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
// import BottomQuestionNavigation from './app/components/BottomQuestionNavigation'
export default class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
     index : 0,
      data : { 
        '0' : {
          id : '1',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38716/doY3BYVSRHkVqqj6.mp4'
        },
        '1' : {
          id : '1',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38716/doY3BYVSRHkVqqj6.mp4'
        },
      }
    }
  }



  render() {

    return (
      // <Video
      //   key={index}
      //   source={{uri: `${data[index].url}`}}   
      //   style={styles.backgroundVideo} 
      //   onLoadStart={() => console.log('onLoadStart')}
      //   onProgress={() => console.log('onProgress')}
      //   onEnd={() => this.setState({index : index + 1})}
      // />
      <WebView source={{ uri: 'https://party-games.mozgo.com/YW9ozMWjl6' }} />
     
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
