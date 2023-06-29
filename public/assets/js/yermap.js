var mapYer = null

var MAP_CONFIGURATION = {
  mapStyle: [
    {
      featureType: 'landscape.natural.landcover',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { hue: '#bfd7e1' },
        { saturation: -20 },
        { lightness: 23 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'all',
      stylers: [
        { hue: '#fefefe' },
        { saturation: -100 },
        { lightness: 96 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'all',
      stylers: [
        { hue: '#f6f3ec' },
        { saturation: 24 },
        { lightness: -1 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        { hue: '#fefefe' },
        { saturation: -100 },
        { lightness: 0 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        { hue: '#efe5cc' },
        { saturation: -48 },
        { lightness: 34 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        { hue: '#d9d5cc' },
        { saturation: -85 },
        { lightness: 24 },
        { visibility: 'on' },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [{ visibility: 'on' }, { color: '#b3d1ff' }],
    },
    { featureType: 'poi.sports_complex', stylers: [{ visibility: 'off' }] },
    { featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
    {
      featureType: 'poi.medical',
      elementType: 'geometry.fill',
      stylers: [{ visibility: 'on' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
  mapDiv: 'map',
  serviceURL: 'https://magui.ypf.com/boxes/eess/get/',
  zoomTo: 14,
  initialPosition: { lat: -35.21358620456825, lng: -63.90978718534506 },
  initialZoom: 6,
  icon: 'https://www.ypf.com/productosyservicios/Paginas/mapa-ypf-ruta/Globa-Ruta.svg',
  serviceFilters: {
    skipCache: true /*,
		YER: "SI"*/,
  },
}

function EESS(data) {
  this.DIRECCION = data.DIRECCION
  this.LOCALIDAD_GEOGRAFICA = data.LOCALIDAD_GEOGRAFICA
  this.TIPO_DESPACHO = data.TIPO_DESPACHO
  this.SERVICLUB = data.SERVICLUB
  this.YER = data.YER
  this.TIPO_FULL = data.TIPO_FULL
  this.BOXES = data.BOXES
  this.PROVINCIA_GEOGRAFICA = data.PROVINCIA_GEOGRAFICA
  this.POINT_X = parseFloat(data.POINT_X)
  this.POINT_Y = parseFloat(data.POINT_Y)

  this.marker = null
  this.infowindow = null
}

EESS.prototype._loadToMap = function (map, icon) {
  var self = this
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.POINT_Y, this.POINT_X),
    map: map.getMap(),
    icon: icon,
  })

  this.marker.addListener('click', () => {
    map._openInfowindow(self.getInfoWindowContent(), self.marker)
  })
}

EESS.prototype.getInfoWindowContent = function () {
  var content = $('<div></div>')
  content.append("<div class='IWHeader'>Estación</div>")
  content.append(
    "<div class='IWLine' style='text-transform:capitalize;'>" +
      this.DIRECCION.toLowerCase() +
      '</div>'
  )
  content.append("<div class='IWLine'><br></div>")
  content.append(
    "<div class='IWHeader'>" + this.LOCALIDAD_GEOGRAFICA + '</div>'
  )
  content.append("<div class='IWLine'>YPF Ruta</div>")
  if (this.TIPO_DESPACHO.toUpperCase() == 'DUAL') {
    content.append("<div class='IWLine'>Naftas y GNC</div>")
  } else if (this.TIPO_DESPACHO.toUpperCase() == 'LIQUIDOS') {
    content.append("<div class='IWLine'>Naftas</div>")
  } else if (this.TIPO_DESPACHO.toUpperCase() == 'GNC') {
    content.append("<div class='IWLine'>GNC</div>")
  }
  if (this.SERVICLUB.toUpperCase() == 'SI') {
    content.append("<div class='IWLine'>YPF ServiClub</div>")
  }
  if (this.TIPO_FULL.toUpperCase().indexOf('FULL') != -1) {
    content.append("<div class='IWLine'>YPF Full</div>")
  }
  return content.html()
}

function ImgOverlayMalvinas(tileSize) {
  this.tileSize = tileSize
}

ImgOverlayMalvinas.prototype.getTile = function (coords, zoom, ownerDocument) {
  const div = ownerDocument.createElement('div')
  div.style.width = this.tileSize.width + 'px'
  div.style.height = this.tileSize.height + 'px'
  this._loadBackground(div, this.url(coords, zoom))
  return div
}

ImgOverlayMalvinas.prototype._loadBackground = function (container, url) {
  var file = new Image()

  file.onload = function () {
    var images = container.style.backgroundImage || ''
    if (images != '') {
      images += ','
    }
    images += 'url(' + url + ')'
    container.style.backgroundImage = images
  }

  file.onerror = function () {}

  file.src = url
}

ImgOverlayMalvinas.prototype.url = function (coords, zoom) {
  return (
    'https://mts1.google.com/vt/hl=es&gl=AR&src=apiv3&rlbl=1' +
    '&x=' +
    coords.x +
    '&y=' +
    coords.y +
    '&z=' +
    zoom
  )
}

function Malvinas(map) {
  map.overlayMapTypes.insertAt(
    0,
    new ImgOverlayMalvinas(new google.maps.Size(256, 256))
  )
}

function _Map(parameters) {
  this._parameters = parameters
  this._currentMarker = null
  this._infowindow = null
  this._map = null
  this._eess = []
  this._createMap()
  this._createUserLocation()
  this._createAutocomplete()
}

_Map.prototype.getMap = function () {
  return this._map
}

_Map.prototype._openInfowindow = function (content, marker) {
  if (this._infowindow == null) {
    this._infowindow = new google.maps.InfoWindow()
  }
  this._infowindow.close()
  this._infowindow.setContent(content)
  this._infowindow.open(this.getMap(), marker)
}

_Map.prototype._createMap = function () {
  this._map = new google.maps.Map(
    document.getElementById(this._parameters.mapDiv),
    {
      center: new google.maps.LatLng(
        this._parameters.initialPosition.lat,
        this._parameters.initialPosition.lng
      ),
      zoom: this._parameters.initialZoom,
      scaleControl: true,
      disableDefaultUI: false,
      streetViewControl: false,
      panControl: true,
      panControlOptions: { position: google.maps.ControlPosition.LEFT_BOTTOM },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_BOTTOM,
      },
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
        mapTypeIds: [this.type],
      },
      noClear: true,
    }
  )

  this._loadData()
  this._createOverlayMalvinas()
}

_Map.prototype._createOverlayMalvinas = function () {
  this.malvinas = new Malvinas(this._map)
}

_Map.prototype._createUserLocation = function () {
  if ('geolocation' in navigator) {
    var self = this
    this._locationButton = document.createElement('div')
    $(this._locationButton)
      .attr('id', '_mapUserLocationButton')
      .attr('title', 'Ubicación actual')
    $(this._locationButton).click(function () {
      self._zoomToUserLocation()
    })
    this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      this._locationButton
    )
  }
}

_Map.prototype._zoomToUserLocation = function () {
  if ('geolocation' in navigator) {
    var self = this
    navigator.geolocation.getCurrentPosition(function (position) {
      self.zoomTo(
        new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
      )
    })
  }
}

_Map.prototype.zoomTo = function (position) {
  this._map.setCenter(position)
  this._map.setZoom(this._parameters.zoomTo)
}

_Map.prototype._loadData = function () {
  var self = this
  $.ajax({
    url: this._parameters.serviceURL,
    data: this._parameters.serviceFilters,
    type: 'get',
    headers: { 'Content-Type': 'application/json' },
    dataType: 'json',
    success: function (response) {
      self._loadEESS(response)
      self._loadToMap()
    },
    error: function (data) {
      console.log('Error en servicio', data)
    },
  })
}

_Map.prototype._loadEESS = function (response) {
  for (var i = response.length - 1; i >= 0; i--) {
    try {
      this._eess.push(new EESS(response[i]))
    } catch (e) {
      console.log('Eror de datos en: ', response[i])
    }
  }
}

_Map.prototype._loadToMap = function () {
  for (var i = this._eess.length - 1; i >= 0; i--) {
    this._eess[i]._loadToMap(this, this._parameters.icon)
  }
}

_Map.prototype._createAutocomplete = function () {
  this.autocomplete = document.createElement('div')
  $(this.autocomplete).attr('id', 'pac-container')
  const input = document.createElement('input')
  $(input)
    .attr('id', 'pac-input')
    .attr('type', 'text')
    .attr('placeholder', 'Ubicación')
  $(this.autocomplete).append(input)
  this._setupAutocompleteInput(input)
  this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(
    this.autocomplete
  )
}

_Map.prototype._setupAutocompleteInput = function (input) {
  var self = this
  const autocomplete = new google.maps.places.Autocomplete(input)
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])
  autocomplete.setTypes(['(cities)'])
  autocomplete.setComponentRestrictions({
    country: ['ar'],
  })
  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace()
    self.fitBounds(place.geometry.viewport)
  })
}

_Map.prototype.fitBounds = function (bounds) {
  this._map.fitBounds(bounds)
}

function startMap() {
  $(document).ready(() => {
    // Temporal fix
    setTimeout(function () {
      mapYer = new _Map(MAP_CONFIGURATION)
    }, 2000)
  })
}
