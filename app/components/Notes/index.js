import React, { Component, PropTypes } from 'react';
import NoteList from './NoteList.js';

export default class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired
  }
  render(){
    return (
      <div>
        <p> 对{this.props.username}评论 </p>
        <NoteList  notes={this.props.notes}/>
      </div>
    )
  }
}
