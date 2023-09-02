import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router/src/exports'
import { retrieveRecipeById } from '../../components/action/retrieveRecipeById';

type Props = {}

export default async function Page(){
    const { recipeId } = useLocalSearchParams();
    const recipe = await retrieveRecipeById(recipeId);

    if(!recipe) return null;

    return (
    <Text>
        Recipe name {recipe.title}
    </Text>
    )
}