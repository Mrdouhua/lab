import React from 'react'
import { Link } from 'react-router'

import styles from './studyActivity.css'

import $ from '../../lib/jquery.js'

export default class StudyActivity extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			// 总共页数
			pageNum: '',
			// 活动个数
			itemNum: 0,
			// 所在页数
			nowPage: 0,
			// 每页数据
			pageData: []
		}
	}

	componentWillMount() {
		let that = this
		$.ajax({
			type: 'GET',
			url: '/studyActivity/getActivityNum',
			success: (data) => {
				if(data.status === 1) {
					// 动态条数
					that.setState({
						itemNum: data.data
					})
				}
			}
		})
		$.ajax({
			type: 'GET',
			url: '/studyActivity/getActivityByPage',
			data: {
				current: 0
			},
			success: (data) => {
				that.setState({
					pageData: data.data
				});
				// 生成页数
				that.setState({
					pageNum: Math.ceil( this.state.itemNum / 8 )
				})

			}
		});
	}

	componentDidMount() {
		this.requestActivityData();
		// 下一页

	}

	render() {
		let pageData = this.state.pageData.map( ( item, index ) => {
			return <div className={styles.lessonItem}>
		    	   	<img className={styles.lessItemImg} src='{item.pictureUrl}' />
		    	   	<div className={styles.lessItemCon}>
		    	   		<h3 className={styles.lessItemTit}>{item.title}</h3>
		    	   		<div className={styles.lessItemPer}>发布人：<span>{item.author}</span></div>
		    	   		<span className={styles.lessItemDate}>{item.date}</span>
		    	   		<p className={styles.lessItemPar}>{item.summary}</p>
		    	   		<a href={'/studyActivityDet?activityId=' + item.activityId} className={styles.lessItemMore}>课程详情</a>
		    	   	</div>
		    	   </div>
		} )
		let liArr = [];
		if(this.state.pageNum) {
			let liData
			for (let i = 1; i <= this.state.pageNum; i++) {
				liArr.push(i)
			}
		}
		let liData = liArr.map((item, index) => {
			return <li className={styles.pageUlItem}>{index + 1}</li>
		})

		return (
			<div className={styles.conWra}>
				<div className={styles.container}>
				    <div className={styles.activity}>
				        <h2 className={styles.activityTit}>教学活动</h2>
			    	    <div className={styles.activityCon}>
			    	    	<div className={styles.lessonArea} id='lessonArea'>
			    	    	{ pageData }
			    	    	</div>
			    	    	<div className={styles.lessonPage}>
			    	    		<span className={styles.preBtn} id='preBtn'>&lt;上一页</span>
			    	    		<ul className={styles.pageUl} id='pageUl'>
			    	    		{ liData }
			    	    		</ul>
			    	    		<span className={styles.nexBtn} id='nexBtn'>下一页&gt;</span>
			    	    		<span className={styles.itemNum}>共<strong>{this.state.pageNum}</strong>页</span>
			    	    	</div>
			    	    </div>
				    </div>
				</div>
			</div>
		)
	}
}