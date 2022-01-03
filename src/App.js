import React from "react";
import {StyleSheet, View, FlatList} from "react-native"
import Header from "./components/Header";
import Card from "./components/Card";
import storeData from "./store.json"


const App = () =>{
  const renderProduct = ({item})=> <Card products={item}/>;
  return (
      <View style={styles.container}>
        <Header/>
        <FlatList data={storeData} renderItem={renderProduct} numColumns={2} />
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white"
    }
})

export default App
