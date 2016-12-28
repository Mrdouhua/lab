import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import MemberDet from './components/memberDet/memberDet.jsx'

class App extends React.Component{
	render(){
		return (
			<div className='app'>
				<Header cur={2} />
				<MemberDet />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.body)