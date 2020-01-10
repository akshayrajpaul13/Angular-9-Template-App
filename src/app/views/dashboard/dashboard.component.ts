import {
  Component, AfterViewInit, ViewChild, ElementRef,
  HostListener, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  @Output() leafletMapReady = new EventEmitter<L.Map>();
  @ViewChild('map') mapDiv: ElementRef;
  private HEADER_HEIGHT = 45;
  private map: L.Map;
  private options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    this.mapDiv.nativeElement.style.height = `calc(100vh - ${this.HEADER_HEIGHT}px)`;
    if (this.map != null) {
      this.resize();
    }
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.leafletMapReady.emit(this.map);
  }

  @HostListener('window:resize', ['$event'])
  private resize() {
    this.map.invalidateSize();
  }
}
