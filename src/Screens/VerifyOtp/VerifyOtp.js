//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../Components/ButtonComponent';
import CommonInput from '../../Components/CommonInput';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

// create a component
const VerifyOtp = ({ navigation, route }) => {
    const phoneNumber = route?.params?.phone;
    const phoneCode = route?.params?.code

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <SafeAreaView>
                <BackWardArrow />
                <View style={commonStyle.welcome}>
                    <Text style={styles.showNo}>{strings.SEND_OTP} {phoneCode}  {phoneNumber}</Text>
                    <Text style={styles.editNo}>{strings.EDIT_OTP_NO}</Text>
                </View>

                <View style={styles.otpPassword}>
                    <View style={styles.flexView}>
                        <CommonInput
                            secureTextEntry={false}
                            inputContainer={{ width: moderateScale(50) }}
                            input={{ paddingHorizontal: 12 }}
                        />
                    </View>
                    <View style={styles.flexView}>
                        <CommonInput
                            secureTextEntry={false}
                            inputContainer={{ width: moderateScale(50) }}
                            input={{ paddingHorizontal: 12 }}
                        />
                    </View>
                    <View style={styles.flexView}>
                        <CommonInput
                            secureTextEntry={false}
                            inputContainer={{ width: moderateScale(50) }}
                            input={{ paddingHorizontal: 12 }}
                        />
                    </View>
                    <View style={styles.flexView}>
                        <CommonInput
                            secureTextEntry={false}
                            inputContainer={{ width: moderateScale(50) }}
                            input={{ paddingHorizontal: 12 }}
                        />
                    </View>

                </View>

                <Text style={styles.resendeOtp}>{strings.REESEND_CODE}</Text>



                <View style={styles.loginContainer}>
                    <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                            <Button
                                ButtonText={strings.VERIFY}
                                btnStyle={{ marginVertical: moderateScale(12) }}
                                onPress={() => navigation.navigate(navigationStrings.LOGIN1)}
                            />
                        </View>
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
    otpPassword: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(24),
        marginBottom: moderateScale(15)
    },

    flexView: {
        flex: 0.15,
        marginRight: moderateScale(30),
    },

    showNo: {
        fontFamily: fontFamily.barlowBold,
        fontSize: textScale(23),
        color: colors.white
    },
    editNo: {
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
        marginVertical: moderateScaleVertical(10)
    },
    resendeOtp: {
        marginHorizontal: moderateScale(24),
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
    }

});
//make this component available to the app
export default VerifyOtp;