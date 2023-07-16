import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isAuthenticate = false;
  constructor(private router: Router, private authService: AuthService){
    authService.isAuthenticate$.subscribe(data => {
      this.isAuthenticate = data;
    })
  }

  handleLogout() {
    localStorage.removeItem('user');
    this.authService.isAuthenticate$.next(false);
    this.router.navigateByUrl('/');
  }
}
