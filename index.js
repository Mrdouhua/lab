import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory, browserHistory, } from 'react-router'
import App from './modules/App'
import Header from './modules/components/common/Header'
import Index from './modules/components/index/index'
import About from './modules/components/about/about'
import MasterTraining from './modules/components/masterTraining/masterTraining'
import Member from './modules/components/member/member'
import MemberDet from './modules/components/memberDet/memberDet'
import Product from './modules/components/product/product'
import StudyActivity from './modules/components/studyActivity/studyActivity'
import StudyTrends from './modules/components/studyTrends/studyTrends'
import StudyTrendsDet from './modules/components/studyTrendsDet/studyTrendsDet'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Index}/>
    	<Route path="/about" component={About}/>
    	<Route path="/member" component={Member}>
    		<Route path="/member/:id" component={MemberDet}/>
    	</Route>
    	<Route path="/studyActivity" component={StudyActivity}></Route>
    	<Route path="/studyTrends" component={StudyTrends}>
    		<Route path="/studyTrends/:id" component={StudyTrendsDet}/>
    	</Route>
    	<Route path="/masterTraining" component={MasterTraining}/>
    	<Route path="/product" component={Product}/>
    </Route>
  </Router>
), document.getElementById('app'))
