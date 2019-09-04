import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

  StoreLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  GetLocal(key: string) {
    return localStorage.getItem(key);
  }
}

