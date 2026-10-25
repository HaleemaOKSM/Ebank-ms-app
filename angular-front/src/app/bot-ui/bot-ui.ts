
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MarkdownComponent} from 'ngx-markdown';
import {LoadingService} from '../services/loading';

@Component({
  selector: 'app-bot-ui',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MarkdownComponent
  ],
  templateUrl: './bot-ui.html',
  styleUrl: './bot-ui.css',
})
export class BotUi {
  query: string = '';

  http = inject(HttpClient);
  response$!: Observable<string>;

  public loadService = inject(LoadingService);

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
