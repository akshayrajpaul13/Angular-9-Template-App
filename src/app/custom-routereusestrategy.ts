import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStategy implements RouteReuseStrategy {

  handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor() {
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.data['shouldReuse']) {
      return null;
    }
    console.log('Attach cached page for: ', route.data['key']);
    return this.handlers[route.data['key']];
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.data['shouldReuse']) {
      this.handlers[route.data['key']] = handle;
    }
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data['shouldReuse'];
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data['shouldReuse'] && !!this.handlers[route.data['key']];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return !!future.data['shouldReuse'];
  }
}
