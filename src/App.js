import React from 'react';
import Navigation from './component/Naviagation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Road from './navcomponents/road';
import Mtb from './navcomponents/mtb';
import Running from './navcomponents/running';
import Ironman from './navcomponents/ironman';
import Chess from './navcomponents/chess';
import Shooting from './navcomponents/shooting';

import RoadAbout from './RoadComponent/about'
import RoadOverview from './RoadComponent/overview'
import RoadEvents from './RoadComponent/events'

function App() {
  return (
    <BrowserRouter>
    <div >
      <Navigation></Navigation>
     
     <Switch>
      
       <Route exact path="/road" component={Road}></Route>
       <Route path="/road/about" component={RoadAbout}></Route>
       <Route path="/road/overview" component={RoadOverview}></Route>
       <Route path="/road/events" component={RoadEvents}></Route>
       <Route path="/mtb" component={Mtb}></Route>
       <Route path="/running" component={Running}></Route>
       <Route path="/ironman" component={Ironman}></Route>
       <Route path="/shooting" component={Shooting}></Route>
       <Route path="/chess" component={Chess}></Route>
     </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
