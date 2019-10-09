import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public object = [];
  public title = "";
  public limitePage = 20;
  public minDateUpload;
  public maxDateUpload;
  private contentNSFW : string = "3";
  public page = 1;
  public currentPictureNumber = 0;

  public imageClicked;
  public currentPicture = [];
  constructor(public http: HttpClient) {
    
  }

  ngOnInit() {
    
  }

  onClickMe(){
    this.object = [];
    this.requestApi(this.title, this.page, this.limitePage, this.contentNSFW, this.minDateUpload, this.maxDateUpload).then((result)=> {
      this.object = (result as any).photos.photo;
    }).catch((err)=>{

    });
  }

  requestApi(title, page, limitePage, contentNSFW, minDateUpload, maxDateUpload) {
		return new Promise((resolve, reject) => {
			this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=21918178cf10baf619b096c35021291e&tags="+title+"&page="+page+"&min_upload_date="+minDateUpload+"&max_upload_date="+maxDateUpload+"&safe_search="+contentNSFW+"&per_page="+limitePage+"&format=json&nojsoncallback=1", {}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
  }

  getPictureInfo(pictureId, pictureSecret) {
		return new Promise((resolve, reject) => {
			this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=21918178cf10baf619b096c35021291e&photo_id="+pictureId+"&secret="+pictureSecret+"&format=json&nojsoncallback=1", {}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
  }

  setContentNSFW(){
    if(this.contentNSFW == "1"){
      this.contentNSFW = "3";
    }else{
      this.contentNSFW = "1";
    }
    console.log(this.contentNSFW);
  }

  nextPicture(){
    this.currentPictureNumber += 1;
    this.openPicture(this.object[this.currentPictureNumber], this.currentPictureNumber);
  }

  prevPicture(){
    this.currentPictureNumber -= 1;
    this.openPicture(this.object[this.currentPictureNumber], this.currentPictureNumber);
  }
  
  openPicture(item , i){
    this.currentPictureNumber = i;
    this.imageClicked = item;
    this.getPictureInfo(item.id, item.secret).then((result)=> {
      console.log(result)
      var theDate = new Date((result as any).photo.dates.posted * 1000);
      var date = new Date(theDate.toUTCString()).toLocaleDateString();
      var dateT = new Date(new Date((result as any).photo.dates.taken).toUTCString()).toLocaleDateString();
      this.currentPicture  = ({"dateUpload": date, "ownerUsername": (result as any).photo.owner.username, "dateTaken" : dateT, "location" : (result as any).photo.owner.location, "tags" : (result as any).photo.tags.tag } as any)
      console.log(this.currentPicture)
    }).catch((err)=>{

    });
  }


}
