import { Component, signal } from '@angular/core';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FlightService } from '../services/flight.service';
import { Loading } from '../loading/loading';


@Component({
  selector: 'app-user',
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, MatIcon, MatAnchor, MatSelectModule, Loading],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  public activeUser = authService.getActiveUser()
  destinations = signal<string[]>([])

  constructor(private router: Router) {
    if(!authService.getActiveUser()) {
      router.navigate(['/login'])
      return
    }
    FlightService.getDestinations()
    .then(rsp=>this.destinations.set(rsp.data))
    }
    updateUser(){
      authService.updateActiveUser(this.activeUser!)
      alert('User updated successfully')
    }
    
  }
