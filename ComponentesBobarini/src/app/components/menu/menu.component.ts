import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

  playC (){
    let audio = new Audio();
    audio.src ="../../../assets/audio/316901__jaz-the-man-2__do-octave.wav";
    audio.load();
    audio.play();
  }
  playB (){
    let audio = new Audio();
    audio.src ="../../../assets/audio/316913__jaz-the-man-2__si.wav";
    audio.load();
    audio.play();
  }

}
