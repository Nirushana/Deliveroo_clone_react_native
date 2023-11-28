import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView>
        {/* Catogory Card */}
        <CategoryCard />
    </ScrollView>
  )
}

export default Categories