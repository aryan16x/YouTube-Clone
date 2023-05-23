import React, { Component, useState } from 'react'
import "./main.css"
import Video from './Video'
import { Link } from 'react-router-dom'

export class Main extends Component {

  constructor(){
    super();
    this.state = {
      datax : this.datax,
      loading: false,
      page: 0
    }
  }

  async update_page(){
    let url= `https://internship-service.onrender.com/videos?page=${this.state.page}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({datax: parsed_data.data.posts})
    this.setState({loading: true});
  }

  async componentDidMount(){
    this.update_page();
  }

  previous_page = ()=>{
    this.setState({page: this.state.page-1});
    this.update_page();
  }

  next_page = ()=>{
    this.setState({page: this.state.page+1});
    this.update_page();
  }

  render(){

    return (
    <div className='Main'>
      <h2>Recommanded</h2>
      <div className="row main_video">
      {this.state.loading && this.state.datax.map((element)=>{
        return <div className="col-sm-4">
        <Link to={"/video"}><Video 
          key={element.postId}
          image={element.submission.thumbnail}
          title={element.submission.title}
          channel={element.creator.handle}
          views = {element.reaction.count}
          timestamps="1 day ago"
          discription={element.submission.description}
          mediaUrl={element.submission.mediaUrl}
          hyperLink={element.submission.hyperlink}
          commentCount={element.comment.count}
          pic={element.creator.pic}
        /></Link>
      </div>
      })}
        
      </div>
      <div className="pagination_button">
        <button disabled={this.state.page<1} className='previous_button' onClick={this.previous_page}>Previous</button>
        <button className='next_button' onClick={this.next_page}>Next</button>
      </div>
    </div>
  )
}
}

export default Main