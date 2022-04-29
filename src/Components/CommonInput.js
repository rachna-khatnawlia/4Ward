//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

// create a component
const CommonInput = ({
    placeholderTxt,
    secureTextEntry, 
    inputContainer, input,
    onChangeTxt
}) => {
    return (
        <View style={{
            ...styles.inputContainer,
            ...inputContainer
        }}>
            <TextInput
                style={{...styles.input,...input}}
                placeholder={placeholderTxt}
                placeholderTextColor={colors.white}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeTxt}
            />
            <View style={styles.showBox}>
                {
                        <View></View>
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        flex:1,
        // width: moderateScale(328),
        backgroundColor: colors.inputColor,
        alignItems: 'center',
        borderRadius:moderateScale(8),
        marginVertical:moderateScale(12),
        marginHorizontal:moderateScale(23)
    },
    input: {
        height: moderateScale(48),
        marginVertical: moderateScaleVertical(5),
        paddingHorizontal: moderateScale(16),
        flex: 0.8,
        fontSize: textScale(14),
        fontFamily: fontFamily.barlowRegular
    },
    showBox: {
        height: moderateScale(48),
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: moderateScale(16),
        fontFamily: fontFamily.barlowRegular
    },
});

//make this component available to the app
export default CommonInput;
