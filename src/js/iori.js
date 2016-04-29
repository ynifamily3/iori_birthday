/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
"use strict";

var $ = require('jquery')
var React = require('react');
var ReactDom = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var WebFont = require('webfontloader');

var hentai = ["変態", "へんたい", "Hentai", "헨타이", "변태"];
var color = ["#e22b30", "#2743d2", "#d3dde9", "#f39939", "#01a860", "#9238be", "#fd99e1", "#515558", "#ffe43f", "#ffe43f", "#b4e04b", "#01adb9", "#a6126a"];

var IoriComponent = React.createClass({
    render: function() {
        return (
            <div>
                <BackGround/>
                <Container/>
            </div>
        )
    }
});

var BackGround = React.createClass({
    render: function() {
        return (
            <div id="bg">
                <img src="./dist/img/background.jpg" alt="iori"/>
            </div>
        )
    }
});

var Container = React.createClass({
    getInitialState: function() {
      return {ready:false};  
    },
    handleClick: function(event) {
        event.preventDefault()
        this.setState({ready: true});
    },
    render: function() {
        var InteractiveArea = this.state.ready ? <HentaiList/> : <a href="#" className="btn" onClick={this.handleClick}>READY!!</a>;
        return (
            <div id="container">
                <p className="large">2016 May 05</p>
                <p className="large">IORI MINASE</p>
                <p className="large">HAPPY BIRTHDAY</p>
                <h1 className="title">미나세 이오리의 생일을 축하합니다.</h1>
                {InteractiveArea}
            </div>
        )
    }
})

var HentaiList = React.createClass({
    updateNode: function() {
        var newData = this.state.data;
        newData.push({
            id: this.state.count,
            string: hentai[Math.floor(Math.random() * hentai.length)],
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            size: (Math.floor(Math.random() * 5) + 2) + "em",
            color: color[Math.floor(Math.random() * color.length)]
        });
        if (newData.length > 500) {
            newData.shift();
        }
        this.setState({data: newData, count: this.state.count + 1});
    },
    componentDidMount: function() {
        this.updateNode();
        setInterval(this.updateNode, 300);
    },
    getInitialState: function() {
        return {
            count: 0,
            data: []
        }
    },
    render: function() {
        var HentaiNode = this.state.data.map(function(data) {
            return (
                <Hentai key={data.id} str={data.string} top={data.top} left={data.left} size={data.size} color={data.color} />
            )
        })
        return (
            <div>
                <AudioPlayer />
                <div id="hentaiContainer">
                    <ReactCSSTransitionGroup transitionName="hentai" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                        {HentaiNode}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
   } 
});

var Hentai = React.createClass({
    render: function() {
        return (
            <span className="do-hentai" style={{left: this.props.left, top: this.props.top, fontSize: this.props.size, color: this.props.color}}>{this.props.str}</span>
        )
    }
})

var AudioPlayer = React.createClass({
    render: function() {
       return (
         <audio controls autoPlay className="hentai" loop>
            <source src="./dist/mp3/bgm.mp3" type="audio/mpeg"/>
         </audio>   
       )
   } 
})

$('body').ready(function() {
    WebFont.load({
        google: {
            families: ['Lato:300, 400']
        }
    });
    console.log("하아? 어딜 보는거야! 벼...변태! 진성 변태! 변태 어른!");
    ReactDom.render(
        <IoriComponent/>, 
        document.getElementById('IORI_MINASE')
    );
})
