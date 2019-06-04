import { NgModule } from '@angular/core';

import { LicentaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [LicentaAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [LicentaAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LicentaAppSharedCommonModule {}
