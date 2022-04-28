//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const SetPassword = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow />

                {/* -------------Welcome Page Text--------------- */}
                <View style={commonStyle.welcome}>
                    <Text style={commonStyle.welcomeHeading}>{strings.CR_NW_ACCOUNT}</Text>
                    <Text style={commonStyle.welcomeDes}>{strings.CR_NW_ACCOUNT_TEXT}</Text>
                </View>

                <View style={styles.loginContainer}>
                    {/* -------------Password Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.PASSWORD}
                        secureTextEntry={true}
                    />
                    {/* -------------Confirm Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.CFRM_PASSWORD}
                        secureTextEntry={true}
                    />
                    {/* ----------------------Next Button----------------- */}
                    <KeyboardAvoidingView>
                        <Button
                            ButtonText={strings.GET_STARTED}
                            btnStyle={{ marginVertical: moderateScale(12) }}
                        />
                    </KeyboardAvoidingView>
                </View>

            </SafeAreaView>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    TwoInputFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(27),
        justifyContent: 'space-between',
    }
});
//make this component available to the app
export default SetPassword;