import React from 'react';

export default class PhotoLarge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: null,
      url: null,
    }
  }

  componentDidMount() {
    //Use photo id from current url to fetch photo title and url
    fetch("https://jsonplaceholder.typicode.com/photos/" + this.props.match.params.photoId)
    .then(response => response.json())
    .then(json => {
      this.setState({title: json.title, 
                    url: json.url});
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.url} alt={this.state.title}></img>
        <div>{this.state.title}</div>
      </div>
    );
  }
}