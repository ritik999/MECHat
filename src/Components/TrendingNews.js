import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import API_KEY from '../../config/config';
import { useNavigation } from '@react-navigation/native';

const TrendingNews = () => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        Api_Call();
    }, []);

    const Api_Call = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);

            const realData = await response.json();
            setNews(realData.articles);
        } catch (error) {
            console.log(error);
        }
    }

    const navigation = useNavigation();

    return (
        <View>
            {
                news.length === 0 ? (<ActivityIndicator color="black" size="large" />) : (
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            news.map((element, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => navigation.navigate("WebView", { url: element.url })}>
                                        {
                                            element.urlToImage ? (
                                                <View style={{ margin: 10 }}>
                                                    <Image source={{ uri: `${element.urlToImage}` }} style={{ width: 200, height: 200, borderRadius: 10 }} />
                                                    <Text style={{ width: 200, textAlign: 'justify' }}>{element.title}</Text>
                                                </View>
                                            ) : null
                                        }
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({})
export default TrendingNews
