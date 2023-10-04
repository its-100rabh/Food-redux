import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';

export default function CartIcon() {
    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
                <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(100, 125, 255,3)' }}>
                    <Text className="font-extrabold text-white text-lg">
                        3
                    </Text></View>
                <View className="p-2 px-4 rounded-full " style={{ backgroundColor: 'rgba(100, 125, 255,3)' }}>
                    <Text className="flex-1 text-center font-extrabold text-white text-lg">
                        View Cart
                    </Text>
                </View>
                <View className="p-2 px-4 rounded-full " style={{ backgroundColor: 'rgba(100, 125, 255,3)' }}>
                    <Text className="flex-1 text-center font-extrabold text-white text-lg">
                        $23
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}