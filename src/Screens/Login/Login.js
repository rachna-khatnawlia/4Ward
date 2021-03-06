import React from 'react';
import { styles } from './styles';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import imagePath from '../../constants/imagePath';
import Button from '../../Components/ButtonComponent';
import { moderateScale, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import navigationStrings from '../../navigation/navigationStrings';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import actions from '../../redux/actions';
import { LoginManager,GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import strings from '../../constants/lang';


export default function Login({ navigation }) {

  // ----------------------Google Login----------------
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const data = userInfo?.user;
      console.log("console after google Login---", data);
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

  // ----------------------Fb Login----------------
  const fbLogin = (resCallBack) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log("FB_LOGIN_RESULT =====>", result);
        if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
          resCallBack({ message: "email is required" })
        }
        if (result.isCancelled) {
          console.log("error")
        } else {
          const infoResquest = new GraphRequest(
            '/me?fields = email, name, picture',
            null,
            resCallBack
          );
          new GraphRequestManager().addRequest(infoResquest).start()
        }
      },
      function (error) {
        console.log("login failed with error", error)
      }
    )
  }

  const onFbLogin = async () => {
    try {
      await fbLogin(resInfoCallBack)
    } catch (error) {
      console.log("error", error)
    }
  }

  const resInfoCallBack = async (error, result) => {
    if (error) {
      console.log("Login Error", error)
    } else {
      const userData = result;
      console.log("your data is", userData)
      actions.loginFunction(userData);
    }
  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
      <SafeAreaView style={styles.loginContainer}>

        {/* ---------------logo------------------*/}
        <View style={styles.logoStyle}>
          <Image source={imagePath.logo} />
        </View>

        {/* ----------------terms and conditions for login-------- */}
        <View style={styles.loginTC}>
          <Text style={styles.loginTCtxt}>{strings.LOGIN_TC}</Text>
        </View>

        {/* ----------------------login with phone number----------------- */}
        <Button
          ButtonText={strings.PHONE_LOGIN}
          btnStyle={{ marginVertical: moderateScale(12) }}
          onPress={() => { navigation.navigate(navigationStrings.LOGIN1) }}
        />

        <View style={styles.orBox}>
          <Text style={styles.orTxt}>or</Text>
        </View>

        {/* -----------------Log In with Google----------------------- */}
        <Button
          ButtonText={strings.GOOGLE_LOGIN}
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.googleIcon}
          onPress={googleLogin}
        />

        {/* -----------------Log In with Fb----------------------- */}
        <Button
          ButtonText={strings.FB_LOGIN}
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.fbIcon}
          onPress={onFbLogin}
        />

        {/* -----------------Log In with Apple----------------------- */}
        <Button
          ButtonText={strings.APPLE_LOGIN}
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon={imagePath.appleIcon}
        />

        <View style={[commonStyle.flexRow, styles.signUpTxtBox]}>
          <Text style={styles.newHereTxt}>New here? </Text>
          <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.SIGNUP) }}>
            <Text style={styles.signUpTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}
