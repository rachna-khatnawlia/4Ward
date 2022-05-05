//import liraries
import React, { useState } from 'react';
import { styles } from './style';
import { View, Text, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../Components/ButtonComponent';
import BackWardArrow from '../../Components/GoBackArrowComponent';
import PasswordInput from '../../Components/PasswordInput';
import strings from '../../constants/lang';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';

// create a component
const SetPassword = ({ navigation }) => {
    const userData = useSelector(state => state.UserStatus.userLoginState);
    console.log("userDetails on updatepassword page", userData, userData?.id, userData?.password);
    //-------------------------------Update Password data-------------------------------------
    const [UpdatePasswordData, setUpdatePasswordData] = useState({
        currentPass: '',
        pass: '',
        cPass: '',
    })

    const { currentPass, pass, cPass } = UpdatePasswordData;
    const updateState = (data) => setUpdatePasswordData(() => ({ ...UpdatePasswordData, ...data }))

    const UpdatePassword = async () => {
        if (pass.length <= 4) {
            alert("Password length Must be atleast 4")
        } else {
            if (pass === cPass) {
                let updateAPIdata = {
                    user_id: userData?.id,
                    current_password: currentPass,
                    password: pass
                }
                console.log("Updata Password data : ", updateAPIdata)
                try {
                    const res = await actions.UpdatePassword(updateAPIdata)
                    console.log("Update api res_+++++", res)
                    navigation.goBack();
                    alert("Password Updated successfully....!!!")
                } catch (error) {
                    console.log("error raised", error)
                    alert(error?.message)
                }
            } else {
                alert("Password and confirm Password must be same");
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <ScrollView>

                {/* -------------Backward Arrow--------------- */}
                <BackWardArrow />

                {/* -------------Welcome Page Text--------------- */}
                <View style={commonStyle.welcome}>
                    <Text style={commonStyle.welcomeHeading}>{strings.SET_PASSWORD}</Text>
                    <Text style={commonStyle.welcomeDes}>{strings.SET_PASSWORD_TXT}</Text>
                </View>

                <View style={styles.loginContainer}>
                    {/* -------------Current Password------------ */}
                    <PasswordInput
                        placeholderTxt='Current Password'
                        value={currentPass}
                        onChangeTxt={(currentPass) => updateState({ currentPass })}
                    />
                    {/* -------------Password Field--------------- */}
                    <PasswordInput
                        placeholderTxt='Password'
                        value={pass}
                        onChangeTxt={(pass) => updateState({ pass })}
                    />
                    {/* -------------Confirm Field--------------- */}
                    <PasswordInput
                        placeholderTxt='Confirm Password'
                        value={cPass}
                        onChangeTxt={(cPass) => updateState({ cPass })}
                    />
                </View>

            </ScrollView >
            {/* ----------------------Next Button----------------- */}
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <Button
                    ButtonText={strings.GET_STARTED}
                    btnStyle={{ marginVertical: moderateScale(12) }}
                    onPress={UpdatePassword}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default SetPassword;