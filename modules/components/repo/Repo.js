// modules/Repo.js
import React from 'react'
import style from './pepo.css'

export default React.createClass({
  render() {
    return (
      <div>
      	<h2 className={style.orange}>{this.props.params.userName}</h2>
        <h2 className={style.orange}>{this.props.params.repoName}</h2>
      </div>
    )
  }
})