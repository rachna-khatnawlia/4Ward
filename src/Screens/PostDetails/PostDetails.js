//import liraries
import React from 'react';
import { styles } from './style';
import Button from '../../Components/ButtonComponent';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';

// create a component
const PostDetails = ({ navigation, route }) => {
    const profile = route?.params?.item.profile;
    const fullName = route?.params?.item.name;
    const image = route?.params?.item.image;
    const location = route?.params?.item.location;
    const caption = route?.params?.item.caption;
    const uploaded = route?.params?.item.uploaded;
    return (
        <View style={styles.screen}>
            <ImageBackground source={image} style={styles.imgBackground} resizeMode="stretch">
                <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>

                    {/* ------------------------Profile Pic, name & location----------------------------- */}
                    <View style={styles.nameLocationContainer}>
                        <View style={styles.profilePhotoBox}>
                            <Image source={profile} style={styles.profilePic} />
                        </View>
                        <View style={styles.nameLocation}>
                            <Text style={styles.name}>{fullName}</Text>
                            <Text style={styles.location}>{location}</Text>
                        </View>
                        <TouchableOpacity style={styles.optionsBox} onPress={() => navigation.goBack()}>
                            <Image source={imagePath.cross} style={styles.optionsImg} />
                        </TouchableOpacity>
                    </View>
                    
                    {/* ------------------------Caption Area with View Map Button----------------------------- */}
                    <View style={styles.captionArea}>
                        <Text style={styles.captionTxt}>{caption}</Text>
                        <Text style={styles.uploadTimeTxt}>{uploaded}</Text>
                        <Button ButtonText={strings.VIEW_MAP} />
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </View>

    );
};

//make this component available to the app
export default PostDetails;
