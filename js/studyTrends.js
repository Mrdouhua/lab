import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import StudyTrends from './components/studyTrends/studyTrends.jsx'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<Header cur={4} />
				<StudyTrends />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.body)