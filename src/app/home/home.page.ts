import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(0,0,0)';
  }

  // save(): void {
  //   const img = this.signaturePad.toDataURL();
  //   this.base64ToGallery.base64ToGallery(img).then(
  //     res => console.log('Saved image to gallery ', res),
  //     err => console.log('Error saving image to gallery ', err)
  //   );
  // }

  save(){

    const img = this.signaturePad.toDataURL();

    console.log(img)
 
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }


}
