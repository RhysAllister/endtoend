L.Control.EndToEndCursor = 
L.Control.extend 
  onAdd: (map) ->
    @_lns = L.multiPolyline [
       [L.latLng(0, 0),L.latLng(0, 0)]
       [L.latLng(0, 0),L.latLng(0, 0)]
      ],
      {color: 'grey', weight: 1}
    @_lns.addTo map
    @_container = L.DomUtil.create('div') #, 'leaflet-bar')
    map.on 'mousemove', @myMove, @
    @_container
    
  myMove: (e) ->
    @_lns.setLatLngs  [
      [L.latLng(e.latlng.lat,-1800) ,L.latLng(e.latlng.lat, 1800)]
      [L.latLng(1000,e.latlng.lng) ,L.latLng(-1000,e.latlng.lng)]
      ]

L.control.endToEndCursor =  (options) ->
    return new L.Control.EndToEndCursor options
