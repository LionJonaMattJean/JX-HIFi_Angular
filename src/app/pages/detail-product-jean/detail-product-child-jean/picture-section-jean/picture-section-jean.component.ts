import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-section-jean',
  standalone: true,
  imports: [],
  templateUrl: './picture-section-jean.component.html',
  styleUrl: './picture-section-jean.component.css'
})
export class PictureSectionJeanComponent {
  mainAlt: any;
  mainSource: string = "https://picsum.photos/id/237/400/300";

  
  changeMainPicture(img: MouseEvent): void {
    const choosedImg = img.target as HTMLImageElement;
    this.mainSource = choosedImg.src;
    this.mainAlt = choosedImg.alt;
  }
}
