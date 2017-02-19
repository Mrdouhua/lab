import React from 'react'

import Index from './components/index/Index.jsx'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children || Index}
        <Footer />
      </div>
    )
  }
})
