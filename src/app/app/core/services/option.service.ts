import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { OptionCreate, OptionDto, OptionFormSync, OptionUpdate } from '../../../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private apiUrl = `${environment.apiUrl}/option`;

  constructor(private http: HttpClient) {} 

  // Get all options
  getAll(): Observable<OptionDto[]> {
    return this.http.get<OptionDto[]>(this.apiUrl);
  }

  // Get option by id
  getById(id: number): Observable<OptionDto> {
    return this.http.get<OptionDto>(`${this.apiUrl}/${id}`);
  }

  // Create new option
  create(option: OptionCreate): Observable<OptionDto> {
    return this.http.post<OptionDto>(this.apiUrl, option);
  }

  // Update option
  update(id: number, option: OptionUpdate): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, option);
  }

  // Delete option
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get all options by QuestionId
  getByQuestionId(questionId: number): Observable<OptionDto[]> {
    return this.http.get<OptionDto[]>(`${this.apiUrl}/question/${questionId}`);
  }

  /**
   * After updating a question, apply option creates/updates/deletes so admin edits persist.
   */
  syncOptionsForQuestion(questionId: number, formOptions: OptionFormSync[]): Observable<void> {
    return this.getByQuestionId(questionId).pipe(
      switchMap((existing) => {
        const withIds = formOptions.filter(
          (o): o is OptionFormSync & { optionId: number } =>
            o.optionId != null && o.optionId !== undefined
        );
        const newOnes = formOptions.filter((o) => o.optionId == null || o.optionId === undefined);

        const keptIds = new Set(withIds.map((o) => o.optionId));
        const toRemove = existing.filter((o) => !keptIds.has(o.optionId));

        const deleteOps = toRemove.map((o) => this.delete(o.optionId));
        const updateOps = withIds.map((o) =>
          this.update(o.optionId, {
            text: o.text,
            isCorrect: o.isCorrect,
            questionId
          })
        );
        const createOps = newOnes.map((o) =>
          this.create({
            text: o.text,
            isCorrect: o.isCorrect,
            questionId
          } as OptionCreate)
        );

        const all = [...deleteOps, ...updateOps, ...createOps];
        if (all.length === 0) {
          return of(void 0);
        }
        return forkJoin(all).pipe(map(() => void 0));
      })
    );
  }
}
