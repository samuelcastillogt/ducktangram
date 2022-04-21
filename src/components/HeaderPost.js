import React from 'react';
import { View, Text, Image } from 'react-native';

const HeaderPost = (props) => {

    return (
        <View style={{
            padding: 10,
        }}>
            <Image source={{uri: props.picture}} style={{width: 50, height: 50 ,borderRadius: 50}}/>
            <Text>{props.name} {props.lastname}</Text>
        </View>
    );
};

export default HeaderPost;