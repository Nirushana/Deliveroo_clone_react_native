import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs px-4 text-gray-500">{description}</Text>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {/* Restaurant Cards */}
            <RestaurantCard />
        </ScrollView>
        </View>
    )
}

export default FeaturedRow