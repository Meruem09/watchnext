import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex flex-1 items-center justify-center'>
        <Image className='size-10' tintColor='#fff' source={icons.person}/>
        <Text className='text-gray-500 text-base'>Profile</Text>
        <Text className='text-gray-400 text-base'>xyz</Text>
      </View>
    </View>
  )
}

export default profile