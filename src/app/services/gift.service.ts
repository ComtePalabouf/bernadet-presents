import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  constructor(private http: HttpClient) {}

  async getGifts() {
    const giftsResult: any = await this.http.get('/api/gifts').toPromise();
    const gifts = giftsResult.map(value => {
      return JSON.parse(value);
    });
    return gifts;
  }

  async draw(name: string) {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      const namesResult: any = await this.http.get('/api/names').toPromise();
      const giftsResult: any = await this.http.get('/api/gifts').toPromise();

      const gifts: string[] = giftsResult.map(value => {
        return JSON.parse(value).to;
      });

      const names: string[] = namesResult.result.filter(value => {
        return value !== name && !gifts.includes(value);
      });

      const drawnName = names[this.getRandomInt(names.length)];

      const gift = { from: name, to: drawnName };

      await this.http.post('/api/gifts', gift, httpOptions).toPromise();

      return drawnName;
    } catch (error) {
      console.error(error);
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
