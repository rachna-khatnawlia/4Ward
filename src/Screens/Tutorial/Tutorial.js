//import liraries
import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { height, moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import { introStyles } from './styles';
const slides = [
    {
        key: '1',
        image: imagePath.tutorialpic,
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
    },
    {
        key: '2',
        image: imagePath.tutorialpic,
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

    },
    {
        key: '3',
        image: imagePath.tutorialpic,
        title: 'Hendrerit vulputate sem',
        description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

    }
];

const Tutorial = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={introStyles.container}>
                <View style={introStyles.divideIntroArea}>
                    <Image source={item.image} style={introStyles.image} />
                </View>
                <View style={introStyles.divideIntroArea}>
                    <View>
                        <Text style={introStyles.tittle}>{item.title}</Text>
                    </View>

                    <View style={introStyles.textview}>
                        <Text style={introStyles.text}>{item.text}</Text>
                    </View>
                </View>
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                <Text style={introStyles.getStartStyle}>{strings.GET_STARTED}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={introStyles.mainDiv}>
            <SafeAreaView style={{ flex: 1 }}>
                <AppIntroSlider
                    data={slides}
                    renderItem={renderItem}
                    renderDoneButton={_renderDoneButton}
                    activeDotStyle={{
                        height: moderateScale(4),
                        width: moderateScale(40),
                        bottom: 4,
                        right: moderateScale(90),
                        backgroundColor: 'red',
                    }}
                    dotStyle={{
                        width: moderateScale(21),
                        height: moderateScale(4),
                        backgroundColor: colors.white,
                        bottom: 4,
                        right: moderateScale(90),
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

export default Tutorial;
