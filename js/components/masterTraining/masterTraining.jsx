import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'

class MasterTraining extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			master: [
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"studyCon": "基于互联网的营销手段",
					"email": "1234567@qq.com"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "基于互联网的营销手段",
					"summary": "jianjie"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "基于互联网的营销手段",
					"summary": "jianjie"
				}
			]
		}
	}

	getMemberInfor() {
		let that = this;
		$.ajax({
			url: 'http://rap.taobao.org/mockjsdata/10008/product/listProduct.do',
			type: 'post',
			success: function(data){
				if(data.status != 0){
					console.log(data.data);
					that.setState({
						member: data.data
					})
				} else {
					alert("请求失败!");
				}
			},
			error: function(){
				alert("网络错误!");
			}
		})
	}

	componentDidMount() {
		this.getMemberInfor();
	}
	render(){
		return (
			<div className="main">
				<div className="main-wrap">
					<div className="title">
						<h2 className="title1">研究生培养</h2>
					</div>
					<div className="items">
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
						<div className="list">
							<img src="./img/mayun.png" alt="头像"/>
							<h3 className='masterPic'>马云</h3>
							<div className="masterInfo">
								<div className="studyCon">
									<h4>研究内容:</h4>
									<p>基于互联网的营销手段</p>
								</div>
								<div className="email mt10">
									<h4>联系邮箱:</h4>
									<p>XXXXXXXXXX@qq.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = MasterTraining