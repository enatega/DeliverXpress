<div align="right">
</div>

<div align="center">
  <h2>DeliverXpress Multi Vendor Food Delivery System</h2>
  <i>The food delivery and order management system for the future.</i>
 <br/>
<br />
</div>



<div align="center">

  <a href="https://www.youtube.com/watch?v=00voqzkFpHU">
    <img src="./assets/mockup1.png" alt="Demo video" style="border-radius: 6px; width: auto;">
  </a>

</div>

<br>

The DeliverXpress Multi vendor food delivery system is perfect for customers looking to deploy a readymade and easy to use food ordering platform for their own food delivery and logistics business. Just like foodpanda and ubereats, our food delivery system can incorporate multiple restaurants as well as restaurants that operate in multiple locations. With access to the admin panel and separate applications for customers and riders, you can use this solution to create your own online food ordering and order/delivery management system instantaneously.

Our solution is open source but the backend and API are proprietary, and can be obtained via paid license.

<!-- Add a horizontal rule for separation -->
<hr/>

## :fast_forward: Quick Links

- [:book: What is included](#heading-1)
- [:rocket: Features](#heading-2)
- [:wrench: Setup](#heading-3)
- [:gear: Prerequisites](#heading-4)
- [:computer: Technologies](#heading-5)
- [:camera: Screenshots](#heading-6)
- [:triangular_ruler: High Level Architecture](#heading-7)
- [:page_with_curl: Documentation](#heading-8)
- [:movie_camera: Demo Videos](#heading-14)
- [:video_game: Demos](#heading-9)
- [:busts_in_silhouette: Contributors](#heading-10)
- [:warning: Disclaimer](#heading-12)
- [:email: Contact Us](#heading-13)
- [:computer: Project Setup Guide](#heading-15)

<!-- Add a horizontal rule for separation -->
<hr/>

## :question: What is included: <a id="heading-1"></a>

Our food delivery system also comes with the following:

- DeliverXpress Multi vendor Customer App
- DeliverXpress Multi vendor Rider App
- DeliverXpress Multi vendor Restaurant App
- Customer Food Ordering Website
- Admin Web Dashboard
- Application ProgramInterface Server
- Analytics Dashboard with Expo Amplitude
- Error crash reporting with Sentry

## :fire: Features: <a id="heading-2"></a>

- Authentication using Google, Apple, and Facebook
- Different sections feature for promoting restaurants
- Push notifications and Emails to Users for account creation and order status changes
- Real-time tracking of Rider and chat with Rider option
- Email and Phone number verification
- Location-based restaurants shown on Map and Home Screen
- Multi-Language and different themes support
- Rating and Review features for order
- Details of restaurants include ratings and reviews, opening and closing timings, delivery timings, restaurant menu and items, restaurant location, minimum order
- Payment Integration for both PayPal and Stripe
- Previous order history and adding favorite restaurants
- Adding address with Google Places suggestions and Maps integration
- Analytics and Error reporting with Amplitude and Sentry
- Options to add different variations of food items and adding notes to restaurant
  Pick up and delivery option with different timings

## :repeat_one: Setup: <a id="heading-3"></a>

As we've mentioned above, the solution includes five separate modules. To setup these modules, follow the steps below:

To run the module, you need to have nodejs installed on your machine. Once nodejs is installed, go to the directory and enter the following commands

The required credentials and keys have been set already. You can setup your own keys and credentials

The version of nodejs should be between 18 to 20 (with 16 as minor version and 0 as patch)

[![Guide Badge](https://img.shields.io/badge/Do_with_guided_tutorial-blue?style=for-the-badge&logo=book-reader)](https://enatega.com/multi-vendor-doc/)

## :information_source: Prerequisites: <a id="heading-4"></a>

App Ids for Mobile App in app.json

- Facebook Scheme
- Facebook App Id
- Facebook Display Name
- iOS Client Id Google
- Android Id Google
- Amplitude Api Key
- server url

Set credentials in API in file helpers/config.js and helpers/credentials.js

- Email User Name
- Password For Email
- Mongo User
- Mongo Password
- Mongo DB Name
- Reset Password Link
- Admin User name
- Admin Password
- User Id
- Name

Set credentials in Admin Dashboard in file src/index.js

- Firebase Api Key
- Auth Domain
- Database Url
- Project Id
- Storage Buck
- Messaging Sender Id
- App Id

NOTE: Email provider has been only been tested for gmail accounts

## :hammer_and_wrench: Technologies: <a id="heading-5"></a>

|                                               Expo                                                |                                                   React-Navigation                                                   |                                                Apollo GraphQL                                                |                                               ReactJS                                                |                                                NodeJS                                                 |                                                 MongoDB                                                 |                                                   Firebase                                                   |
| :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| <a href="https://expo.dev/"><img src="./assets/expoicon.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://reactnavigation.org/"><img src="./assets/react-navigation.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://www.apollographql.com/"><img src="./assets/apollo.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://reactjs.org/"><img src="./assets/react-js.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://nodejs.org/en/"><img src="./assets/node-js.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://www.mongodb.com/"><img src="./assets/mongoDB.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://firebase.google.com/"><img src="./assets/firebase.png" alt="DeliverXpress Logos" width="100"></a> |

|                                                 React Native                                                 |                                                       React Router                                                       |                                                GraphQL                                                |                                                ExpressJS                                                 |                                                   React Strap                                                    |                                                Amplitude                                                |
| :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <a href="https://reactnative.dev/"><img src="./assets/react-native.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://reactrouter.com/"><img src="./assets/react-router-svgrepo-com.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://graphql.org/"><img src="./assets/graphQl-1.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://expressjs.com/"><img src="./assets/express-js.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://reactstrap.github.io/"><img src="./assets/React-strap.png" alt="DeliverXpress Logos" width="100"></a> | <a href="https://amplitude.com/"><img src="./assets/amplitude.png" alt="DeliverXpress Logos" width="100"></a> |

## :framed_picture: Screenshots: <a id="heading-6"></a>

|          Rider App           |
| :--------------------------: |
| ![](./assets/mockup3.png) |

|               Restaurant APP               |
| :----------------------------------------: |
| ![](./assets/mockup2.png) |

|          Customer App           |
| :-----------------------------: |
| ![](./assets/mockup1.png) |




## :wrench: High Level Architecture: <a id="heading-7"></a>

![](./assets/high-level.webp)

## :book: Documentation <a id="heading-8"></a>

Find the link for the complete documentation of the DeliverXpress Multi Vendor Solution [here](https://enatega.com/multivendor-documentation/).

## :iphone: Demos: <a id="heading-9"></a>

|                                                                                                                                               Customer App                                                                                                                                                |                                                                                                                                                   Rider App                                                                                                                                                    |                                                                                                                                                       Restaurant App                                                                                                                                                        |                                                   Customer Web                                                   |                                                    Admin Dashboard                                                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|                                                                                          <a href="#heading-9" style="pointer-events: none;"><img src="./assets/CustomerIcon.png" alt="DeliverXpress Logos" width="150"></a>                                                                                           |                                                                                          <a href="#heading-9" style="pointer-events: none;"><img src="./assets/RestaurantIcon.png" alt="DeliverXpress Logos" width="150"></a>                                                                                          |                                                                                            <a href="#heading-9" style="pointer-events: none;"><img src="./assets/RiderIcon.png" alt="DeliverXpress Logos" width="150"></a>                                                                                            | <a href="https://deliverxpress.netlify.app/"><img src="./assets/worldwide.png" alt="DeliverXpress Logos" width="180"></a> | <a href="https://deliverxpress-admin.netlify.app/"><img src="./assets/worldwide.png" alt="Enatega Logos" width="180"></a> |
| <a href="http://play.google.com/store/apps/details?id=com.cannabrand.multivendorapp"><img src="./assets/android_518705.png" alt="Android Logo" width="25"></a> <a href="https://apps.apple.com/us/app/deliverxpress/id6740040059"><img src="./assets/social_10096939.png" alt="iOS Logo" width="25"></a> | <a href=" https://play.google.com/store/apps/details?id=com.cannabrands.multirider"><img src="./assets/android_518705.png" alt="Android Logo" width="25"></a> <a href="https://apps.apple.com/us/app/deliverxpress-rider/id6740040032"><img src="./assets/social_10096939.png" alt="iOS Logo" width="25"></a> | <a href="https://play.google.com/store/apps/details?id=multivendor.cannabrands.restaurant"><img src="./assets/android_518705.png" alt="Android Logo" width="25"></a> <a href=" https://apps.apple.com/us/app/deliverxpress-restaurant/id6740040147"><img src="./assets/social_10096939.png" alt="iOS Logo" width="25"></a> |

## :people_holding_hands: Contributors: <a id="heading-10"></a>

<div align="center">
<br>
<a href="https://github.com/Ninjas-Code-official/Enatega-Multivendor-Food-Delivery-Solution/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Ninjas-Code-official/Enatega-Multivendor-Food-Delivery-Solution" style="max-width: 50%; height: auto;" />
</a>
</div>

## :warning: Disclaimer: <a id="heading-12"></a>

The frontend source code for our solution is completely open source. However, the API and backend is proprietary and can be accessed via a paid license. For further information, contact us on the channels provided below.

## :mailbox_with_mail: Contact Us: <a id="heading-13"></a>

[Check out the Product Page and Pricing and more for Enatega Multivendor Food Delivery Solution](https://enatega.com/?utm_source=github&utm_medium=referral&utm_campaign=github_guide&utm_id=12345678)

## :computer: Project Setup Guide <a id="heading-15"></a>

This section provides detailed instructions for setting up and running each component of the DeliverXpress Multi-vendor Food Delivery Solution.

### DeliverXpress Admin Dashboard (Next.js)

The admin dashboard allows you to manage restaurants, orders, riders, and more.

```bash
# Navigate to the admin dashboard directory
cd DeliveryXpress-multivendor-admin

# Install dependencies
npm install

# Start the development server
npm run dev
```

After running these commands, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the admin dashboard. You can also CTRL+click on the localhost link that appears in your terminal.

### DeliverXpress Customer Web (React.js)

The customer web application allows users to browse restaurants and place orders through a web browser.

```bash
# Navigate to the customer web directory
cd DeliverXpress-multivendor-web

# Install dependencies
npm install

# Start the development server
npm start
```

After running these commands, the application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

### DeliverXpress Customer App (React Native)

The customer mobile application allows users to browse restaurants and place orders on their mobile devices.

```bash
# Navigate to the customer app directory
cd DeliverXpress-multivendor-app

# Install dependencies
npm install

# Start the Expo development server
npx expo start -c
# OR
npm start -c
```

#### Testing on a Physical Device with Expo Go

1. Press `s` in the terminal to switch to Expo Go mode
2. Scan the QR code displayed in the terminal:
   - Android: Open the Expo Go app and scan the QR code
   - iOS: Use the device's camera app to scan the QR code

### DeliverXpress Rider App (React Native)

The rider app allows delivery personnel to manage and complete deliveries.

```bash
# Navigate to the rider app directory
cd DeliverXpress-multivendor-rider

# Install dependencies
npm install

# Start the Expo development server
npx expo start -c
# OR
npm start -c
```

#### Testing on a Physical Device with Expo Go

1. Press `s` in the terminal to switch to Expo Go mode
2. Scan the QR code displayed in the terminal:
   - Android: Open the Expo Go app and scan the QR code
   - iOS: Use the device's camera app to scan the QR code

### DeliverXpress Restaurant App (React Native)

The restaurant app allows restaurant owners to manage orders and their menu.

```bash
# Navigate to the restaurant app directory
cd DeliverXpress-multivendor-restaurant

# Install dependencies
npm install

# Start the Expo development server
npx expo start -c
# OR
npm start -c
```

#### Testing on a Physical Device with Expo Go

1. Press `s` in the terminal to switch to Expo Go mode
2. Scan the QR code displayed in the terminal:
   - Android: Open the Expo Go app and scan the QR code
   - iOS: Use the device's camera app to scan the QR code

### Building Development Versions

For all mobile apps (Customer, Rider, and Restaurant), you can create development builds using EAS Build.

#### Configure EAS Build

```bash
# From the app directory (customer, rider, or restaurant)
eas build:configure
```

Select your desired platform:
- android
- ios
- all

#### Build for Android

```bash
eas build --platform android --profile development
```

This will create an APK file that you can install directly on your Android device.

#### Build for iOS

```bash
eas build --platform ios --profile development
```

For iOS simulator builds, modify the `eas.json` file to include:

```json
"development": {
  "developmentClient": true,
  "distribution": "internal",
  "channel": "development",
  "ios": {
    "simulator": true
  },
  "android": {
    "buildType": "apk"
  }
}
```

Then run:

```bash
eas build --platform ios --profile development
```
