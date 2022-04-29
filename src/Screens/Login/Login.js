import { View, Text, Image, ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import Button from '../../Components/ButtonComponent';
import { moderateScale, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';
import navigationStrings from '../../navigation/navigationStrings';
import { googleLogin } from '../../../App';

export default function Login({ navigation }) {
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
