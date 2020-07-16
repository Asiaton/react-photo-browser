import React from 'react';

export default class PhotoThumbnail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: null,
      thumbnailUrl: null,
    }
  }

  componentDidMount() {
    //Use id given in props to fetch photo data
    fetch("https://jsonplaceholder.typicode.com/photos/" + this.props.id)
    .then(response => response.json())
    .then(json => {
      this.setState({id: json.id,
                    title: json.title,
                    thumbnailUrl: json.thumbnailUrl});
    });
  }
  
  render() {
    return (
      <a href={"photos/"+this.state.id}>
        <img src={this.state.thumbnailUrl} alt={this.state.title} style={{margin: "2px 5px"}}></img>
      </a>
    );
  }
}