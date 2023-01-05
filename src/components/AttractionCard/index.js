import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const AttractionCard = ({ title, imageSrc, subtitle }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/pin2.png')}
                />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default AttractionCard;
