import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public object = [];
  public title;
  public limitePage;
  constructor(public http: HttpClient) {
    
  }

  ngOnInit() {
    
  }

  onClickMe(){
    this.object = [];
    this.requestApi(this.title, this.limitePage).then((result)=> {
      this.object = (result as any).photos.photo;
    }).catch((err)=>{

    });
  }

  requestApi(title, limitePage) {
		return new Promise((resolve, reject) => {
			this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ace1d78f867284ec1756b03727c8b7d&tags="+title+"&per_page="+limitePage+"&format=json&nojsoncallback=1", {}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
  }
  
  openPicture(item){
    
    console.log(item);
  }


}
