import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'
import style from './studyActivity.css'

class StudyActivity extends React.Component{
	render(){
		return (
			<div className={style.conWrap}>
				<div className={style.container}>
				    <div className={style.activity}>
				        <h2 className={style.lessonTit}>教学活动</h2>
			    	    <div className={style.lessonCon}>
			    	    	<div className={style.lessonArea}>
			    	    	</div>
			    	    	<div className={style.lessonPage}>
			    	    		<span className={style.preBtn}>上一页</span>
			    	    		<ul className={style.pageUl}>	
			    	    		</ul>
			    	    		<span className={style.nexBtn}>下一页</span>
			    	    	</div>
			    	    </div>
			    	    <span className={style.itemNum}>共<strong></strong>页</span>
				    </div>
				</div>
			</div>
		)
	}
}

module.exports = StudyActivity