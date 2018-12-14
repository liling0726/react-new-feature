import React, { Component} from 'react'
import { ThemeContext } from './theme-context'
export default class ThemeButton extends Component{
  static contextType = ThemeContext
  render(){
    return <React.Fragment>
    <ThemeContext.Consumer>
    {
     ({theme})=>(
      <button {...this.props} style={theme}>测试</button>
     ) 
    }
    </ThemeContext.Consumer>
    <button style={this.context.theme}>测试1</button>
    </React.Fragment>
    
    
  }
}