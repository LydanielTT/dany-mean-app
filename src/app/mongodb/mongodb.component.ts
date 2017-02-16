import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {

// instantiate acquisitions to an empty array
  acquisitions: any = [];
  
  constructor(private mongodbService: MongodbService) { }

  ngOnInit() {
  // Retrieve acquisitions from the API
    this.mongodbService.getAllAcquisitions().subscribe(acquisitions => {
      this.acquisitions = acquisitions;
    });
  }

}
