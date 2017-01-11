import React from 'react'

import style from './about.css'

class About extends React.Component{
	render(){
		return (
			<div className={style.main}>
				<div className={style.main_wrap}>
					<div className={style.title}>
						<h2 className={style.title1}>关于我们</h2>
					</div>
					<div className={style.content}>
						<div className={style.section}>
							<div className={style.pic_show}>
								<img src="./img/mayun.png" alt="关于我们"/>
							</div>
							<p>
								关于我们关于我们关于我们关于我们关于我们关于我们关于我们
							</p>
						</div>
						<div className={style.section}>
							<div className={style.pic_show}>
								<img src="./img/mayun.png" alt="关于我们"/>
							</div>
							<p>
								关于我们关于我们关于我们关于我们关于我们关于我们关于我们
							</p>
						</div>
						<div className={style.reseach_dir}>
							<div className={style.reseach_tit}>
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