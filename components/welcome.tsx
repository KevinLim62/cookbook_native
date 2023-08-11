import { Text, View, Image } from 'react-native'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <View className='flex flex-row justify-between w-full pb-6'>
        <View className='flex-col w-[65%]'>
            <Text className='text-sm font-medium text-gray-500'>
                Hello, JingYi
            </Text>
            <Text className='text-lg font-bold text-slate-950'>
            What would you like to cook today?
            </Text>
        </View>
        <Image source={{uri:'https://picsum.photos/200'}} resizeMode='cover' className='w-14 h-14 rounded-full'/>
  </View>
  )
}

export default Welcome
