/** @jsx React.DOM */

var AvatarDesigner = React.createClass({
  render: function() {
    var s = this.props.size;
    return (
      <svg width={this.props.size} height={this.props.size}>
        <rect width={s/2} height={s/2} x={s/4} y={s/2} fill="OliveDrab"></rect>
        <circle r={s/4} cx={s/2} cy={0.3*s} fill="PapayaWhip"></circle>
        <circle r={s/20} cx={0.4*s} cy={s/4} fill="black"></circle>
        <circle r={s/20} cx={0.6*s} cy={s/4} fill="black"></circle>
        <rect width={s/8} height={s/40} x={0.44*s} y={0.4*s} fill="black"></rect>
      </svg>
    );
  }
});

React.render(
  <AvatarDesigner size={400}/>,
  document.getElementById('avatar-designer')
);