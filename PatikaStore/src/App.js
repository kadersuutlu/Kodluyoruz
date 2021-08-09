/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { TextInput, FlatList, SafeAreaView, View, Text,StyleSheet } from 'react-native';
import ProductsCard from './components/Card/ProductsCard';

import products_data from './products.json';

function App() {
    const renderProducts=({item})=><ProductsCard products={item}/>;
    return (
        <SafeAreaView>
            <Text style={styles.title}>PATIKASTORE</Text>
            <View>
                <TextInput
                style={styles.input}
                placeholder='Ara...'
               returnKeyType='search'
                />
            </View>
            <FlatList
            horizontal={false}
            numColumns={2}
            data={products_data}
            renderItem={renderProducts}
            />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white',
    marginTop:10,
},
title:{
    marginLeft:10,
    fontSize:30,
    fontWeight:'bold',
    color:'purple',
},
input:{
    backgroundColor:'#cccccc',
    margin:10,
    borderRadius:10,
},
})

export default App;
