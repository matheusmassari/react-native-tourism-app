import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        marginRight: 16,
        borderWidth: 1,
        padding: 4,
        borderColor: '#e2e2e2',
        borderRadius: 15
    },
    image: {
        width: (width - 96) / 2,
        height: 120,
        borderRadius: 15
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '300',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginLeft: 6
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 4
    }
});

export default styles;
