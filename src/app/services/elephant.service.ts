import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElephantService {
  calculateElephants(colors: number, elephants: number): any {
    const colorCount: any = [];
    const colorsArr = this.getColorsArr(colors);

    for (let i = 0; i < elephants; i++) {
      const randColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
      const targetIndex =
        colorCount.length !== 0
          ? colorCount.findIndex((el: any) => el.color === randColor)
          : -1;

      if (targetIndex !== -1) {
        colorCount[targetIndex].elephants += 1;
      } else {
        colorCount[i] = {
          color: randColor,
          elephants: 1,
        };
      }
    }

    return colorCount;
  }
  getRandColor() {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  }

  getColorsArr(n: number) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(this.getRandColor());
    }
    return arr;
  }
}
