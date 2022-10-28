import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'velha';
  ActualPlayer = 'X';
  square = ['', '', '', '', '', '', '', '', '']
  i = 0;
  roundcount = 0;
  result_match = '';
  end = false;

  victory_condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
  ]

  reset() {
    this.result_match = '';
    this.ActualPlayer = 'X';
    this.square = ['', '', '', '', '', '', '', '', '']
    this.roundcount = 0;
    this.end = false;
  }


  movement(value: number) {
    this.i = value;
    if (this.square[this.i] == '') {
      this.square[this.i] = this.ActualPlayer;
      this.ActualPlayer = (this.ActualPlayer == 'X') ? 'O' : 'X';
      this.roundcount++;
      this.resultWon();
    }
  }

  resultWon() {
    for (this.i = 0; this.i < this.victory_condition.length; this.i++) {
      let vresult = this.victory_condition[this.i];
      let v0 = vresult[0];
      let v1 = vresult[1];
      let v2 = vresult[2];
      if (this.square[v0] != '' && this.square[v0] == this.square[v1] && this.square[v1] == this.square[v2]
        && this.square[v0] == this.square[v2]) {
        this.ActualPlayer = (this.ActualPlayer == 'O') ? 'X' : 'O';
        this.result_match = this.ActualPlayer;
        this.end = true;

      }
    }
    this.gameEnd(this.end);
  }

  gameEnd(end: boolean) {
    if (end) {
      this.result_match = ('O ganhador é: ' + this.ActualPlayer);
      return;
    }
    this.result_match = 'Houve empate!';
  }
}

