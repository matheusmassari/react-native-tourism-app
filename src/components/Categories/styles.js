import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    categoryItem: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 2
    },
    selected: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000'
    },
    itemContainer: {
        marginRight: 17,
        marginVertical: 14
    },
    selectedItemContainer: {
        borderBottomColor: '#4681a3',
        borderBottomWidth: 2
    }
});

export default styles;
