
/**
 * 测试Purecomponent中是引用对象导致的数据不更新问题
 */
import React from 'react'
import WordAdder from './wordAdder'
export default class PureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // 这个地方导致了bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(this.state.words===nextState.words)
    return true
  }
  render() {
    const {words} = this.state
    return (
      <React.Fragment>
        <h2>测试Purecomponent中是引用对象导致的数据不更新问题</h2>
        <button onClick={this.handleClick} >点击修改</button>
        <div> 修改后的state为：{words.join(',')}</div>
        <WordAdder words={words} />
      </React.Fragment>
    );
  }
}