import React, { Component } from 'react'

import SignUP from './app/screens/signUp/SignUp';
import SplashScreen from './app/screens/Splashscreen/SplashScreen';
import EventScreen from './app/screens/event/EventScreen';
import Terms from './app/screens/termCondition/Terms';
import FeedBackRating from './app/screens/feedback/FeedBackRating';
import EditPartnerList from './app/screens/partnerList/EditPartnerList';
import AddTask from './app/screens/addTask/AddTask';
import TaskList from './app/screens/addTask/TaskList'
import AddTaskDetailsVisibility from './app/screens/addTask/AddTaskDetailsVisibility';
import Pharmacy from './app/screens/pharmacy/Pharmacy';
import AddEventDesign from './app/screens/event/AddEventDesign';
import AddEvent from './app/screens/event/AddEvent';

console.disableYellowBox=true

export default class App extends Component {
  render() {
    return (
      // <SplashScreen />
      // <SignUP /> 
      // <Terms /> 
      // <FeedBackRating />
      // <EditPartnerList />  
      
      // <25march />
      // <EventScreen />
      // <AddTask />
      // <TaskList />
      <AddTaskDetailsVisibility />
      // <AddEventDesign />
      // <Pharmacy />
      // <AddEvent />
      
    )
  }
}
