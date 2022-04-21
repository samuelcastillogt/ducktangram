import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import {AiOutlineHeart} from "react-icons/ai"
// import {FaRegComment} from "react-icons/fa"
// import {RiSendPlaneFill} from "react-icons/ri"
import HeaderPost from './HeaderPost';
const Post = (props) => {
    return (
        <View style={style.post}>
           <HeaderPost 
                        lastname={props.lastname} 
                        name={props.name}
                        picture={props.picture}
                        />
            <Image source={ {uri: props.image }} style={{ width: "100%", height: 200 }}/>
            {/* <View style={{fontSize: "1.6em"}}>
               <AiOutlineHeart style={{margin: "10px"}}/>
            <FaRegComment style={{margin: "10px"}}/>
            <RiSendPlaneFill style={{margin: "10px"}}/> 
            </View> */}
            
        </View>
    );
};
const style = StyleSheet.create({
    post:{
        borderWidth: 1,
        borderColor: "#dbdbdb",
        margin: 10,
        padding: 10,
        width: "90%"
    },
    picture: {
        backgroundColor: "red"
        
    }
})
export default Post;