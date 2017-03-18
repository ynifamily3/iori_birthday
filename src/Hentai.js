import React, { Component } from 'react'

class Hentai extends Component {
  render() {
  	return (
    	<span style={
    		{
    			left: this.props.left,
    			top: this.props.top,
    			fontSize: this.props.size,
    			color: this.props.color,
    			position: 'fixed',
    			textShadow: '2px 2px 2px rgba(33, 33, 33, 0.5)'
    		}
    	}>
    		{this.props.str}
    	</span>
  	)
	}
}

export default Hentai
