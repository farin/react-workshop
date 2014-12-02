/** @jsx React.DOM */
var SKIN_COLORS = [
  {value: 'PapayaWhip', name: 'White'},
  {value: 'SaddleBrown', name: 'Brown'},
  {value: 'LemonChiffon', name: 'Yellow'}
];

var DRESS_COLORS = [
  {value: 'OliveDrab', name: 'Olive'},
  {value: 'CornflowerBlue', name: 'Blue'},
  {value: 'Crimson', name: 'Crimson'},
  {value: 'Gold', name: 'Gold'}
];


var AvatarDesigner = React.createClass({
  render: function() {
    var s = this.props.size;
    return (
      <svg width={this.props.size} height={this.props.size}>
        <rect width={s/2} height={s/2} x={s/4} y={s/2} fill={DRESS_COLORS[0].value}></rect>
        <circle r={s/4} cx={s/2} cy={0.3*s} fill={SKIN_COLORS[0].value}></circle>
        <circle r={s/20} cx={0.4*s} cy={s/4} fill="black"></circle>
        <circle r={s/20} cx={0.6*s} cy={s/4} fill="black"></circle>
        <rect width={s/8} height={s/40} x={0.44*s} y={0.4*s} fill="black"></rect>
      </svg>
    );
  }
});

var AvatarForm = React.createClass({
  render: function() {
    return (
      <form>
        <div className="form-group">
          <label>Skin color</label>
          <select className="form-control">
            {SKIN_COLORS.map(function(color) {
              return (<option key={color.value} value={color.value}>{color.name}</option>);
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Dress color</label>
          <select className="form-control">
            {DRESS_COLORS.map(function(color) {
              return (<option key={color.value} value={color.value}>{color.name}</option>);
            })}
          </select>
        </div>
      </form>
    );
  }
});

React.render(
  <AvatarDesigner size={400}/>,
  document.getElementById('avatar-designer')
);

React.render(
  <AvatarForm/>,
  document.getElementById('avatar-form')
);