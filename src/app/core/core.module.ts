import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptorService, ExceptionHandlerService } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ExceptionHandlerService,
    },
  ],
})
export class CoreModule {}
