import React, { Component } from 'react'
import AudioPlayer from './AudioPlayer'
import HentaiList from './HentaiList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false
    }
  }

  render() {
    return (
      <div id="container">
        <p className="lead">
          2016 May 05<br />
          IORI MINASE<br />
          HAPPY BIRTHDAY
        </p>
        <h1>미나세 이오리의 생일을 축하합니다.</h1>
        {
          (this.state.ready)?(
            <div>
              <AudioPlayer />
              <HentaiList />
            </div>
          ):(
            <a
              className="button"
              role="button"
              href="#"
              className="button"
              onClick={
                (e) => {
                  e.preventDefault()
                  this.setState({ready: true})
                }
              }
            >
              READY!!
            </a>
          )
        }
        <p className="credit">
          by 
          <a href="https://twitter.com/mijelu9" className="mijelu9">@mijelu9</a>, 
          <a href="https://twitter.com/niceb5y" className="niceb5y">@niceb5y</a>
        </p>
        <style jsx global>{`
          html {
            font-family: "Lato", "맑은 고딕", "Apple SD Gothic Neo", sans-serif;
            background: url(./assets/img/background.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
        `}</style>
        <style jsx>{`
          #container {
            z-index: 1;
            position: relative;
            max-width: 960px;
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            margin: 0 auto;
            text-align: center;
          }

          p.lead {
            font-size: 4.0em;
            font-weight: 300;
            color: #F19EC2;
            text-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
          }

          h1 {
            font-weight: 300;
            color: #F19EC2;
            text-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
          }

          a.button {
            color: #F19EC2;
            border: 2px solid #F19EC2;
            text-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
            margin: 50px auto;
            text-decoration: none;
            border: solid 2px @iori-imas-ml;
            box-sizing: border-box;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 3.0em;
            display: inline-block;
            font-weight: 300;
            transition: background-color 0.3s, color 0.3s, text-shadow 0.3s;   
          }

          a.button:hover, a.button:focus {
            background-color: #F19EC2;
            color: white;
            text-shadow: none;
          }

          p.credit {
            color: #F19EC2;
            text-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
            font-size: 1.2em;
          }

          p.credit a {
            text-decoration: none;
          }

          p.credit a.mijelu9 {
            color: #F39938;
          }

          p.credit a.niceb5y {
            color: #0075C1;
          }
        `}</style>
      </div>
    )
  }
}

export default App
