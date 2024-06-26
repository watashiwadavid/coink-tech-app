import { Injectable, inject } from '@angular/core';
import { DocumentType } from '../models/document-type.model';
import { HttpClient } from '@angular/common/http';
import {
  Subject,
  catchError,
  lastValueFrom,
  takeUntil,
  throwError,
  timeout,
} from 'rxjs';
import { COINK_API_CONFIG, CoinkApiConfig } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService {
  private http = inject(HttpClient);
  private apiConfig: CoinkApiConfig = inject(COINK_API_CONFIG);

  private unsubscriber: Subject<void> = new Subject<void>();

  destroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
    this.unsubscriber = new Subject();
  }

  async list(): Promise<DocumentType[]> {
    return lastValueFrom(
      this.http
        .get<DocumentType[]>(
          this.apiConfig.apiUrl + '/signup/documentTypes?apiKey=030106'
        )
        .pipe(
          timeout(5000),
          catchError(() => {
            return throwError(() => new Error('Error during HTTP request'));
          }),
          takeUntil(this.unsubscriber)
        )
    );
  }
}
