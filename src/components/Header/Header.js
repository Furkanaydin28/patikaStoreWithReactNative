import React from "react";
import {Text, TextInput, View} from "react-native";
import styles from "./Header.style"

const Header = ()=>{
    return(
        <View>
            <View>
                <Text style={styles.headerText}>PATIKASTORE</Text>
            </View>
            <TextInput style={styles.input} placeholder="Ara..."></TextInput>
        </View>
    )
}

export default Header
