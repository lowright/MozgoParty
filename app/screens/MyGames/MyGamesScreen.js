import React from 'react'
import { View, Text } from 'react-native'

import GameListItem from '../../components/GameListItem'

export  default class MyGamesScreen extends React.Component {

    render() {
        return(
            <>
                <GameListItem
                    press={() => this.props.navigation.navigate('LikeScreen')}
                />
                <GameListItem
                    press={() => this.props.navigation.navigate('LikeScreen')}
                />
                <GameListItem
                    press={() => this.props.navigation.navigate('LikeScreen')}
                />
                <GameListItem
                    press={() => this.props.navigation.navigate('LikeScreen')}
                />
                <GameListItem
                    press={() => this.props.navigation.navigate('LikeScreen')}
                />
            </>
        )
    }

}