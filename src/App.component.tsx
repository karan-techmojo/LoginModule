import React from 'react';
import { View, Text } from 'react-native';
import GameSearch from './components/game-search/GameSearch.component';

const AppComponent = () => {
    return (
        <View className='flex-1 justify-center items-center' style={{ backgroundColor:'#0C161C' }} >
            <View className='flex mobile:hidden' >
                <Text className='text-white' >Hello World</Text>
            </View>
        </View>
    );
}
 
export default AppComponent;