import React from 'react'
import { View, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import RiderLogin from '../../assets/svg/RiderLogin.png'
import LottieView from 'lottie-react-native'
// import riderLogin from '../../assets/riderlogin.json'
// import riders from '../../assets/svg/riders.json'

const ScreenBackground = ({ children }) => {
  return (
    <SafeAreaView style={[styles.flex, styles.bgColor]}>
      <StatusBar
        backgroundColor={styles.bgColor.backgroundColor}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Image
          source={RiderLogin}
          style={[styles.image]}
          height={250}
          width={250}
        />
        {children}
      </View>
    </SafeAreaView>
  )
}

export default ScreenBackground
