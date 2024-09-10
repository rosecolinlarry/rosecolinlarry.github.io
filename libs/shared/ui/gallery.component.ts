import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Gallery, GalleryConfig, GalleryItem, GalleryModule, ImageItem, ThumbnailsView } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
@Component({
  selector: 'lib-gallery',
  standalone: true,
  imports: [CommonModule, GalleryModule, LightboxModule, AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  images: GalleryItem[] = [];

  galleryId = 'myLightbox';
  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Set items array
    this.images = [
      new ImageItem({ src: 'https://i.imgur.com/is4kHp1.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/63QIphj.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/zkcXBmz.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/zUXEP2F.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/IspyTDF.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/3ueSNCd.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/g9tM58b.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/igAe7Ml.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/SRIEegD.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/boJhcPW.jpeg' }),
      new ImageItem({ src: 'https://i.imgur.com/7SxD2LU.jpeg' }),
    ];
    // Load items into gallery
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
    const config: GalleryConfig = {
      thumb: false,

    }
    galleryRef.setConfig(config);
  }
}
