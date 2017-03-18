import React, { Component } from 'react'
import Hentai from './Hentai'

const HENTAI = ["変態", "へんたい", "Hentai", "헨타이", "변태"]
const COLOR = [
  "#E03731", "#0075C1", "#D4E4E5",
  "#F39938", "#0BA95F", "#7D4698",
  "#F19EC2", "#505456", "#FFE33B",
  "#A9CF52", "#A61169", "#09ADB8" 
]

class HentaiList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      data: []
    }
  }

  componentDidMount() {
    var updateNode = () => {
      var newData = this.state.data.slice()
      newData.push({
        id: this.state.count,
        string: HENTAI[Math.floor(Math.random() * HENTAI.length)],
        top: Math.floor(Math.random() * 100) + "%",
        left: Math.floor(Math.random() * 100) + "%",
        size: (Math.floor(Math.random() * 5) + 2) + "em",
        color: COLOR[Math.floor(Math.random() * COLOR.length)]
      })
      if (newData.length > 1000) {
        newData.shift()
      }
      this.setState({data: newData, count: this.state.count + 1})
    }
    setInterval(updateNode, 300)
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.data.map((data) => {
              return (
                <Hentai
                  key={data.id}
                  str={data.string}
                  top={data.top}
                  left={data.left}
                  size={data.size}
                  color={data.color}
                />
              )
            })
          }
        </div>
        <style jsx>{`
          div {
            position: fixed;
            width: 100%;
            height: 100%;
            top:0; 
            left:0;
            right:0;
            bottom:0;
            z-index: 2;
          }
        `}</style>
      </div>
    )
  }
}

export default HentaiList
