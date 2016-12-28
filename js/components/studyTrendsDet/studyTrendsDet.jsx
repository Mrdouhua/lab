import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'

class StudyTrendsDet extends React.Component{
	render(){
		return (
			<div className="main">
				<div className="main-wrap">
					<div className="title">
						<h2 className="title1">研究动态</h2>
					</div>
					<div className="detail-tit">
						<h3>标题标题</h3>
					</div>
					<div className="date">
						<span className='publish-date'>发表日期:2016.11.11</span>
						<span className='leader'>负责人:xxx</span>
					</div>
					<div className="article">
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					</div>
					{/*<div className="page-container">
						<div className="page">
							<button className='prev'>上一页</button>
							<ul className="pageNum">
								<li className='active'>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
							</ul>
							<button className='next'>下一页</button>
							<div className='allNum'>
								共4页
							</div>
						</div>
					</div>*/}
				</div>
			</div>
		)
	}
}

module.exports = StudyTrendsDet