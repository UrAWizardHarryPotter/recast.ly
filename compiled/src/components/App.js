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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement(
          'div',
          { className: 'col-md-6 offset-md-3' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'h5',
              null,
              React.createElement(
                'em',
                null,
                'search'
              ),
              ' view goes here'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-7' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'h5',
              null,
              React.createElement(
                'em',
                null,
                React.createElement(VideoPlayer, { video: this.state.currentVideo })
              ),
              ' view goes here'
            )
          )
        ),
        React.createElement(VideoList, {
          videos: this.state.videos,
          handleVideoListEntryTitleClick: this.handleVideoListEntryTitleClick.bind(this)
        })
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZVZpZGVvRGF0YSIsIlZpZGVvTGlzdCIsIlZpZGVvUGxheWVyIiwiU2VhcmNoIiwiWU9VVFVCRV9BUElfS0VZIiwic2VhcmNoWW91VHViZSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmlkZW9zIiwiY3VycmVudFZpZGVvIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRZb3VUdWJlVmlkZW9zIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwidmlkZW8iLCJzZXRTdGF0ZSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLDZCQUE3QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixrQkFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsZUFBUCxNQUE0Qiw4QkFBNUI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDhCQUExQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRWixnQkFERztBQUVYYSxvQkFBY2IsaUJBQWlCLENBQWpCO0FBRkgsS0FBYjtBQUlEOztBQUVEYyxzQkFBb0I7QUFDbEIsU0FBS0MsZ0JBQUwsQ0FBc0IsY0FBdEI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxpQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQ3BDLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxvQkFBY0k7QUFERixLQUFkO0FBR0Q7O0FBRURFLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQTtBQUFBO0FBQUw7QUFERjtBQURGLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBSSxvQ0FBQyxXQUFELElBQWEsT0FBTyxLQUFLUixLQUFMLENBQVdFLFlBQS9CO0FBQUosZUFBSjtBQUFBO0FBQUE7QUFBTDtBQURGLFNBREY7QUFJRSw0QkFBQyxTQUFEO0FBQ0Usa0JBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQURyQjtBQUVFLDBDQUFnQyxLQUFLSSw4QkFBTCxDQUFvQ0ksSUFBcEMsQ0FBeUMsSUFBekM7QUFGbEM7QUFKRjtBQU5GLEtBREY7QUFtQkQ7QUF0RCtCOztBQTBEbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZWQsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhhbXBsZVZpZGVvRGF0YSBmcm9tICcuLi9kYXRhL2V4YW1wbGVWaWRlb0RhdGEuanMnO1xuaW1wb3J0IFZpZGVvTGlzdCBmcm9tICcuL1ZpZGVvTGlzdC5qcyc7XG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi9WaWRlb1BsYXllci5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBZT1VUVUJFX0FQSV9LRVkgZnJvbSAnLi4vY29uZmlnL3lvdXR1YmUuZXhhbXBsZS5qcyc7XG5pbXBvcnQgc2VhcmNoWW91VHViZSBmcm9tICcuLi9jb25maWcveW91dHViZS5leGFtcGxlLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW9zOiBleGFtcGxlVmlkZW9EYXRhLFxuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhWzBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0WW91VHViZVZpZGVvcygnY3V0ZSBraXR0ZW5zJyk7XG4gIH1cblxuICAvLyBnZXRZb3VUdWJlVmlkZW9zKHF1ZXJ5KSB7XG4gIC8vICAgdmFyIG9wdGlvbnMge1xuICAvLyAgICAga2V5OiAnSU5QVVQgS0VZJyxcbiAgLy8gICAgIHF1ZXJ5OiBxdWVyeVxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMucHJvcHMuc2VhcmNoWW91VHViZShvcHRpb25zLCAodmlkZW9zKSA9PiB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgdmlkZW9zOiB2aWRlb3MsXG4gIC8vICAgICAgIGN1cnJlbnRWaWRlbzogdmlkZW9zWzBdXG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayh2aWRlbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZGVvOiB2aWRlb1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxkaXY+PGg1PjxlbT5zZWFyY2g8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxkaXY+PGg1PjxlbT48VmlkZW9QbGF5ZXIgdmlkZW89e3RoaXMuc3RhdGUuY3VycmVudFZpZGVvfSAvPjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VmlkZW9MaXN0XG4gICAgICAgICAgICB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfVxuICAgICAgICAgICAgaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrPXt0aGlzLmhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cblxuLy8gdmFyIEFwcCA9ICgpID0+IChcblxuLy8gICA8ZGl2PlxuLy8gICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4vLyAgICAgICAgIDxkaXY+PGg1PjxlbT5zZWFyY2g8L2VtPiB2aWV3IGdvZXMgaGVyZTwvaDU+PC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L25hdj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuLy8gICAgICAgICA8ZGl2PjxoNT48ZW0+PFZpZGVvUGxheWVyIHZpZGVvPXtleGFtcGxlVmlkZW9EYXRhWzBdfSAvPjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPFZpZGVvTGlzdCB2aWRlb3M9e2V4YW1wbGVWaWRlb0RhdGF9IC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=