import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = async ()=>{
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
		//发送请求前通知List更新状态
		PubSub.publish('bjfu',{isFirst:false,isLoading:true})
		
    //#region 发送网络请求 --使用axios发送
		/*axios.get(`/api1/search/users?q=${keyWord}`).then(
			response => {
				//请求成功后通知List更新状态
				PubSub.publish('bjfu',{isLoading:false,users:response.data.items})
			},
			error => {
				//请求失败后通知App更新状态
				PubSub.publish('bjfu',{isLoading:false,err:error.message})
			}
		)*/
    //#endregion
  
    // 发送网络请求 --使用fetch发送
      try {
        const response = await fetch(`/api1/search/users?q=${keyWord}`)
        const data = await response.json()
        PubSub.publish('bjfu',{isLoading:false,users:data.items})
      } catch (error) {
        PubSub.publish('bjfu',{isLoading:false,err:error.message})
      }
	}

  render() {
    return (
      <div>
        <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
      </div>
    )
  }
}
