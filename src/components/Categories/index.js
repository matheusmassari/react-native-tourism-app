import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item;
                return (
                    <TouchableOpacity
                        onPress={() => {
                            onCategoryPress(item);
                        }}
                        style={[
                            styles.itemContainer,
                            selected && styles.selectedItemContainer
                        ]}>
                        <Text
                            style={[
                                styles.category,
                                selected && styles.selectedCategory
                            ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default React.memo(Categories);
