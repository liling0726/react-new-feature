import React, {Component}from 'react'
import ThemeButton from './theme-button'
import {ThemeContext,themes} from './theme-context'
export default class ThemeToolBar extends Component{
  constructor(props){
    super(props)
    this.state ={
      theme:themes.dark
    }
  }
  changeTheme=()=>{
    this.setState((state)=>({
      theme:state.theme.color === themes.dark.color ? themes.light : themes.dark
    }))
  }
  render() {
    return <React.Fragment>
      <h2>测试Contenxt</h2>
      <ThemeContext.Provider value={this.state}>
      <ThemeButton />
      </ThemeContext.Provider>
      
      <button onClick={this.changeTheme}>改变主题</button>
    </React.Fragment>
    
  }
}