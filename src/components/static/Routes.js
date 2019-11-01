import React from 'react';
import {
  Route,
  Switch,
  // Redirect
} from 'react-router-dom'

import TradePage from "../converter/pages/TradePage"
import HomePage from "../converter/pages/HomePage"
import SendPage from "../converter/pages/SendPage"
import RelaysPage from "../converter/pages/RelaysPage"
import PoolPage from "../converter/pages/PoolPage"
// import AddConverter from "../converter/pages/AddConverter"
import CreateConverter from "../converter/pages/CreateConverter/CreateConverter"
import ConverterSettingsPage from "../converter/pages/ConverterSettingsPage/ConverterSettingsPage"
import StablePoolPage from "../converter/pages/StablePoolPage"


export default function Routes() {

  return (
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/trade" component={TradePage} />
     <Route path="/send" component={SendPage} />
     <Route path="/pool" component={PoolPage} />
     <Route path="/stable-pool" component={StablePoolPage} />
     <Route path="/relay" component={RelaysPage} />
     <Route path="/create-converter" component={CreateConverter} />
     <Route path="/converter-settings" component={ConverterSettingsPage} />

     {/* with params */}
     {/*
       // Not worknig
       <Route path="/trade-popup" component={(props) => <TradePage {...props} popupShow=true/>} />
     */}
     <Route path="/trade-popup/:popup" component={TradePage} />
    </Switch>
  );
}
