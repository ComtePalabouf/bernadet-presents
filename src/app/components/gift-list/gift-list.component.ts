import { Component, OnInit, Input } from '@angular/core';
import { Gift } from './../../models/gift';
import { GiftService } from './../../services/gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.less']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[];

  constructor(private giftService: GiftService) {}

  async ngOnInit() {
    this.loadGifts();
  }

  async loadGifts() {
    this.gifts = await this.giftService.getGifts();
  }
}
