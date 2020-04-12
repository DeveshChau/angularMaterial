import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mat-progess-bar',
  templateUrl: './mat-progess-bar.component.html',
  styleUrls: ['./mat-progess-bar.component.css']
})
export class MatProgessBarComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  constructor() { }

  ngOnInit(): void {
  }

}
