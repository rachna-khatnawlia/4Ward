//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import CountryCodePicker from '../../Components/CountryCodePicker';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const SignUp = ({ navigation }) => {
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
                    {/* -------------First Name & Last Name--------------- */}
                    <View style={styles.TwoInputFields}>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.FIRST_NAME}
                                secureTextEntry={false}
                                inputContainer={{ marginRight: moderateScale(15) }}
                            />
                        </View>
                        <View style={{ flex: 0.5, }}>
                            <CommonInput
                                placeholderTxt={strings.LAST_NAME}
                                secureTextEntry={false}
                                inputContainer={{ marginLeft: moderateScale(0) }}
                            />
                        </View>
                    </View>

                    {/* -------------Email Field--------------- */}
                    <CommonInput
                        placeholderTxt={strings.EMAIL}
                        secureTextEntry={false}
                    />

                    {/* -------------Phone Input--------------- */}
                    <View style={commonStyle.phoneInputBox}>
                        <View style={commonStyle.countryPickerBg}>
                            <CountryCodePicker />
                        </View>
                        <View style={{ flex: 0.7, alignItems: 'flex-end',}}>
                            <CommonInput
                                placeholderTxt={strings.MOBILE_NUMBER}
                                inputContainer={{ marginRight:moderateScale(0),}}
                            />
                        </View>
                    </View>

                    {/* ------------------Next Button----------------- */}
                    <KeyboardAvoidingView>
                        <Button
                            ButtonText={strings.NEXT}
                            btnStyle={{ marginVertical: moderateScale(12) }}
                            onPress={() => navigation.navigate(navigationStrings.VERIFY_OTP)}
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
    }
});
//make this component available to the app
export default SignUp;