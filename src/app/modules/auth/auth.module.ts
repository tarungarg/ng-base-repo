import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

export function init_app(authService: AuthService) {
  return () => authService.initializeApp();
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AuthModule {}
