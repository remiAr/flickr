import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public arrayName = [];
  public object = [{ "id": "48842947701", "owner": "93198546@N08", "secret": "6c00f97fd6", "server": "65535", "farm": 66, "title": "V_2998", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48835786343", "owner": "110273693@N04", "secret": "274273ae5e", "server": "65535", "farm": 66, "title": "Festival Lumière, Lyon Métro", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819872331", "owner": "79881035@N08", "secret": "0e2944cf20", "server": "65535", "farm": 66, "title": "DSC_0132", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820023802", "owner": "79881035@N08", "secret": "20f168388c", "server": "65535", "farm": 66, "title": "DSC_0131", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820022547", "owner": "79881035@N08", "secret": "1af9aeda6b", "server": "65535", "farm": 66, "title": "DSC_0122", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819868446", "owner": "79881035@N08", "secret": "138eaf266b", "server": "65535", "farm": 66, "title": "DSC_0121", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819866911", "owner": "79881035@N08", "secret": "e52b548936", "server": "65535", "farm": 66, "title": "DSC_0117", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819506483", "owner": "79881035@N08", "secret": "c486536a73", "server": "65535", "farm": 66, "title": "DSC_0111", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819864376", "owner": "79881035@N08", "secret": "2e07b8a161", "server": "65535", "farm": 66, "title": "DSC_0102", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819863476", "owner": "79881035@N08", "secret": "c511dd3dfd", "server": "65535", "farm": 66, "title": "DSC_0100", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820014802", "owner": "79881035@N08", "secret": "bd69cd7d67", "server": "65535", "farm": 66, "title": "DSC_0098", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819861551", "owner": "79881035@N08", "secret": "0cc30c738e", "server": "65535", "farm": 66, "title": "DSC_0096", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819501368", "owner": "79881035@N08", "secret": "2a479874f7", "server": "65535", "farm": 66, "title": "DSC_0095", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820011962", "owner": "79881035@N08", "secret": "45ed4057b4", "server": "65535", "farm": 66, "title": "DSC_0090", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820011157", "owner": "79881035@N08", "secret": "0625902f4d", "server": "65535", "farm": 66, "title": "DSC_0082", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48819857896", "owner": "79881035@N08", "secret": "f4db9462d9", "server": "65535", "farm": 66, "title": "DSC_0078", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  { "id": "48820009502", "owner": "79881035@N08", "secret": "967518b753", "server": "65535", "farm": 66, "title": "DSC_0077", "ispublic": 1, "isfriend": 0, "isfamily": 0 }];
  public pictureLimite = 5;
  constructor() { }

  ngOnInit() {
    
  }

}
