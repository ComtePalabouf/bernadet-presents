import { Component, OnInit } from "@angular/core";
import { NamesService } from "src/app/services/names.service";

@Component({
  selector: "app-name-list",
  templateUrl: "./name-list.component.html",
  styleUrls: ["./name-list.component.less"]
})
export class NameListComponent implements OnInit {
  names: string[];
  selectedName: string;

  constructor(private nameService: NamesService) {}

  async ngOnInit() {
    const result = await this.nameService.getNames();
    console.log(result);
    this.names = result.names.result;
  }
}
