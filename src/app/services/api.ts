import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiBaseUrl = environment.service.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/file`);
  }

  getReport(lastDays: number): Observable<{ recepcionado: number; naoRecepcionado: number; erro: number }> {
    const params = new HttpParams().set('lastDays', lastDays.toString());
    return this.http.get<{ recepcionado: number; naoRecepcionado: number; erro: number }>(
      `${this.apiBaseUrl}/file/report`,
      { params }
    );
  }
}