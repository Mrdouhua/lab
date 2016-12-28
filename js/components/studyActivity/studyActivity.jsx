import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'

class StudyActivity extends React.Component{
	render(){
		return (
			<div className='conWrap'>
				<div className='container'>
				    <div className='activity'>
				        <h2 className='lessonTit'>教学活动</h2>
			    	    <div className='lessonCon'>
			    	    	<div className='lessonArea'>
			    	    	</div>
			    	    	<div className='lessonPage'>
			    	    		<span className='preBtn'>上一页</span>
			    	    		<ul className='pageUl'>	
			    	    		</ul>
			    	    		<span className='nexBtn'>下一页</span>
			    	    	</div>
			    	    </div>
			    	    <span className='itemNum'>共<strong></strong>页</span>
				    </div>
				</div>
			</div>
		)
	}
}

module.exports = StudyActivity