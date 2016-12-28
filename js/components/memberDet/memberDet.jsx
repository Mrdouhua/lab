import React from 'react'
import ReactDOM from 'react-dom'

import $ from '../../lib/jquery.js'

class MemberDet extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			member: [
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
					"summary": "jianjie"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
					"summary": "jianjie"
				},
				{
					"picture": "./img/member1.png",
					"name": "mo",
					"position": "xuesheng",
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
					<div className='title'>
						<h2 className='title1'>成员介绍</h2>
					</div>
					<div className="mem-wrap">
						<div className="information">
							<div className="member-pic">
								<img src={this.state.member[1]["picture"]} alt="成员"/>
							</div>
							<div className="basic-info">
								<p className="member-name">{this.state.member[1]["name"]}</p>
								<div className="job">
									<span>担任职位：</span>
									<p className="job-name">{this.state.member[0]["name"]}</p>
								</div>
								<div className="email">
									<span>邮箱：</span>
									<p className="email1">{this.state.member[0]["id"]}</p>
								</div>
							</div>
						</div>
						<div className="detail mt30">
							<h3 className="info-tit">个人介绍</h3>
							<p>
								{this.state.member[0]["summary"]},{this.state.member[0]["id"]},{this.state.member[0]["name"]}
							</p>
						</div>
						<div className="detail">
							<h3 className="info-tit">研究项目</h3>
							<p>ppppppppppppppppppppppppp</p>
						</div>
						<div className="detail">
							<h3 className="info-tit">论文及著作</h3>
							<p>ppppppppppppppppppppppppp</p>
						</div>
						<div className="detail">
							<h3 className="info-tit">获得荣誉</h3>
							<p>pppppppppppppppppppppppppppp</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = MemberDet