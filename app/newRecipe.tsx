import { View, Text, SafeAreaView } from 'react-native'
import { Tabs } from 'expo-router/tabs';

type Props = {}

const newRecipe = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>
        New Recipe
      </Text>
    </SafeAreaView>
  )
}

export default newRecipe