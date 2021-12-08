import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name ='SANG BÁ';
  public age = 15;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quyt'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: false},
    { ten: 'Nho', gia: -3.2, haGia: true},
    { ten: 'Cam', gia: 32.2, haGia: true},
    { ten: 'Quyt', gia: 32.2, haGia: true},



  ];
  public vietnamData = [
    {
      city: 'An Giang' ,
      district: [
       "Thành phố Long Xuyên",
       "Thành phố Châu Đốc",
       "Thị xã Tân Châu",
       "Huyện An Phú",
       "Huyện Châu Phú",
       "Huyện Châu Thành",
       "Huyện Chợ Mới",
       "Huyện Phú Tân",
       "Huyện Thoại Sơn",
       "Huyện Tịnh Biên",
       "Huyện Tri Tôn",
  ],
},
{
  city: 'An Giang' ,
  district: [
   "Thành phố Long Xuyên",
   "Thành phố Châu Đốc",
   "Thị xã Tân Châu",
   "Huyện An Phú",
   "Huyện Châu Phú",
   "Huyện Châu Thành",
   "Huyện Chợ Mới",
   "Huyện Phú Tân",
   "Huyện Thoại Sơn",
   "Huyện Tịnh Biên",
   "Huyện Tri Tôn",
   ],
  },
];





  constructor() { }

 public ngOnInit(): void {
   console.log('vietnamData = ', this.vietnamData);
 }
 

  
}
