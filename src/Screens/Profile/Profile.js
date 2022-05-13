//import liraries
import React from 'react';
import { styles } from './style';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';

// create a component
const Profile = ({ navigation }) => {
    //------------flatlist data-------------
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

    const editProfile = () => {
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

    const renderItem = ({ item }) => {
        // --------------------render Flatlist--------------
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

//make this component available to the app
export default Profile;
