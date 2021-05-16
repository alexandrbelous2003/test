import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseLayerComponent } from './base-layer.component';
import { BaseLayerRoutingModule } from './base-layer-routing.module';
import { TopBarModule } from './components/top-bar/top-bar.module';
import { BaseLayerMaterialModule } from './base-layer-material.module';
import { LeftSideNavModule } from './components/left-side-nav/left-side-nav.module';
import { SharedComponentsModule } from '@gp647-shared/components/shared-components.module';
import { DxDropDownBoxModule } from 'devextreme-angular';
import { BaseLayerFacadeService } from './base-layer-facade.service';
import { StoreModule } from '@ngrx/store';
import * as fromReducers from './ngrx/reducers';
import * as fromStore from './ngrx';
import { EffectsModule } from '@ngrx/effects';
import { BusinessStructureFilterService } from './services/business-structure-filter.service';
import { BusinessStructureWebSocketService } from './services/business-structure-web-socket.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    BaseLayerRoutingModule,
    BaseLayerMaterialModule,
    TopBarModule,
    LeftSideNavModule,
    SharedComponentsModule,
    DxDropDownBoxModule,
    EffectsModule.forFeature(fromStore.effects),
    StoreModule.forFeature('businessStructure1', fromReducers.businessStructure.reducer),
  ],
  declarations: [BaseLayerComponent],
  exports: [BaseLayerComponent],
  providers:[
    BaseLayerFacadeService,
    BusinessStructureFilterService,
    BusinessStructureWebSocketService,
  ]
})
export class BaseLayerModule {}
