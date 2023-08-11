import { SafeAreaView, View } from 'react-native';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import Welcome from '../components/welcome';
import SearchBar from '../components/searchBar';
import Category from '../components/category';
import Recommendation from '../components/recommendation';
import { categoryData, recommendData } from '../components/content/data/dataProps';


export default function Page() {
  return (
    <SafeAreaView>
      <Drawer.Screen 
        options={{
          headerTitle:"Home"
        }}
      />
      <View style={{paddingHorizontal:'5%', paddingTop:'5%'}}>
        <Welcome/>
        <SearchBar/>
        <Category categoryData={categoryData}/>
        <Recommendation recommendData={recommendData}/>
      </View>
    </SafeAreaView>
  ) 
}
