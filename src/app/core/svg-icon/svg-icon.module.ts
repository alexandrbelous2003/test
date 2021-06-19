import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({})
export class SvgIconsModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    /** Регистрация иконки */
    this.addSvgIcon('facebook');
    this.addSvgIcon('twitter');
    this.addSvgIcon('github');
    this.addSvgIcon('logo');

  }

  /**
   * Метод регистрации svg-иконки для mat-icon
   * @param iconName - название иконки (файл с иконкой и название должны быть одинаковые)
   */
  private addSvgIcon(iconName: string): void {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/svg/${iconName}.svg`)
    );
  }
}
