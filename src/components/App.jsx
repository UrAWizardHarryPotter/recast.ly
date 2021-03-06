import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.example.js';
import searchYouTube from '../config/youtube.example.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  // getYouTubeVideos(query) {
  //   var options {
  //     key: 'INPUT KEY',
  //     query: query
  //   }

  //   this.props.searchYouTube(options, (videos) => {
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     });
  //   });
  // }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em> view goes here</h5></div>
          </div>
          <VideoList
            videos={this.state.videos}
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          />
        </div>
      </div>

    );
  }
}


// var App = () => (

//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]} /></em> view goes here</h5></div>
//       </div>
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;