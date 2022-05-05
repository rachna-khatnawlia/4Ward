//import liraries
import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import { introStyles } from './styles';

//------------------------INTRO DATA
const slides = [
    {
        key: '1',
        image: imagePath.tutorialpic,
        title: strings.TUT_TITLE,
        description: strings.TUT_DES
    },
    {
        key: '2',
        image: imagePath.tutorialpic,
        title: strings.TUT_TITLE,
        description: strings.TUT_DES

    },
    {
        key: '3',
        image: imagePath.tutorialpic,
        title: strings.TUT_TITLE,
        description: strings.TUT_DES
    }
];

const Tutorial = ({ navigation }) => {
    const data = () => {
        actions.Intro(false);
      };

    const renderItem = ({ item }) => {
        // -----------------------Render View--------------------
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
                        <Text style={introStyles.text}>{item.description}</Text>
                    </View>
                </View>
            </View>
        );
    };

    //-------------------Next and get started----------------
    const _renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={data}>
                <Text style={introStyles.getStartStyle}>{strings.GET_STARTED}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={introStyles.mainDiv}>
            <SafeAreaView style={{ flex: 1 }}>
                {/* --------------App Intro Slider---------------- */}
                <AppIntroSlider
                    data={slides}
                    renderItem={renderItem}
                    renderDoneButton={_renderDoneButton}
                    activeDotStyle={introStyles.activeDotStyle}
                    dotStyle={introStyles.dotStyle}
                />
            </SafeAreaView>
        </View>
    );
};

export default Tutorial;
