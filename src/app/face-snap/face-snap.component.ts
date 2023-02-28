import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  snaps!: number;
  msg_btn!: string;

  ngOnInit() {
    this.title = 'Archibale';
    this.description = 'Mon meilleur ami depuis tout petit';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252__340.jpg';
    this.msg_btn = "Oh Snaps !"
  }

  onSnap() {
    if (this.msg_btn === 'Oh Snaps !') {
      this.snaps++;
      this.msg_btn = 'Ooops, unSnaps !';
    } else {
      this.snaps--;
      this.msg_btn = 'Oh Snaps !';
    }
  }
}
