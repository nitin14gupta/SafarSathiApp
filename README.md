
**SafarSaathi Travel App Subscription Models**

_Overview_
This document outlines the subscription models for our travel app, detailing the features available for freemium, pro, and premium users. It also includes setup instructions for a _React Native CLI project_.

**Subscription Tiers**
1. _**Freemium Users**_
Freemium users have access to the following features:

Add travel details and favorite places.
Earn credits at a rate of 50% (5 points).
Swipe count limited to 10-15 swipes.
Message only those users who have swiped back.
View reviews and tips for places.
Get weather updates for selected destinations.
Connect via standard text messaging.
Share emergency contact numbers including location.



_**2. Pro Users**_
Pro users enjoy all freemium benefits, plus:
Earn credits at a rate of 75% (7.5 points).
Swipe count increased to 15-30 swipes.
Connect via text, photo, audio, and video messages.
View other users' profiles, including public pictures and reviews.
Receive real-time events and alerts during travel.


. _**Premium Users**_
Premium users have access to all features from the previous tiers, along with:
Earn credits at a rate of 10 points.
Unlimited swipes.
Integration with third-party services for booking hotels and flights.
Ad-free experience.
Access to information on local events and activities.
Receive travel detail analytics and insights.
User Connection Features
Connect via audio and video messaging.
Apply filtering based on budget and location.
Group creation feature: groups can be created once a journey starts and will conclude at the end of the journey.



Getting Started with the React Native CLI Project
Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from Node.js official website.

Installation Steps
Open your command prompt (cmd) on Windows.
Install React Native CLI globally by running:

**npm install -g react-native-cli**

Create a new React Native project:

**npx react-native init SafarSaathi**
Navigate to your project directory:
bash
Copy code
cd TravelApp
Run the project on an Android emulator or device:

_npx react-native run-android_  or _npm run android_
Or for iOS (if on a Mac):

_npx react-native run-ios_ or _npm run ios_

Conclusion
This document summarizes the subscription models and setup instructions for our travel app. For further development and features, refer to the project's documentation and community resources.

