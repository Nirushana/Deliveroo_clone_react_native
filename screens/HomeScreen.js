import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles';
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea} className='bg-white pt-5'>
            {/* Header Section */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-[18px]'>Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>

                <UserIcon size={35} color='#00CCBB' />
            </View>

            {/* Search */}

            <View className='flex-row items-center pb-2 space-x-2 mx-4 '>
                <View className='flex-row space-x-2 flex-1 bg-gray-200 p-2'>
                    <MagnifyingGlassIcon size={25} color='#00CCBB' />
                    <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' />
                </View>

                <AdjustmentsVerticalIcon size={25} color='#00CCBB' />
            </View>

            {/* Body */}

            <ScrollView className='bg-gray-100' contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Categories Section */}
                <Categories />
                {/* Featured Section */}
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen