import React from 'react'
export default class WordAdder extends React.PureComponent {
  render() {
    return <div>传入的props:{this.props.words.join(',')}</div>;
  }
 }