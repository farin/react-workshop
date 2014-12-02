/** @jsx React.DOM */

var FormControlMixin = {
  render: function() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        {this.renderFormControl()}
      </div>
    );
  }
};

window.SelectWidget = React.createClass({
  mixins: [FormControlMixin],

  renderFormControl: function() {
    return (
      <select className="form-control" defaultValue={this.props.defaultValue} onChange={this.props.onChange}>
        {this.props.options.map(function(color) {
          return (<option key={color.value} value={color.value}>{color.name}</option>);
        })}
      </select>
    );
  }
});

window.InputWidget = React.createClass({
  mixins: [FormControlMixin],

  getInitialState: function() {
    return {value: this.props.defaultValue};
  },

  onChange: function(ev) {
    ev.target.value = ev.target.value.replace(/[^- \.\!\?\w]/g, ''); //some validation
    this.setState({value: ev.target.value});
    if (this.props.onChange) this.props.onChange(ev);
  },

  renderFormControl: function() {
    return <input className="form-control" value={this.state.value} onChange={this.onChange}/>;
  }
});
