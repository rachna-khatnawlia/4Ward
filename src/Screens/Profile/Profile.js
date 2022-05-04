//import liraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';

// create a component
const Profile = ({ navigation }) => {

    const DATA = [
        {
            id: "1",
            icon: imagePath.userProfile,
            title: 'Edit Profile',
            action: () => editProfile()
        },
        {
            id: "2",
            icon: imagePath.key,
            title: 'Change Password',
            action: () => changePassword()
        },
        {
            id: "3",
            icon: imagePath.logout,
            title: 'Signout',
            action: () => handleLogout()
        },
    ];

    const editProfile = () =>{
        navigation.navigate(navigationStrings.EDIT_PROFILE)
    }

    const changePassword = () => {
        navigation.navigate(navigationStrings.SET_PASSWORD)
    }

    const handleLogout = async () => {
        try {
            await GoogleSignin.signOut();
            actions.Logout();
        }
        catch (error) {
            console.log("handleLogout Error", error);
        }
    }

    const renderItem = ({ item, navigation }) => {
        console.log(height, width)

        return (
            <View style={styles.flatListContainer}>
                <TouchableOpacity style={styles.profileRow} onPress={item.action}>
                    <Image source={item.icon} />
                    <Text style={styles.profileAction}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.themeColor }}>

            <HomeHeader headerText={strings.PROFILE} />

            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    flatListContainer: {
        marginVertical: moderateScaleVertical(15),
        width: width - 46,
        alignSelf: 'center'
    },
    profileRow: {
        flexDirection: 'row'
    },
    profileAction: {
        color: colors.white,
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        marginLeft: moderateScale(20)
    },
});

//make this component available to the app
export default Profile;
