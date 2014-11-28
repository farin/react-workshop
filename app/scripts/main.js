/** @jsx React.DOM */

var AvatarDesigner = React.createClass({
  render: function() {
    return (
      <svg width="400" height="400">
        <rect width="200" height="200" x="100" y="200" fill="OliveDrab"></rect>
        <circle r="100" cx="200" cy="120" fill="PapayaWhip"></circle>
        <circle r="20" cx="160" cy="100" fill="black"></circle>
        <circle r="20" cx="240" cy="100" fill="black"></circle>
        <rect width="50" height="10" x="175" y="160" fill="black"></rect>
      </svg>
    );
  }
});

React.render(
  <AvatarDesigner/>,
  document.getElementById('avatar-designer')
);