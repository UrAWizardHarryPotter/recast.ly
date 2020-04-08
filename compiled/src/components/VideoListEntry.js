var VideoListEntry = ({ video, handleVideoListEntryTitleClick }) => React.createElement(
  "div",
  { className: "video-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: video.snippet.thumbnails.default.url, alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      {
        className: "video-list-entry-title",
        onClick: () => {
          handleVideoListEntryTitleClick(video);
        }
      },
      video.snippet.title
    ),
    React.createElement(
      "div",
      { className: "video-list-entry-detail" },
      video.snippet.description
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInZpZGVvIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGlCQUFpQixDQUFDLEVBQUVDLEtBQUYsRUFBU0MsOEJBQVQsRUFBRCxLQUNuQjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5QkFBZjtBQUNFLGlDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLRCxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFwRSxFQUF5RSxLQUFJLEVBQTdFO0FBREYsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLHdCQURaO0FBRUUsaUJBQVMsTUFBTTtBQUFFSix5Q0FBK0JELEtBQS9CO0FBQXdDO0FBRjNEO0FBR0VBLFlBQU1FLE9BQU4sQ0FBY0k7QUFIaEIsS0FERjtBQUtFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUJBQWY7QUFBMENOLFlBQU1FLE9BQU4sQ0FBY0s7QUFBeEQ7QUFMRjtBQUpGLENBREY7O0FBZUE7QUFDQTtBQUNBUixlQUFlUyxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxVQUFVQyxNQUFWLENBQWlCQztBQURDLENBQTNCOztBQUlBO0FBQ0E7QUFDQSxlQUFlWixjQUFmIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvTGlzdEVudHJ5ID0gKHsgdmlkZW8sIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXt2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayh2aWRlbyk7IH19XG4gICAgICA+e3ZpZGVvLnNuaXBwZXQudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+e3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgVmlkZW9MaXN0RW50cnk7XG4iXX0=