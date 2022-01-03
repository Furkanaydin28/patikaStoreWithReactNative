import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        borderRadius: 10,
        margin: 5,
        padding: 5,
        width:Dimensions.get("window").width/2,
        flex:1,
    },
    image: {
        width:'100%',
        height:Dimensions.get("window").height/3,
        borderRadius:5,
        resizeMode:'contain',
    },
    title: {
        color:"black",
        fontSize: 18,
        fontWeight:"bold"
    },
    price: {
        color:"#8C8C8D",
        fontWeight:"bold",
    },
    instock:{
        color:"red"
    }

})
