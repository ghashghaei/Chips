import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipListComponent),
      multi: true
    }
  ]
})
export class ChipListComponent implements ControlValueAccessor {

  @Input() languages: string[];
  selectedLanguages: string[];
  selectableLanguage: string[];

  @ViewChild('languageInput', {static: true}) languageInput: ElementRef<HTMLInputElement>;

  remove(item: string) {
    this.selectedLanguages = this.selectedLanguages.filter(c => c !== item);
    this.onChange(this.selectedLanguages);
  }

  selectionChange(e) {
    this.selectedLanguages.push(e.value);
    this.languageInput.nativeElement.value = '';
    this.applyFilter('');
    this.onChange(this.selectedLanguages);
  }

  writeValue(obj: any): void {
    if (obj !== null) {
      this.selectedLanguages = obj;
    }
  }

  applyFilter(filterValue: string) {
    this.selectableLanguage = this.languages.filter(el =>
      !this.selectedLanguages.some(d => d === el) &&
      el.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  }

  onChange: any = () => { };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // not implemented
  }
  setDisabledState?(isDisabled: boolean): void {
    // not implemented
  }

}
