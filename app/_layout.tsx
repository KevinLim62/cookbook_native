import { Tabs } from 'expo-router/tabs';
import { Feather } from '@expo/vector-icons'; 
import { Pressable } from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableOpacity, View, Text } from 'react-native';

interface tabArrProps {
  name:string;
  route:string;
  activeIcon: React.ReactNode;
  inActiveIcon: React.ReactNode;
}

const tabArr: tabArrProps[] = [
  {
    name:"index",
    route:"/",
    activeIcon:<Feather name="home" size={25} color="blue" />,
    inActiveIcon:<Feather name="home" size={25} color="black" />,
  },
  {
    name:"search",
    route:"/search",
    activeIcon:<Feather name="search" size={25} color="blue" />,
    inActiveIcon:<Feather name="search" size={25} color="black" />,
  },
  {
    name:"newRecipe",
    route:"/newRecipe",
    activeIcon:<Feather name="plus" size={25} color="blue" />,
    inActiveIcon:<Feather name="plus" size={25} color="black" />,
  },
  {
    name:"bookmark",
    route:"/bookmark",
    activeIcon:<Feather name="bookmark" size={25} color="blue" />,
    inActiveIcon:<Feather name="bookmark" size={25} color="black" />,
  },
  {
    name:"profile",
    route:"/profile",
    activeIcon:<Feather name="user" size={25} color="blue" />,
    inActiveIcon:<Feather name="user" size={25} color="black" />,
  },
]

// const customNewRecipeButton = () => (
//   <TouchableOpacity className='absolute w-full justify-center items-center bottom-10'>
//     <View className='w-20 h-20 rounded-full bg-green-400'>
//       <Text>Hi</Text>
//     </View>
//   </TouchableOpacity>
// )

export default function Layout() {
  return (
    <Tabs>
      {tabArr.map((tab,index) => {
        return (
          <Tabs.Screen
            key={index}
            name={tab.name}
            options={{
              tabBarStyle:{
                height:90,
              },
              tabBarIconStyle:{
                top:15,
              },
              headerShown:false,
              tabBarShowLabel:false,
              tabBarIcon:(({focused}) => (
                focused? tab.activeIcon : tab.inActiveIcon 
              )),
              href:tab.route
            }}
          />
        )
      })}
    </Tabs>
  );
}