import { StyleSheet } from 'react-native';
import { height, moderateScale, width } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    TwoInputFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImage: {
        height: height / 8,
        width: height / 8,
        // height:moderateScale(100),
        // width:moderateScale(100),
        borderRadius: width / 2,
        alignSelf: 'center',
        position: 'relative'
    },
    editProfile: {
        position: 'absolute',
        bottom: moderateScale(3),
        right: moderateScale(150)
    }
});