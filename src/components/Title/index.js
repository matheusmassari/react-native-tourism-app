import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Title = ({ text, customStyles }) => {
    return <Text style={[styles.title, customStyles]}>{text}</Text>;
};

export default Title;
