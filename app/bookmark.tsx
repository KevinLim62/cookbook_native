import { View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import Tabs from 'expo-router/tabs';

type Props = {}

const bookmark = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>
        Your favourited recipes
      </Text>
    </SafeAreaView>
  )
}
  
export default bookmark