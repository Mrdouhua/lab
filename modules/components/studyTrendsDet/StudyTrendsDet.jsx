import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'
import style from './studyTrendsDet.css'

class StudyTrendsDet extends React.Component{
	render(){
		return (
			<div className={style.main}>
				<div className={style.main_wrap}>
					<div className={style.title}>
						<h2 className={style.title1}>研究动态</h2>
					</div>
					<div className={style.detail_tit}>
						<h3>标题标题</h3>
					</div>
					<div className={style.date}>
						<span className={style.publish_date}>发表日期:2016.11.11</span>
						<span className={style.leader}>负责人:xxx</span>
					</div>
					<div className={style.article}>
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
						<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					</div>
					{/*<div className={style.page_container}>
						<div className={style.page}>
							<button className={style.prev}>上一页</button>
							<ul className={style.pageNum}>
								<li className={style.active}>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
							</ul>
							<button className={style.next}>下一页</button>
							<div className={style.allNum}>
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