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

var defaultAvatar = {
  skin: SKIN_COLORS[0].value,
  dress: DRESS_COLORS[0].value
}

var AvatarDesigner = React.createClass({

  getInitialState: function() {
    return defaultAvatar;
  },

  render: function() {
    var s = this.props.size;
    return (
      <svg width={this.props.size} height={this.props.size}>
        <rect width={s/2} height={s/2} x={s/4} y={s/2} fill={this.state.dress}></rect>
        <circle r={s/4} cx={s/2} cy={0.3*s} fill={this.state.skin}></circle>
        <circle r={s/20} cx={0.4*s} cy={s/4} fill="black"></circle>
        <circle r={s/20} cx={0.6*s} cy={s/4} fill="black"></circle>
        <rect width={s/8} height={s/40} x={0.44*s} y={0.4*s} fill="black"></rect>
      </svg>
    );
  }
});

var AvatarForm = React.createClass({

  onPropertyChange: function(prop, ev) {
    var newState = {};
    newState[prop] = event.target.value;
    designer.setState(newState);
  },

  render: function() {
    return (
      <form>
        <SelectWidget
          label="Skin color" defaultValue={defaultAvatar.skin} options={SKIN_COLORS}
          onChange={this.onPropertyChange.bind(this, 'skin')} />
        <SelectWidget
          label="Dress color" defaultValue={defaultAvatar.dress} options={DRESS_COLORS}
          onChange={this.onPropertyChange.bind(this, 'dress')} />
      </form>
    );
  }
});

var designer = React.render(
  <AvatarDesigner size={400}/>,
  document.getElementById('avatar-designer')
);

React.render(
  <AvatarForm/>,
  document.getElementById('avatar-form')
);