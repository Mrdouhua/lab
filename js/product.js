import React from 'react'
import ReactDOM from 'react-dom'

import $ from './lib/jquery.js'

import Header from './components/common/header.jsx'
import Footer from './components/common/footer.jsx'
import Product from './components/product/product.jsx'

class App extends React.Component{
	render(){
		return (
			<div className="app">
				<Header cur={6} />
				<Product />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.body)