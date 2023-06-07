export class TrackInfo {

  constructor(public trackName:string,public trackImage:string,public trackCourses:string[]){

  }
}
export interface TrackDataInterface {
  trackName: string;
  trackNum:number;
  trackCourses:string[];
}
