import { Injectable, inject } from '@angular/core';
import { Gender } from '../models';
import { HttpClient } from '@angular/common/http';
import {
  Subject,
  catchError,
  lastValueFrom,
  map,
  takeUntil,
  throwError,
  timeout,
} from 'rxjs';
import { COINK_API_CONFIG, CoinkApiConfig } from '../../config';

const mockGenders: Gender[] = [
  { id: 1, description: 'Femenino' },
  { id: 2, description: 'Masculino' },
];

@Injectable({
  providedIn: 'root',
})
export class GenderService {
  private http = inject(HttpClient);
  private apiConfig: CoinkApiConfig = inject(COINK_API_CONFIG);

  private unsubscriber: Subject<void> = new Subject<void>();

  destroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
    this.unsubscriber = new Subject();
  }

  async list(): Promise<Gender[]> {
    return lastValueFrom(
      this.http
        .get<Gender[]>(this.apiConfig.apiUrl + '/signup/genders?apiKey=030106')
        .pipe(
          timeout(5000),
          catchError(() => {
            return throwError(() => new Error('Error during HTTP request'));
          }),
          map((response) => {
            return Array.isArray(response) ? response : mockGenders;
          }),
          takeUntil(this.unsubscriber)
        )
    );
  }
}
