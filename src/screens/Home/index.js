import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../mock_data/attractions.json';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Popular');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <Title
                            text={'Aonde'}
                            customStyles={{ fontWeight: 'normal' }}
                        />
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
                    </>
                }
                keyExtractor={(item) => String(item?.id)}
                renderItem={({ item }) => (
                    <AttractionCard
                        title={item.name}
                        subtitle={item.city}
                        imageSrc={item.images?.length && item.images[0]}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default Home;
