import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';
import API_KEY from '../../config/config';


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const HomeScreen = ({navigation}) => {

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

  return (
    <>
    <View>
        <Categories/>
        <TrendingNews />
      {/* <Text>HomeScreen</Text> */}
    </View>
    <View style={{ alignItems: "center" }}>
            {
                news.length === 0 ? (<ActivityIndicator size="large" color="black" style={{ height: deviceHeight, width: deviceWidth, justifyContent: "center", alignItems: "center" }} />) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            news.map((ele, index) => {
                                return (
                                    ele.urlToImage ? (
                                        <TouchableOpacity key={index} onPress={()=>navigation.navigate("WebView",{url:ele.url})}>
                                            <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#fff", borderRadius: 10, width: deviceWidth - 30, marginVertical: 7 }}>
                                                <Image source={{ uri: `${ele.urlToImage}` }} style={{ height: 100, width: 100, borderRadius: 10 }} />
                                                <Text style={{ width: deviceWidth - 130, paddingLeft: 10, paddingTop: 5 }}>{ele.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ) : null
                                )
                            })
                        }
                    </ScrollView>
                )
            }
        </View>
    </>
  )
}


const styles = StyleSheet.create({})
export default HomeScreen;