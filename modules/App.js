import React from 'react'

import Index from './components/index/index'
import Header from './components/common/header'
import Footer from './components/common/footer'

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
