// import exampleVideoData.js
import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

class VideoList extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoData = exampleVideoData;

    return (
      <div className="video-list">
        {videoData.map(video =>

          <VideoListEntry videoObj={streams} />

        )}
      </div>


    );
  }
}


// var VideoList = (propTypes) => (
//   <div className="video-list">
//     <div><h5><em>{propTypes.snippet.title}</em><img src={propTypes.snippet.thumbnails.url}></img></h5></div>
//     <div><h5><em>{propTypes.snippet.title}</em><img src={propTypes.snippet.thumbnails.url}></img></h5></div>
//     <div><h5><em>{propTypes.snippet.title}</em><img src={propTypes.snippet.thumbnails.url}></img></h5></div>
//     <div><h5><em>{propTypes.snippet.title}</em><img src={propTypes.snippet.thumbnails.url}></img></h5></div>
//     <div><h5><em>{propTypes.snippet.title}</em><img src={propTypes.snippet.thumbnails.url}></img></h5></div>
//   </div>
// );

// var movies = VideoListEntry();

// ReactDOM.render(<VideoList title={movies.snippet.title} photoURL={movies.snippet.thumbnails.url} />, document.getElementById('app'));

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
