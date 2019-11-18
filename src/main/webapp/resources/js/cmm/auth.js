"use strict"
var auth = auth || {}
auth = (()=>{
  const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.'
  let _,js,css,img,router_js;
  let init =()=>{
     _=$.ctx()
     js=$.js()
     css=$.css()
     img=$.img()
     router_js = js+'/cmm/router.js'
  }
  let onCreate =()=>{
       init()
       $.when(
       ).done(()=>{
           setContentView()
       }).fail(()=>{
           alert(WHEN_ERR)
       })
  }
    let setContentView =()=>{
    	 alert('Hello 동엽')
    }
        return{onCreate}
    
})()