import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { GALLERY } from '../shared/gallery';

function RenderItem({item}){
    if (item){
        return(
            <Card
                featuredTitle={item.imageName}
                image={require('./images/icon.jpg')}
            >
                <Text style ={{margin:10}}>
                    {item.imageCap}
                </Text>
            </Card>    
        );
    }
    return <View />;
}

class Home extends Component{
        constructor(props){
            super(props);
            this.state = {
                gallery: GALLERY
            };
        }
        static navigationOptions = {
            title: 'Home'
        }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.gallery.filter(gallery => gallery.featured)[0]}
                    />
                <RenderItem
                    item={this.state.gallery.filter(gallery => gallery.featured)[0]}
                    />
                <RenderItem
                    item={this.state.gallery.filter(gallery => gallery.featured)[0]}
                    />
            </ScrollView>
        );
    }
}

export default Home;