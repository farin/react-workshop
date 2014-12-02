//http://www.abidibo.net/blog/2014/01/16/javascript-event-dispatcher/

window.EventDispatcher = {
  _prefix: 'on_',
  listeners: {},
  register: function(evt_name, bind, callback) {
    var _evt_name = this._prefix + evt_name;
    if(typeof this.listeners[_evt_name] == 'undefined') {
      this.listeners[_evt_name] = [];
    }
    this.listeners[_evt_name].push([bind === null ? this : bind, callback]);
  },
  emit: function(evt_name, params) {
    var _evt_name = this._prefix + evt_name;
      if(typeof this.listeners[_evt_name] != 'undefined') {
        for(var i = 0, l = this.listeners[_evt_name].length; i < l; i++) {
          this.listeners[_evt_name][i][1].call(this.listeners[_evt_name][i][0], evt_name, params);
        }
      }
  }
}