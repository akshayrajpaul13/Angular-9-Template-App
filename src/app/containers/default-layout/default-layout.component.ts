import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent {
  public currentRoute = '';
  public sidebarMinimized = false;
  public sidebarCompact = false;
  public navItems = navItems;

  constructor(private router: Router, private authService: AuthService) {
    this.currentRoute = router.url;
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  toggleCompact(e) {
    console.log(e);
    this.sidebarCompact = e;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
