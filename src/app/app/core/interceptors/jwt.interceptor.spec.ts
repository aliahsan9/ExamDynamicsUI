import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { of } from 'rxjs';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = new JwtInterceptor();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header when token exists', (done) => {
    localStorage.setItem('token', 'test-token');

    const mockRequest = new HttpRequest('GET', '/test');
    const mockNext: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.get('Authorization')).toBe('Bearer test-token');
        done();
        return of({} as HttpEvent<any>);
      }
    };

    interceptor.intercept(mockRequest, mockNext).subscribe();
  });

  it('should not add Authorization header when no token exists', (done) => {
    localStorage.removeItem('token');

    const mockRequest = new HttpRequest('GET', '/test');
    const mockNext: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.has('Authorization')).toBeFalse();
        done();
        return of({} as HttpEvent<any>);
      }
    };

    interceptor.intercept(mockRequest, mockNext).subscribe();
  });
});
