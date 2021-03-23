import React, { Component } from 'react'
import Login from './app/screens/login/Login';
import SignUP from './app/screens/signUp/SignUp';
import SplashScreen from './app/screens/Splashscreen/SplashScreen';
import EventScreen from './app/screens/event/EventScreen';
import Terms from './app/screens/termCondition/Terms';
import FeedBackRating from './app/screens/feedback/FeedBackRating';
import EditPartnerList from './app/screens/partnerList/EditPartnerList';
import AddTask from './app/screens/addTask/AddTask';

console.disableYellowBox=true

export default class App extends Component {
  render() {
    return (
      // <SplashScreen />
      // <SignUP /> 
      // <Login />
      // <EventScreen />
      // <Terms /> 
      // <FeedBackRating />
      // <EditPartnerList />  
      <AddTask />
    )
  }
}
