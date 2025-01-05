import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../../constants';

const SearchInput = ({ title, value, handleChangeText, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className="flex-row border-2 border-black-500 w-full h-16 px-4 rounded-2xl bg-black-100 focus:border-secondary items-center fspace-x-4">
    <TextInput 
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
    />

    <TouchableOpacity>
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
      />
    </TouchableOpacity>
    </View>
  )
}

export default SearchInput