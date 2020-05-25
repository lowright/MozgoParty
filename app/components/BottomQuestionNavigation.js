import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

export const BottomQuestionNavigation = ({title}) => {
    return(
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default BottomQuestionNavigation

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-between',
        
        flexDirection : 'row',
        width : '100%',
        paddingHorizontal : 30
    }
})