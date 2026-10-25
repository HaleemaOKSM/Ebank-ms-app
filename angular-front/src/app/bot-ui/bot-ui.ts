
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bot-ui',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './bot-ui.html',
  styleUrl: './bot-ui.css',
})
export class BotUi {
  query: string = '';

  http = inject(HttpClient);
  response$!: Observable<string>;

  askAgent() {
    this.response$ = this.http.get(
      'http://localhost:9999/EBANK-BOT/chat',
      {
        params: { query: this.query },
        responseType: 'text'
      }
    );
  }
}
