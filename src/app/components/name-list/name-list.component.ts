import { Gift } from './../../models/gift';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NamesService } from 'src/app/services/names.service';
import { GiftService } from './../../services/gift.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent implements OnInit {
  names: string[];
  selectedName: string;
  giftName: string;

  private giftList: Gift[];

  @Output() drawEvent = new EventEmitter<any>();

  constructor(
    private nameService: NamesService,
    private giftService: GiftService
  ) {}

  async ngOnInit() {
    const result = await this.nameService.getNames();
    this.names = result.names.result;
    this.giftList = await this.giftService.getGifts();
  }

  async onClick() {
    this.giftName = await this.giftService.draw(this.selectedName);
    this.drawEvent.emit();
    this.giftList = await this.giftService.getGifts();
  }

  isDrawButtonDisabled() {
    return (
      !this.selectedName ||
      this.giftList.map(gift => gift.from).includes(this.selectedName)
    );
  }
}
