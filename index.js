import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './modules/App.jsx'
import Header from './modules/components/common/Header.jsx'
import Index from './modules/components/index/Index.jsx'
import About from './modules/components/about/About.jsx'
import MasterTraining from './modules/components/masterTraining/MasterTraining.jsx'
import Member from './modules/components/member/Member.jsx'
import MemberDet from './modules/components/memberDet/MemberDet.jsx'
import Product from './modules/components/product/Product.jsx'
import StudyActivity from './modules/components/studyActivity/StudyActivity.jsx'
import StudyTrends from './modules/components/studyTrends/StudyTrends.jsx'
import StudyTrendsDet from './modules/components/studyTrendsDet/StudyTrendsDet.jsx'



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
