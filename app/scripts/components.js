/** @jsx React.DOM */

window.SelectWidget = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <select className="form-control" defaultValue={this.props.defaultValue} onChange={this.props.onChange}>
          {this.props.options.map(function(color) {
            return (<option key={color.value} value={color.value}>{color.name}</option>);
          })}
        </select>
      </div>
    );
  }
});

window.InputWidget = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input className="form-control" defaultValue={this.props.defaultValue} onChange={this.props.onChange}/>
      </div>
    );
  }
});
