var Search = ({ handleSearchInputChange }) => React.createElement(
  "div",
  { className: "search-bar form-inline" },
  React.createElement("input", {
    className: "form-control",
    type: "text",
    onChange: e => handleSearchInputChange(e.target.value)
  }),
  React.createElement(
    "button",
    { className: "btn hidden-sm-down" },
    React.createElement("span", { className: "glyphicon glyphicon-search" })
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVMsQ0FBQyxFQUFFQyx1QkFBRixFQUFELEtBQ1g7QUFBQTtBQUFBLElBQUssV0FBVSx3QkFBZjtBQUNFO0FBQ0UsZUFBVSxjQURaO0FBRUUsVUFBSyxNQUZQO0FBR0UsY0FBV0MsQ0FBRCxJQUFPRCx3QkFBd0JDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBakM7QUFIbkIsSUFERjtBQU1FO0FBQUE7QUFBQSxNQUFRLFdBQVUsb0JBQWxCO0FBQ0Usa0NBQU0sV0FBVSw0QkFBaEI7QUFERjtBQU5GLENBREY7O0FBYUE7QUFDQTtBQUNBLGVBQWVKLE1BQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9ICh7IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdfQ==