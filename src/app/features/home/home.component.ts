import { Component, Inject } from '@angular/core';
import { CONFIG_TOKEN, EuiAppConfig } from '@eui/core';
import { UxAppShellService } from '@eui/core';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(
        @Inject(CONFIG_TOKEN) private config: EuiAppConfig,
        public uxAppShellService: UxAppShellService
    ) {
        console.log(config);
    }

    onShowGrowl() {
        this.uxAppShellService.growlInfo('Sample message');
    }
}
