import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  createFromList(list: string[]): FormGroup {
    const form = new FormGroup({});

    for (const field of list) {
      form.addControl(field, new FormControl());
    }

    return form;
  }
}
