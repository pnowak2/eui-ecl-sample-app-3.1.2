import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EclAllModule } from '@eui/ecl-core';
import { EuiAllModule } from '@eui/components';

@NgModule({
    imports: [
        RouterModule,
        EclAllModule,
        EuiAllModule,
        TranslateModule,
    ],
    declarations: [
    ],
    exports: [
        RouterModule,
        EclAllModule,
        EuiAllModule,
        TranslateModule,
    ],
})
export class SharedModule {}
