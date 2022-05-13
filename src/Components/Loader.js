import React from 'react';
import { Modal, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import colors from '../styles/colors';
import { height, width } from '../styles/responsiveSize';

const LoadingComponent = () => {
  return (
    <View
      style={{
        // ...commonStyles.loader,
        backgroundColor: colors.whiteOpacity22,
        elevation: 5,
        height:height,
        width:width
      }}>
      <BarIndicator size={25} color={colors.themeredColor} />
    </View>
  );
};
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        <LoadingComponent />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingComponent />;
  }
  return null;
};

export default Loader;