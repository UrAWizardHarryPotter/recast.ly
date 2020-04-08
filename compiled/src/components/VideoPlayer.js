import exampleVideoData from '../data/exampleVideoData.js';

var VideoPlayer = ({ video }) => React.createElement(
  "div",
  { className: "video-player" },
  React.createElement(
    "div",
    { className: "embed-responsive embed-responsive-16by9" },
    React.createElement("iframe", { className: "embed-responsive-item", src: `https://www.youtube.com/embed/${video.id.videoId}autoplay=1`, allowFullScreen: true })
  ),
  React.createElement(
    "div",
    { className: "video-player-details" },
    React.createElement(
      "h3",
      null,
      video.snippet.title
    ),
    React.createElement(
      "div",
      null,
      video.snippet.description
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJleGFtcGxlVmlkZW9EYXRhIiwiVmlkZW9QbGF5ZXIiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInNuaXBwZXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsNkJBQTdCOztBQUVBLElBQUlDLGNBQWMsQ0FBQyxFQUFFQyxLQUFGLEVBQUQsS0FDaEI7QUFBQTtBQUFBLElBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFLG9DQUFRLFdBQVUsdUJBQWxCLEVBQTBDLEtBQU0saUNBQWdDQSxNQUFNQyxFQUFOLENBQVNDLE9BQVEsWUFBakcsRUFBOEcscUJBQTlHO0FBREYsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBS0YsWUFBTUcsT0FBTixDQUFjQztBQUFuQixLQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1KLFlBQU1HLE9BQU4sQ0FBY0U7QUFBcEI7QUFGRjtBQUpGLENBREY7O0FBWUE7QUFDQTtBQUNBTixZQUFZTyxTQUFaLEdBQXdCO0FBQ3RCTixTQUFPTyxVQUFVQyxNQUFWLENBQWlCQztBQURGLENBQXhCOztBQUlBO0FBQ0E7QUFDQSxlQUFlVixXQUFmIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnLi4vZGF0YS9leGFtcGxlVmlkZW9EYXRhLmpzJztcblxudmFyIFZpZGVvUGxheWVyID0gKHsgdmlkZW8gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW8uaWQudmlkZW9JZH1hdXRvcGxheT0xYH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57dmlkZW8uc25pcHBldC50aXRsZX08L2gzPlxuICAgICAgPGRpdj57dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcbiJdfQ==