import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa-qualidade-ar',
  templateUrl: './mapa-qualidade-ar.page.html',
  styleUrls: ['./mapa-qualidade-ar.page.scss'],
})
export class MapaQualidadeArPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(51.505, -0.09),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    });

    let t = new Date().getTime();
    let waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return 'https://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=_TOKEN_ID_";
      },
      name: "Air  Quality",
    });

    this.map.overlayMapTypes.insertAt(0, waqiMapOverlay);
  }
}
