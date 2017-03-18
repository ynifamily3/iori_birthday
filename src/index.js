import React, { Component } from 'react'
import ReactDom from 'react-dom'
import WebFont from 'webfontloader'
import App from './App'

WebFont.load({
  custom: {
    families: ['Spoqa Han Sans', 'Spoqa Han Sans JP'],
    urls: [
      'https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.0/css/SpoqaHanSans-kr.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/spoqa-han-sans/2.1.0/css/SpoqaHanSans-jp.min.css'
    ]
  }
})

ReactDom.render(
  <App />, 
  document.getElementById("IORI_MINASE")
)

console.log("하아? 어딜 보는거야! 벼...변태! 진성 변태! 변태 어른!")
