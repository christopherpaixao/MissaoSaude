import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  /* abrirVideo(){
    this.youtube.openVideo('https://youtu.be/hupImCcvw0M');
  } */
  /* watch(watch){
    this.youtube.openVideo(watch);

  } */

}
