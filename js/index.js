import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import Index from './components/index/index.jsx'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<Header cur={0} />
				<Index />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.body)