import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(message: string) {
    console.log(`LoggerService: ${message}`);
  }
}
