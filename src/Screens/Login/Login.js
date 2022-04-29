import { View, Text, Image, ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import Button from '../../Components/ButtonComponent';
import { moderateScale, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import navigationStrings from '../../navigation/navigationStrings';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import actions from '../../redux/actions';


export default function Login({ navigation }) {
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const data = userInfo?.user;
      console.log("console after google Login---",data);
      actions.loginFunction(data);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>

      <SafeAreaView style={styles.loginContainer}>

        {/* ---------------logo------------------*/}
        <View style={styles.logoStyle}>
          <Image source={imagePath.logo} />
        </View>

        {/* ----------------terms and conditions for login-------- */}
        <View style={styles.loginTC}>
          <Text style={styles.loginTCtxt}>By clicking “Log In”, you agree with our Terms. Learn how we process your data in our Privacy policy.</Text>
        </View>

        {/* ----------------------login with phone number----------------- */}
        <Button
          ButtonText="Log In with Phone number"
          btnStyle={{ marginVertical: moderateScale(12) }}
          onPress={() => { navigation.navigate(navigationStrings.LOGIN1) }}
        />

        <View style={styles.orBox}>
          <Text style={styles.orTxt}>or</Text>
        </View>

        <Button
          ButtonText="Log In with Google"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.googleIcon}
          onPress={googleLogin}
        />

        <Button
          ButtonText="Log In with Facebook"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.fbIcon}
        // onPress={() => alert('button onpress')}
        />

        <Button
          ButtonText="Log In with Apple"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.appleIcon}
        // onPress={() => alert('button onpress')}
        />

        <View style={[commonStyle.flexRow, styles.signUpTxtBox]}>
          <Text style={{ color: colors.white, fontSize: textScale(14) }}>New here? </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.SIGNUP)}}>
            <Text style={styles.signUpTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}
