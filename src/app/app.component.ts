import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PixiComponent } from "./pixi/pixi.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pixi-angular';
  @ViewChild(PixiComponent) pixiComponent;
  handleZoomIn() {
    this.pixiComponent.zoomLevel+=0.1;
  }
  handleZoomOut() {
    this.pixiComponent.zoomLevel-=0.1;
  }
  ngAfterViewInit() {

  }
}
