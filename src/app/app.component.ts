import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Ensure this is imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zaiqa-darbar';

  navOpen = false; // Variable to track navigation menu state

  toggleNav() {
    this.navOpen = !this.navOpen; // Toggle the navigation menu state
  }
}
