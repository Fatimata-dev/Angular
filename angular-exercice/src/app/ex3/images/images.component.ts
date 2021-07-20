import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imgUrl = ""
  changeImg(index:number){
    if (index == 1) {
      this.imgUrl = "https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/96/25/32/73/15/66103.jpg"
    }else if(index == 2){
      this.imgUrl = "https://www.terdav.be/Content/img/Produits/produit/MRT/537248.ori.jpg"
    }else{
      this.imgUrl = "https://www.lesvoyagesdemat.com/wp/wp-content/uploads/2018/01/Mauritanie-Chingetti-3.jpg"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
