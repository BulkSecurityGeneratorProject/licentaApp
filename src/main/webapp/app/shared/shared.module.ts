import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LicentaAppSharedLibsModule, LicentaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [LicentaAppSharedLibsModule, LicentaAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [LicentaAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LicentaAppSharedModule {
  static forRoot() {
    return {
      ngModule: LicentaAppSharedModule
    };
  }
}
