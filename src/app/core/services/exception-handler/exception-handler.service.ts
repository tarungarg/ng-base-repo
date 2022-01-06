import { Injectable, ErrorHandler } from '@angular/core';

/**
 * Service to handle exceptions and error
 */
@Injectable({
  providedIn: 'root',
})
export class ExceptionHandlerService implements ErrorHandler {
  constructor() {}

  /**
   * All the exceptions and errors will be handled by this function
   * @param error Error
   */
  handleError(error: Error) {
    console.log(error);
  }
}
