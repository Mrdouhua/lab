import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'

class About extends React.Component{
	render(){
		return (
			<div className="main">
				<div className="main-wrap">
					<div className="title">
						<h2 className="title1">产品与服务</h2>
					</div>
					<div className="content">
						<div className="section">
							<div className="product-tit">
								<h3>产品名称</h3>
							</div>
							<div className="product-con">
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className="pic-show"></div>
							</div>
						</div>
						<div className="section">
							<div className="product-tit">
								<h3>产品名称</h3>
							</div>
							<div className="product-con">
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className="pic-show"></div>
							</div>
						</div>
						<div className="section">
							<div className="product-tit">
								<h3>产品名称</h3>
							</div>
							<div className="product-con">
								<p>
									产品名称产品名称产品名称产品名称产品名称产品名称
								</p>
								<div className="pic-show"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = About