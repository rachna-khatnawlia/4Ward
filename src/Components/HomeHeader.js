//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { commonStyle } from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale, width } from '../styles/responsiveSize';

// create a component
const HomeHeader = ({
    logoImage,
    locationImage,
    headerText
}) => {
    return (
        <View style={styles.homeHeaderBox}>
            <View style={commonStyle.rowSpaceBetween}>
                <View style={{ alignSelf: 'center' }}>
                    {
                        logoImage ?
                            <Image source={imagePath.brandName} />
                            :
                            <Text style={styles.headerTxtStyle}>{headerText}</Text>
                    }
                </View>
                <View>
                    {
                        locationImage ?
                            <Image source={imagePath.location} />
                            :
                            null
                    }
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    homeHeaderBox: {
        backgroundColor: colors.themeColor,
        height:moderateScale(60),
        // paddingBottom:moderateScale(15),
        justifyContent:'center',
        paddingHorizontal:width/15
    },
    headerTxtStyle: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    }
});

//make this component available to the app
export default HomeHeader;
