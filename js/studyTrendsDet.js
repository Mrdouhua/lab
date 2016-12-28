import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import StudyTrendsDet from './components/studyTrendsDet/studyTrendsDet.jsx'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<Header cur={4} />
				<StudyTrendsDet />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.body)