import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pizza-delivery';
  total = {'small': 0, 'medium': 0, 'large': 0, 'extraLarge': 0 };
  defaultCost = {'small': 5, 'medium': 7, 'large': 8, 'extraLarge': 9};
  order = {'small': [], 'medium': [], 'large': [], 'extraLarge': []};
  promotions = {'medium': {'applied': false, total: 0}, 'large': {'applied': false, total: 0}};

  vegToppings = [
    {'name': 'Tomatoes', 'type': 'Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 1.00},
    {'name': 'Onions', 'type': 'Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 0.50},
    {'name': 'Bell Pepper', 'type': 'Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 1.00},
    {'name': 'Mushrooms', 'type': 'Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 1.20},
    {'name': 'Pineapple', 'type': 'Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 0.75}
  ];

  nonVegToppings = [
    {'name': 'Sausage', 'type': 'Non-Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 1.00},
    {'name': 'Pepperoni', 'type': 'Non-Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price': 2.00},
    {'name': 'Barbeque Chicken', 'type': 'Non-Veg', 'small': false, 'medium': false, 'large': false, 'extraLarge': false, 'price':3.00}
  ]

  calculateTotal(topping, size) {
    if (topping[size]) {
      this.total[size] === 0 ? (this.total[size] = this.defaultCost[size] + topping.price) : this.total[size] += topping.price;
      this.order[size].push(topping.name);
    } else {
      this.total[size] -= topping.price;
      this.total[size] === this.defaultCost[size] ? this.total[size] = 0 : '';
      const index = this.order[size].indexOf(topping.name);
      this.order[size].splice(index, 1);
    }

    if (this.order['medium'].length === 2) {
      this.promotions.medium.applied = true;
      this.promotions.medium.total = 5;
    } else {
      this.promotions.medium.applied = false;
      this.promotions.medium.total = 0;
    }
    if (this.order['large'].length === 4) {
      this.promotions.large.applied = true;
      this.promotions.large.total = this.total.large / 2;
    } else {
      this.promotions.large.applied = false;
      this.promotions.large.total = 0;
    }
    console.log('total ', this.total);
    console.log('order ', this.order[size]);

  }
}
