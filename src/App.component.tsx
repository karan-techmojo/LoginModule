import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

const AppComponent = () => {
    const {
        width,
    } = useWindowDimensions();

    return (
        <View className='flex-1 justify-center items-center' >
            <Text>Width: {width}</Text>
        </View>
    );
}
 
export default AppComponent;