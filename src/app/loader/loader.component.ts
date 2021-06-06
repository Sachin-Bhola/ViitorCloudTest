import { Component, OnInit } from '@angular/core';
import { delay, startWith, tap } from 'rxjs/operators';
import { EmitEventService } from '../services/emit-event.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading!: boolean;
  constructor(
    private emitEventService:EmitEventService
  ) {
    this.emitEventService.isLoading.pipe(
      tap((isLoading: boolean) => {
        this.loading = isLoading;
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

}
