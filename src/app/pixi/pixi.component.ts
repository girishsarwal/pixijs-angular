import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { Application } from 'pixi.js';
import { createInput } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.css']
})

export class PixiComponent implements OnInit {
  public app: Application;
  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }
  @Input('zoom') zoomLevel: any;
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({
        width: window.innerWidth, 
        height: window.innerHeight,
        
      });
      this.elementRef.nativeElement.appendChild(this.app.view);
      const sprite = new PIXI.Sprite(PIXI.Texture.from('/assets/images/angular.png'));
      const text = new PIXI.Text('',{ fontFamily : 'Abel', fontSize: 24, fill : 0xffffff, align : 'center' });

      sprite.x = window.innerWidth / 2;
      sprite.y = window.innerHeight / 2;

      

      text.position.x = window.innerWidth / 2;
      text.position.y = window.innerHeight / 2;

      sprite.anchor.x = 0.5;
      sprite.anchor.y = 0.5;

      text.anchor.x = 0.5;
      text.anchor.y = 0.5;

      
      var that = this;
      
      this.app.ticker.add(function() {

        sprite.rotation+=0.01;
        sprite.scale.x=that.zoomLevel;
        sprite.scale.y=that.zoomLevel;
         

        text.text = "current zoom level is "  + that.zoomLevel;
      });
     
      
      this.app.stage.addChild(sprite);
      this.app.stage.addChild(text);
    });
  }
}
