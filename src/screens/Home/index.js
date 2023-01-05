import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Popular');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text={'Aonde'} customStyles={{ fontWeight: 'normal' }} />
                <Title text={'Você quer ir'} />
                <Title
                    text={'Explore Atrações'}
                    customStyles={styles.subtitle}
                />
                <Categories
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                    categories={[
                        'All',
                        'Popular',
                        'Historical',
                        'Random',
                        'Recommended',
                        'Exclusive',
                        'Trending',
                        'New'
                    ]}
                />
                <View style={styles.row}>
                    <AttractionCard
                        title={'Pão de Açúcar'}
                        subtitle={'Rio de Janeiro'}
                        imageSrc={
                            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        }
                    />
                    <AttractionCard
                        title={'Praia Niterói'}
                        subtitle={'Niterói'}
                        imageSrc={
                            'https://images.unsplash.com/photo-1596718157663-e75931daf0b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
