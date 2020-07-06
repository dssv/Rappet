import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/HomeScreen.js';
import ListPetShop from '../screens/ListPetShopScreen.js';
import ListProducts from '../screens/ListProductsScreen.js';
import Payment from '../screens/PaymentScreen.js';
import Seller from '../screens/SellerScreen.js';
import OngDetail from '../screens/OngDetailScreen.js';
import Login from '../screens/LoginScreen.js';

import HeaderComponent from '../components/Header.js';



const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerMode: 'screen',
        header: (
          <HeaderComponent />
        ),
        headerTransparent: true,
        headerStyle: {
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        cardStyle: {
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      },
    },
    OngDetail: {
      screen: OngDetail,
      navigationOptions: {
        headerMode: 'screen',
        header: (
          <HeaderComponent />
        ),
        headerTransparent: true,
        headerStyle: {
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        cardStyle: {
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      },
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        headerMode: 'screen',
        header: (
          <HeaderComponent />
        ),
        headerTransparent: true,
        headerStyle: {
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        cardStyle: {
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      },
    },
    ListProducts: {
      screen: ListProducts,
      navigationOptions: {
        headerMode: 'screen',
        header: (
          <HeaderComponent />
        ),
        headerTransparent: true,
        headerStyle: {
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        cardStyle: {
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      },
    },
    ListPetShop: {
      screen: ListPetShop,
      navigationOptions: {
        headerMode: 'screen',
        header: (
          <HeaderComponent />
        ),
        headerTransparent: true,
        headerStyle: {
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        cardStyle: {
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: "right"
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          headerMode: 'screen',
          header: null
        },
      },
      Seller: {
        screen: Seller,
        navigationOptions: {
          headerMode: 'screen',
          header: null
        },
      },
      Drawer: {
        screen: DrawerNavigator,
        navigationOptions: {
          headerMode: 'screen',
          header: (
            <HeaderComponent />
          ),
          headerTransparent: true,
          headerStyle: {
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            }
          },
          cardStyle: {
            marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
          }
        },
      }
    },
    {
      initialRouteName: 'Drawer',
    }
  )
);