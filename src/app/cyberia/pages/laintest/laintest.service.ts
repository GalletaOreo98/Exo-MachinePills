import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  personalities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LaintestService {
  private questionsUrl = 'assets/data/lain-test/questions.json'; // Ruta a tu archivo JSON

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
}
