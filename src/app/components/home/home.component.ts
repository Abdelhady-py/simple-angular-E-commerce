import { Component } from '@angular/core';
import { TrackDataInterface, TrackInfo } from 'src/app/model/track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trackClass:TrackInfo=new TrackInfo("MEARN Track","https://static.javatpoint.com/blog/images/mern-stack.png",["JS","Angular","React js"]);
  trackClass2:TrackInfo=new TrackInfo("Frontend Track","https://static.javatpoint.com/blog/images/mern-stack.png",["JS","Angular","React js"]);

  track:TrackDataInterface={trackName:"MEARN track",trackNum:60,trackCourses:["Node JS","Mongo DB","Boostrap"]}


}
