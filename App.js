import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';

const App = () => {
    return (
        <SafeAreaView style={styles.safeView}>
            <Home />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeView: {
        flex: 1
    },
    view: {
        flex: 1
    }
});

export default App;
