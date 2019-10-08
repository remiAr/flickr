import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public arrayName = [];
  public object = [];
  constructor(public http: HttpClient) {
    
  }

  ngOnInit() {
    this.requestApi();
  }

  requestApi() {
		return new Promise((resolve, reject) => {
			this.http.post("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ace1d78f867284ec1756b03727c8b7d&tags=nsfw&safe_search=1&per_page=20&page=30&format=json&nojsoncallback=1", {}).subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	}


}
