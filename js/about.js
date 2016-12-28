import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import About from './components/about/about.jsx'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<Header cur={1} />
				<About />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.body)