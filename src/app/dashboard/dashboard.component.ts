import { Component, OnInit } from '@angular/core';
import { Feature } from './feature';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ip : string = "192.168.1.10";

  features:Feature[] = [
    new Feature("SSH","Secured shell connexion in command line",22, "http://cdn.mysitemyway.com/icons-watermarks/flat-rounded-square-white-on-black/raphael/raphael_command-line/raphael_command-line_flat-rounded-square-white-on-black_512x512.png"),
    new Feature("Portainer","Docker manager with web interface",9000, "https://avatars1.githubusercontent.com/u/22225832?v=4&s=400" ,true),
    new Feature("jenkins","Continuous integration for developpement",10000, "https://jenkins.io/images/226px-Jenkins_logo.svg.png", true),
    new Feature("Database","Mysql database for all apps",3306, "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png")
  ];

  constructor() { }

  ngOnInit() {
  }

}
