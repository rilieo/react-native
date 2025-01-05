import { View, Image, Text } from 'react-native'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

import { images } from '../../constants'

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-white mt-2 text-center font-psemibold">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">
        {subtitle}
      </Text>

      <CustomButton 
        title="Create video"
        handlePress={() => router.push('/create')}
        containerStyles="w-full my-5"
      />
    </View>
  )
}

export default EmptyState