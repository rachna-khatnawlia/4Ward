import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import Button from '../../Components/ButtonComponent';
import { moderateScale, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import { commonStyle } from '../../styles/commonStyles';

export default function Login() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor}}>

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
          btnStyle={{ marginVertical: moderateScale(12), }}
        // onPress={() => alert('button onpress')}
        />

        <View style={styles.orBox}>
          <Text style={styles.orTxt}>or</Text>
        </View>

        <Button
          ButtonText="Log In with Google"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon= {imagePath.googleIcon}
        // onPress={() => alert('button onpress')}
        />

        <Button
          ButtonText="Log In with Facebook"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon= {imagePath.fbIcon}
        // onPress={() => alert('button onpress')}
        />

        <Button
          ButtonText="Log In with Apple"
          btnStyle={{ marginVertical: moderateScale(12), backgroundColor: colors.white }}
          buttonTxt={{ color: colors.loginWith }}
          btnIcon= {imagePath.appleIcon}
        // onPress={() => alert('button onpress')}
        />

        <View style={[commonStyle.flexRow,styles.signUpTxtBox]}>
          <Text style={{color:colors.white, fontSize:textScale(14)}}>New here? </Text>
          <Text style={styles.signUpTxt}>Sign Up</Text>
        </View>

        </SafeAreaView>
    </ScrollView>
  );
}
