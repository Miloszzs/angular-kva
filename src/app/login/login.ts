import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatInputModule, MatAnchor, MatButtonModule, MatIcon, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {
    if(authService.getActiveUser()) {
      router.navigate(['/'])
    }
  }

  email: string = 'user@example.com'
  password: string = 'user123'

  doLogin() {
    if (authService.login(this.email, this.password)) {
      this.router.navigate(['/'])
      return
    }
    alert('Invalid email or password!')
  }
}
