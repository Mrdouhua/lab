import React from 'react'
import ReactDom from 'react-dom'

import $ from '../../lib/jquery.js'
import style from './studyTrends.css'

class StudyTrends extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: "加载中",
			pageNum: 1
		};
	}

	page() {
		let getPage = {
			oContent: $('.content'), // 分页内容的容器
			oLists: '', // 分页里面总的内容
			oStart: $('.start'), // 首页按钮
			oLast: $('.last'), //尾页按钮
			oPrev: $('.prev'), // 上一页按钮
			oNext: $('.next'), // 下一页按钮
			pageLen: 5, // 每页显示多少条
			pageNum: 0, // 共有多少页
			index: 0, // 当前页数的索引值
			oUl: $('.page ul'),
			oUlLi: '', // 为0
			oSpan: $('.page span'), // 取得控制按钮
		};
		// 请求第一次数据(1~3页)
		( () => {
			let promise = new Promise((resolve,reject)=>{
				$.ajax({
					type: "post",
					url: "http://rap.taobao.org/mockjsdata/9989/strudyTrends",
					dataType: "json",
					success: (data) => {
						if(data.status!=0){
							resolve(data);
						} else {
							reject(new Error("验证失败!"));
						}
					},
					error: () => {
						reject(new Error("网络错误!"));
					}
				})
			})
			promise.then((data)=>{
				initPage(data);
				addPageNum();
				showPage(0);
				// 点击页数切换
				$(getPage.oUlLi).click(function(){
					getPage.index = $(this).index();
					showPage(getPage.index);
				});
			}).catch((value)=>{
				alert(value);
			});
		})()
		// 添加页数
		const addPageNum = () => {
			let str = '';
			for(var i = 1;i <= getPage.pageNum;i++){
				str += '<li>'+i+'</li>';
			}
			getPage.oUl.html(str);
			getPage.oUlLi = getPage.oUl.find('li');
		}

		// 初始化页面
		const initPage = (data) => {
			let initPageCon = data.data,
				aStr = '';

			initPageCon.map((item) => {
				aStr += "<div class='items'>" + 
						"	<h2 class='items-tit'>" + 
								item.title1 +	
						"	</h2>" + 
						"	<div>" + 
								item.content1 + 
						"	</div>" + 
						"</div>";
			})
			$(getPage.oContent).html(aStr); // 将内容添加到页面
			getPage.oLists = $(getPage.oContent).find('.items'); // 找出页面共有多少条内容
			let oListsLen = getPage.oLists.length; // 求出内容的条数
			getPage.pageNum = Math.ceil(oListsLen/getPage.pageLen); // 根据内容数与每页显示条数求出多少页
			$('.allNum').html("共"+getPage.pageNum+"页");
		}

		// 判断是否处于首页和尾页
		const isFirstLast = () => {
			if(getPage.index == 0){
				getPage.oPrev.addClass('forbid');
				getPage.oStart.addClass('forbid');
				getPage.oNext.removeClass('forbid');
				getPage.oLast.removeClass('forbid');
				return false;
			}
			else if(getPage.index == (getPage.pageNum - 1)){
				getPage.oNext.addClass('forbid');
				getPage.oLast.addClass('forbid');
				getPage.oPrev.removeClass('forbid');
				getPage.oStart.removeClass('forbid');
				return false;
			} else {
				getPage.oSpan.removeClass('forbid');
			}
		}

		// 点击下一页切换
		getPage.oNext.click( () => {
			if(getPage.index == (getPage.pageNum - 1)){
				alert('这是尾页!');
				return false;
			}
			getPage.index +=1;
			showPage(getPage.index);
		})
		// 点击上一页切换
		getPage.oPrev.click( () => {
			if(getPage.index == 0){
				alert('这是首页!');
				return false;
			}
			getPage.index -=1;
			showPage(getPage.index);
		})

		// 点击首页切换
		getPage.oStart.click( () => {
			if(getPage.index == 0){
				alert('这是首页!');
				return false;
			}
			getPage.index = 0;
			showPage(getPage.index);
		})
		// 点击尾页切换
		getPage.oLast.click( () => {
			if(getPage.index == (getPage.pageNum - 1)){
				alert('这是尾页!');
				return false;
			}
			getPage.index = getPage.pageNum - 1;
			showPage(getPage.index);
		})
		// 显示页面
		const showPage = (num) => {
			$(getPage.oLists).hide();
			for(var i = getPage.index * getPage.pageLen;i < (getPage.index + 1) * getPage.pageLen;i++){
				$(getPage.oLists[i]).css({"display":"block"});
			}
			$(getPage.oUlLi).eq(num).addClass('active').siblings().removeClass('active');
			isFirstLast();
		}
	}

	componentDidMount() {
		this.page()
	}

	render() {
		return (
			<div className={style.main}>
				<div className={style.main_wrap}>
					<div className={style.title}>
						<h2 className={style.title1}>研究动态</h2>
					</div>
					<div className={style.container}>
						<div className={style.content}>
							<div className={style.items}>
								<h2 className={style.items_tit}>标题</h2>
								<div className={style.items_con}>{this.state.data}</div>
							</div>
						</div>
						<div className={style.page_container}>
							<div className={style.page}>
								<span className={style.start}>首页</span>
								<span className={style.prev}>上一页</span>
								<ul className={style.pageNum}></ul>
								<span className={style.next}>下一页</span>
								<span className={style.last}>尾页</span>
								<div className={style.allNum}>共{this.state.pageNum}页</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = StudyTrends