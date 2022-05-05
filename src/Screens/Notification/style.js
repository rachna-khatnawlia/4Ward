import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';

// define your styles
export const styles = StyleSheet.create({
    notificationConatiner: {
        width: width - 23,
        alignSelf: 'flex-end',
    },
    notification: {
        flexDirection: 'row',
        paddingBottom: moderateScale(10),
    },
    profilePic: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: width / 2,
        marginRight: moderateScale(15)
    },
    notificationTitle: {
        flexDirection: 'row',
    },
    notificationTitletxt: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },
    uploadTime: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(12),
        color: colors.greyUploadTime,
        opacity: 0.4,
        paddingBottom: moderateScale(10)
    }
});
