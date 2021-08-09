import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import styles from './ProductsCard.style';

const ProductsCard = ({ products }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.stock}>{products.inStock === true ? '' : 'Stokta Yok'}</Text>
            </View>
        </View>
    )
}




export default ProductsCard;