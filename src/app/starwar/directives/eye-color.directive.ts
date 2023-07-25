import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appeyecolor]'
})

export class EyeColorDirective implements OnInit {

  @Input() value: string = '';
  constructor(private ele: ElementRef){
    console.log('inside directive')
  }

  ngOnInit(){
    let color = this.value;
    this.ele.nativeElement.style.backgroundColor = color;
    if(color == 'blue-gray') {
      this.ele.nativeElement.style.backgroundColor = '#6699CC';
    }
    this.ele.nativeElement.innerHTML =
      this.value.charAt(0).toUpperCase() + this.value.slice(1);
  }
}