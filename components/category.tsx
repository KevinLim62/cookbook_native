import { View, Text, TouchableOpacity, FlatList, Image, ImageSourcePropType } from 'react-native'

export interface categoryProps {
    id:string;
    title:string;
    image:ImageSourcePropType;
}

interface props {
    categoryData: categoryProps[]
}

const Category:React.FC<props> = ({
    categoryData,
}) => {
  return (
    <View className='flex w-full pb-6'>
       <View className='flex-row justify-between pb-3'>
        <Text className='text-lg font-bold text-slate-950'>Categories</Text>
        <TouchableOpacity onPress={() => {}}>
            <Text className='text-sm font-bold text-[#03C988]'>See all</Text>
        </TouchableOpacity>
       </View>
        <FlatList
            data={categoryData}
            renderItem={({ item }) => (
            <TouchableOpacity className='w-[105px] mr-3 py-2 bg-slate-100 rounded-lg'>
                <View className='w-full items-center text-center'>
                <Image source={item.image} resizeMode='cover' className='w-[45px] h-[45px] rounded-lg'/>
                    <Text className='text-sm font-medium text-gray-500'>{item.title}</Text>
                </View>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            horizontal
        />
    </View>
  )
}

export default Category