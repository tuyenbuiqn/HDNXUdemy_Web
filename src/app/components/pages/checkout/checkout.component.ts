import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  copyMessenger(text: string){
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Text copied to clipboard!');
      }
    );

    navigator.clipboard.readText().then(
      (text) => {
        console.log(text);
      }
    )
  }
}
