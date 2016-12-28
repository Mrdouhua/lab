import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'

class About extends React.Component{
	render(){
		return (
			<div className="main">
				<div className="main-wrap">
					<div className="title">
						<h2 className="title1">关于我们</h2>
					</div>
					<div className="content">
						<div className="section">
							<div className="pic-show">
								<img src="./img/mayun.png" alt="关于我们"/>
							</div>
							<p>
								关于我们关于我们关于我们关于我们关于我们关于我们关于我们
							</p>
						</div>
						<div className="section">
							<div className="pic-show">
								<img src="./img/mayun.png" alt="关于我们"/>
							</div>
							<p>
								关于我们关于我们关于我们关于我们关于我们关于我们关于我们
							</p>
						</div>
						<div className="reseach-dir">
							<div className="reseach-tit">
								<h2>研究方向</h2>
							</div>
							<p>
								关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = About