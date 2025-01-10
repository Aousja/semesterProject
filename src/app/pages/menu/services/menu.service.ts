import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensure it's properly provided in the root injector
})
export class MenuService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.getMenuItems()
  }

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/menu');
  }
}
