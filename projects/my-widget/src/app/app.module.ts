import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyWidgetComponent } from './components/my-widget/my-widget.component';
import { MyWidgetModule } from './components/my-widget/my-widget.module';

@NgModule({
  imports: [
    BrowserModule,
    MyWidgetModule,
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponent = createCustomElement(MyWidgetComponent, { injector });
    customElements.define('my-widget', webComponent);
  }

  public ngDoBootstrap(): void {}
}
