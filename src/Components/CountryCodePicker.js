import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import CountryPicker, { Flag } from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {
    moderateScale,
    moderateScaleVertical,
    width,
} from '../styles/responsiveSize';
function CountryCodePicker() {
    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');

    const onSelect = country => {
        setCountryFlag(country.cca2);
        setCountryCode(country.callingCode[0]);
    };
    return (
        <>
            <View style={style.countryview}>
                <CountryPicker
                    onSelect={onSelect}
                    visible={false}
                    countryCode={countryFlag}
                    withCallingCode={true}
                    withCallingCodeButton={countryCode}
                    withEmoji={true}
                    theme={{
                        onBackgroundTextColor: 'white',
                        backgroundColor: colors.themeColor
                    }}
                />

                <Image
                    source={imagePath.downwardArrow}
                    style={{
                        height: moderateScale(width / 32),
                        width: moderateScale(width / 32),
                        resizeMode: 'contain',
                        marginLeft: moderateScaleVertical(7),
                    }}
                />
            </View>
        </>
    );
}
const style = StyleSheet.create({
    countryview: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.sliderBGColor,
        borderRadius: moderateScale(10),
        marginRight: moderateScale(5),
        height: moderateScale(50),

        marginTop: moderateScaleVertical(32),

    },
});

export default CountryCodePicker;