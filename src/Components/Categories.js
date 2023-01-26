import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Category = ["Entertainment", "Business", "Politics", "Health", "Technology", "Sports"];
const Categories = () => {
    const navigation=useNavigation();
    return (
        <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    Category.map((element, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={()=>navigation.navigate("GetNews",{element})}>
                                <View>
                                    <Text style={{ padding: 10, borderWidth: 1, borderColor: "black", fontSize: 19, margin: 10, borderRadius: 10 }}>{element}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default Categories
