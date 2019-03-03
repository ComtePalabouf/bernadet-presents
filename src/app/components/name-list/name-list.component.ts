import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NamesService } from 'src/app/services/names.service';
import { GiftService } from './../../services/gift.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.less']
})
export class NameListComponent implements OnInit {
  names: string[];
  selectedName: string;
  giftName: string;

  @Output() drawEvent = new EventEmitter<any>();

  constructor(
    private nameService: NamesService,
    private giftService: GiftService
  ) {}

  async ngOnInit() {
    const result = await this.nameService.getNames();
    this.names = result.names.result;
  }

  async onClick() {
    this.giftName = await this.giftService.draw(this.selectedName);
    this.drawEvent.emit(this.giftName);
  }
}
