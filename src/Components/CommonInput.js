//import liraries
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

// create a component
const CommonInput = ({
    placeholderTxt,
    secureTextEntry,
    inputContainer, input,
    onChangeTxt,
    value,
    editable,
    selectTextOnFocus,
    keyboardType
}) => {
    return (
        <View style={{
            ...styles.inputContainer,
            ...inputContainer
        }}>
            <TextInput
                style={{ ...styles.input, ...input }}
                placeholder={placeholderTxt}
                placeholderTextColor={colors.white}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeTxt}
                value={value}
                editable={editable}
                selectTextOnFocus={selectTextOnFocus}
                keyboardType={keyboardType}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: colors.inputColor,
        alignItems: 'center',
        borderRadius: moderateScale(8),
        marginVertical: moderateScale(12),
        marginHorizontal: moderateScale(23)
    },
    input: {
        height: moderateScale(48),
        marginVertical: moderateScaleVertical(5),
        paddingHorizontal: moderateScale(16),
        flex: 1,
        fontSize: textScale(14),
        fontFamily: fontFamily.barlowRegular
    },
});

//make this component available to the app
export default CommonInput;
