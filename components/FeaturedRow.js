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
        <Text className="text-l[13.5px] px-4 text-gray-500">{description}</Text>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {/* Restaurant Cards */}
            <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={{}}
            long={20}
            lat={10}
            />

<RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={{}}
            long={20}
            lat={10}
            />

<RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={{}}
            long={20}
            lat={10}
            />
        </ScrollView>
        </View>
    )
}

export default FeaturedRow