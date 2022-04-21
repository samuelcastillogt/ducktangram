import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, ActivityIndicator } from "@react-native-material/core";
import Post from './Post';
const PostContainer = () => {
    const [posts, setPosts] = useState()
    useEffect(async()=>{
        const response = await fetch("https://server-instagram.vercel.app/")
        const data = await response.json()
        setPosts(data)
        
    },[])

    return (
        <View style={style.container}>
            {
                 !posts && <ActivityIndicator size="large" color="grey" />
            }
            {
                posts && posts.map(item=> <Post image={item.image.url} 
                    key={item.usee[0].phone} 
                    name={item.usee[0].name.first} 
                    lastname={item.usee[0].name.last}
                    picture={item.usee[0].picture.medium}
                    />)
            }
        </View>
    );
};
const style = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default PostContainer;