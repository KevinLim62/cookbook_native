import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'

type Props = {}

const about = (props: Props) => {
  return (
    <SafeAreaView>
      <Drawer.Screen 
        options={{
          headerTitle:"About"
        }}
      />
    </SafeAreaView>
  )
}

export default about