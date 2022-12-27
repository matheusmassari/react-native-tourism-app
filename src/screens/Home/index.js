import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text={'Where do'} customStyles={{ fontWeight: 'normal' }} />
                <Title text={'You want to go'} />
            </View>
        </SafeAreaView>
    );
};

export default Home;
