import React from "react"
import {Image, Text, View} from "react-native"
import styles from "./Card.style"

const Card = ({products}) => {
    const checkStock= (stock)=>{
        if (!stock) {
            return  "Stokta Yok";
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.imgURL}}/>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.instock}>{checkStock(products.inStock)}</Text>
        </View>
    )
}

export default Card
