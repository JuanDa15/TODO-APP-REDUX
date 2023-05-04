import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './App.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public store: Store<AppState> = inject(Store)
  public router = inject(Router)
  ngOnInit(): void {
    this.store.select((state) => state.filters).subscribe({
      next: (val) => {
        this.router.navigateByUrl('/'+val)
      }
    })
  }

}
