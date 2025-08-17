import { View, Text, Image} from 'react-native'
import { icons } from '@/constants/icons'
import React from 'react'

const saved = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex flex-1 items-center justify-center'>
        <Image className='size-10' tintColor='#fff' source={icons.save}/>
        <Text className='text-gray-500 text-base'>Save</Text>
      </View>
    </View>
  )
}

export default saved