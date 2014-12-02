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

  renderFormControl: function() {
    return <input className="form-control" defaultValue={this.props.defaultValue} onChange={this.props.onChange}/>;
  }
});
