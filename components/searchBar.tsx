import { View, Text, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View className='flex w-full pb-6'>
      <View className='flex-row rounded-xl bg-slate-100 overflow-hidden px-[10px] py-[15px] space-x-2'>
      <AntDesign name="search1" size={25} color="gray"/>
        <TextInput
            value=''
            onChange={() => {}}
            placeholder='Search any recipes'
            className='w-[75%]'
        />
        <View className='border-r-2 border-slate-200'></View>
        <AntDesign name="filter" size={25} color="gray"/>
      </View>
    </View>
  )
}

export default SearchBar