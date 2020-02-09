import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor() {}

  addToCard(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCard() {
    this.items = [];
    return this.items;
  }
}
