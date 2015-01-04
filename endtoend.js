// Generated by CoffeeScript 1.7.1
L.Control.EndToEndCursor = L.Control.extend({
  onAdd: function(map) {
    this._lns = L.multiPolyline([[L.latLng(0, 0), L.latLng(0, 0)], [L.latLng(0, 0), L.latLng(0, 0)]], {
      color: 'grey',
      weight: 1
    });
    this._lns.addTo(map);
    this._container = L.DomUtil.create('div');
    map.on('mousemove', this.myMove, this);
    return this._container;
  },
  myMove: function(e) {
    return this._lns.setLatLngs([[L.latLng(e.latlng.lat, -1800), L.latLng(e.latlng.lat, 1800)], [L.latLng(1000, e.latlng.lng), L.latLng(-1000, e.latlng.lng)]]);
  }
});

L.control.endToEndCursor = function(options) {
  return new L.Control.EndToEndCursor(options);
};
