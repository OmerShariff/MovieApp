import { View, Text, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'


import { StatusBar } from 'expo-status-bar';

// import { useNavigation } from '@react-navigation/native';




const ios = Platform.OS=='ios';
export default function HomeScreen() {
    
    return(
        <View className="flex-1 bg-neutral-50">
        {/* search bar */}
        <SafeAreaView className={ios? "-mb-2": "mb-3"}>
        <StatusBar style="light" />
    <View className="flex-row justify-between items-center mx-4">
    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="black" />
    <Text className="text-black text-3xl font-bold">
    TheMovieApp
</Text>
            
          </View>
        </SafeAreaView>
       
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >

            {/* Trending Movies Carousel */}
            { trending.length>0 && <TrendingMovies data={trending} /> }
        </ScrollView>
    </View>
    )
}