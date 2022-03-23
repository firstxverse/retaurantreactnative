import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MENU } from '../shared/menu';

class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            menu: MENU
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render(){
        const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('../components/images/icon.jpg')}}
            />
            );
        
        };

        return (
            <FlatList
                data={this.state.menu}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    };
}

export default Directory;