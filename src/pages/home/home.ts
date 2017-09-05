import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private streamMedia: StreamingMedia) {

  }

  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video Ended') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'landscape' //portrait
    };
 
    this.streamMedia.playVideo('http://<your>.mp4', options);
  }
 
  startAudio() {
    let options: StreamingAudioOptions = {
      bgImage: '<your>.png',
      successCallback: () => { console.log('Audio Ended') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    this.streamMedia.playAudio('http://<your>.mp3', options);
  }

}

export interface StreamingVideoOptions {
    successCallback?: Function;
    errorCallback?: Function;
    orientation?: string;
}

export interface StreamingAudioOptions {
    bgColor?: string;
    bgImage?: string;
    bgImageScale?: string;
    initFullscreen?: boolean;
    successCallback?: Function;
    errorCallback?: Function;
}
