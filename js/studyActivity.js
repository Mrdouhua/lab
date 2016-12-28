import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import StudyActivity from './components/studyActivity/studyActivity.jsx'

class App extends React.Component{
	render(){
		return (
			<div class='app'>
				<Header cur={3} />
				<StudyActivity />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.body)