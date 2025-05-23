import { View, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import { TextError, Spinner, TextDefault } from '../../components'
import { useOrders, useAcceptOrder } from '../../ui/hooks'
import { colors } from '../../utilities'
import { Image } from 'react-native-elements/dist/image/Image'
import { TabBars } from '../../components/TabBars'
import { HomeOrderDetails } from '../../components/HomeOrderDetails'
import LottieView from 'lottie-react-native'
import { useTranslation } from 'react-i18next'
import noOrders from '../../assets/noOrders.png'
const { width, height } = Dimensions.get('window')
import i18next from '../../../i18n'

const Orders = props => {
  const {
    loading,
    error,
    data,
    activeOrders,
    processingOrders,
    deliveredOrders,
    active,
    refetch,
    setActive
  } = useOrders()

  const { loading: mutateLoading } = useAcceptOrder()
  const { t } = useTranslation()
  if (error) return <TextError text={error.message} />
  return (
    <View style={{ flex: 1 }}>
      {mutateLoading ? (
        <Spinner />
      ) : (
        <View style={{ flex: 1, zIndex: 10 }}>
          <View style={[styles.topContainer, { zIndex: -10 }]}>
            <Image
              source={require('../../assets/heads.gif')}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View
            style={[
              styles.lowerContainer,
              {
                backgroundColor:
                  active === 0
                    ? colors.green
                    : active === 1
                    ? colors.white
                    : colors.white
              }
            ]}>
            <TabBars
              newAmount={activeOrders}
              processingAmount={processingOrders}
              activeBar={active}
              setActiveBar={setActive}
              refetch={refetch}
              orders={
                data &&
                data.restaurantOrders.filter(
                  order => order.orderStatus === 'PENDING'
                )
              }
            />
            {loading ? (
              <View style={{ marginTop: height * 0.25 }}>
                <Spinner spinnerColor={colors.fontSecondColor} />
              </View>
            ) : (
              <ScrollView style={styles.scrollView}>
                <View style={{ marginBottom: 30 }}>
                  {active === 0 && activeOrders > 0
                    ? data &&
                      data.restaurantOrders
                        .filter(order => order.orderStatus === 'PENDING')
                        .map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 0 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                            {t('unReadOrders')}
                          </TextDefault>
                          <Image
                            source={noOrders}
                            style={{ width: 280, height: 380, marginTop: 10 }}
                          />
                        </View>
                      )}
                  {active === 1 && processingOrders > 0
                    ? data &&
                      data.restaurantOrders
                        .filter(order =>
                          ['ACCEPTED', 'ASSIGNED', 'PICKED'].includes(
                            order.orderStatus
                          )
                        )
                        .map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 1 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                            {t('unReadOrders')}
                          </TextDefault>
                          <Image
                            source={noOrders}
                            style={{ width: 280, height: 380, marginTop: 10 }}
                          />
                        </View>
                      )}
                  {active === 2 && deliveredOrders > 0
                    ? data &&
                      data.restaurantOrders
                        .filter(order => order.orderStatus === 'DELIVERED')
                        .map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 2 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                            {t('unReadOrders')}
                          </TextDefault>
                          <Image
                            source={noOrders}
                            style={{ width: 280, height: 380, marginTop: 10 }}
                          />
                        </View>
                      )}
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      )}
    </View>
  )
}

export default Orders
