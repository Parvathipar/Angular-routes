import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: '<p>{{productId}}</p>',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  productId:string;
  constructor(private route:ActivatedRoute){
    this.productId='';
  }
  ngOnInit(): void {
      this.productId=this.route.snapshot.paramMap.get('id') || '';
  }

}
