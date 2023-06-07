import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'nms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loading!: boolean;

  constructor(public router: Router, private loadingService: LoadingService) { 
    this.loadingService.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }  

  ngOnInit(): void {
  }


}
