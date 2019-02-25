import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NamesService {
  constructor(private http: HttpClient) {}

  async getNames() {
    try {
      const result:any = await this.http.get("/api/names").toPromise();
      return {names: result};
    } catch (error) {
      console.error(error);
    }
  }
}
