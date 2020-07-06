import React, { Component } from 'react';
import { Right, Header, Left} from 'native-base';
import {
    Image,
} from 'react-native';

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';

class HeaderComponent extends Component {
    render() {
        return (
            // marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight

            <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0, backgroundColor: '#FFF9E6', paddingTop: 20 , height: 80}}>
                <Left>
                    <Image style={{ width: 70, height: 20, resizeMode: 'stretch', marginLeft: '10%' }} source={require('../assets/images/logo.png')} />
                </Left>
                <Right>
                   
                </Right>
            </Header>
        );
    }
}

export default withNavigation(HeaderComponent)