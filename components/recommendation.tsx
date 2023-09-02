import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'

interface recommendationProps {
    id:string;
    title:string;
    author:string;
    image:string;
}

export interface props {
    recommendData: recommendationProps[]
}

const Recommendation:React.FC<props> = ({
    recommendData,
}) => {
  return (
    <View className='flex w-full pb-6'>
       <View className='flex-row justify-between pb-3'>
        <Text className='text-lg font-bold text-slate-950'>Recommendation</Text>
        <TouchableOpacity onPress={() => {}}>
            <Text className='text-sm font-bold text-[#03C988]'>See all</Text>
        </TouchableOpacity>
       </View>
        {/* <FlatList
            data={recommendData}
            renderItem={({ item }) => (
                <Link href={{
                    pathname: "/recipes/[recipeId]",
                    params: { recipeId: item.id }
                    }}>
                    <View>
                        <TouchableOpacity className='w-[160px] h-[220px] mr-3 py-2 bg-slate-100'>
                            <Image source={{uri:`${item.image}`}} resizeMode='cover' className='w-full h-full rounded-lg'/>
                        </TouchableOpacity>
                        <Text className='text-base font-bold text-slate-950'>{item.title}</Text>
                        <Text className='text-sm font-medium text-gray-500'>{`By ${item.author}`}</Text>
                    </View>
                </Link>
            )}
            keyExtractor={item => item.id}
            horizontal
        /> */}
        {recommendData.map((item) => {
            return (
            <Link
                key={item.id}
                href={{
                pathname: "/recipes/[recipeId]",
                params: { recipeId: item.id }
                }}>
                <View>
                    <TouchableOpacity className='w-[160px] h-[220px] mr-3 py-2 bg-slate-100'>
                        <Image source={{uri:`${item.image}`}} resizeMode='cover' className='w-full h-full rounded-lg'/>
                    </TouchableOpacity>
                    <Text className='text-base font-bold text-slate-950'>{item.title}</Text>
                    <Text className='text-sm font-medium text-gray-500'>{`By ${item.author}`}</Text>
                </View>
            </Link>
            )
        })}
    </View>
  )
}

export default Recommendation