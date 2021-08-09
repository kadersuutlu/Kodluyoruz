import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#cccccc',
       borderRadius: 10,
        margin: 10,
        padding:10,
    },
    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height / 4,
        width:'100%',
        borderRadius: 10,
    },
    title: {
        padding:5,
        fontWeight: 'bold',
        fontSize: 17,
    },
    price: {
        padding:5,
        color: '#444444',
        fontSize: 17,
    },
    stock: {
        marginBottom:50,
        padding:5,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inner_container:{
        padding:5,
    }
});