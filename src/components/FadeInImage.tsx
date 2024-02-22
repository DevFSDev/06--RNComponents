import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { styles } from '../../android/app/src/theme/appTheme';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(false);
    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }
    return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
            {
                isLoading && <ActivityIndicator style={{position:'absolute'}} color="#5856D6" size={30}/>
            }
            <Animated.Image source={{ uri }} style={{...style as any, opacity}} onLoadEnd={finishLoading} />
        </View>

    )
}
