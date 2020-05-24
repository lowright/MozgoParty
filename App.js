import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Video from 'react-native-video';

export default class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      index : 0,
      data : [
        {
          id : '1',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38716/doY3BYVSRHkVqqj6.mp4'
        },
        {
          id : '2',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38720/JghUEXzlOM4crZf1.mp4'
        },
        {
          id : '3',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38721/obGUBevqU8tA3rc6.mp4'
        },
        {
          id : '5',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38722/CcZSoKHj4xwA1AS0.mp4'
        },
        {
          id : '5',
          url : 'https://mozgo-qiuz-materials.s3.amazonaws.com/38723/cHE6xKoWdjnbIzNQ.mp4'
        }
      ]
    }
  }



  render() {

    const {data, index} = this.state

    return (
      <Video
        key={index}
        source={{uri: `${data[index].url}`}}   
        style={styles.backgroundVideo} 
        onLoadStart={() => console.log('onLoadStart')}
        onProgress={() => console.log('onProgress')}
        onEnd={() => this.setState({index : index + 1})}
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
