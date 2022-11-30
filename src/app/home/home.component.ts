import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as L from 'leaflet';
import "leaflet.markercluster";
import Geocoder from 'leaflet-control-geocoder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  locations: any[];
  showMap: boolean = true;
  content?: string;
  title = 'Map';
  map: L.Map;
  GeocoderControl = new Geocoder();
  public locateOptions:  L.Control.LocateOptions = {
    flyTo: false,
    keepCurrentZoomLevel: true,
    locateOptions: {
                 enableHighAccuracy: true,
               },
    icon: 'material-icons md-18 target icon',
    clickBehavior: {inView: 'stop',
                    outOfView: 'setView',
                    inViewNotFollowing: 'setView'}
  };
  open: boolean = true;

   LAYER_OSM = {
    id: "openstreetmap",
    name: "Open Street Map",
    enabled: false,
    layer: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "Open Street Map"
    })
  };

  layersControlOptions = { display: "bottomright" };
  baseLayers = {
    "Map": this.LAYER_OSM.layer
  };
  options = {
    zoom: 3,
    center: L.latLng([46.879966, -121.726909])
  };

  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  ngOnInit() {
    this.generateData();
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.GeocoderControl.addTo(this.map);
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  generateData() {
  }

  ngOnDestroy(): void {
    this.showMap = false;
  }

}
