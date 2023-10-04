import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants/dummy'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: !5
                }}
            >
                {
                    categories.map((category, index) => {
                        let isActive = category.id == activeCategory;
                        let btnClass = isActive ? 'p-1 shadow rounded-full bg-gray-500' : 'p-1 shadow rounded-full bg-gray-200';
                        let textClass = isActive ? 'font-sm font-bold text-black' : 'font-sm text-gray-500';
                        return (
                            <View key={index} className="flex justify-center items-center mx-4">
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(category.id)}
                                    className={btnClass}>
                                    <Image style={{ width: 55, height: 55 }}
                                        source={category.image} />

                                </TouchableOpacity>
                                <Text className={textClass} >{category.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}