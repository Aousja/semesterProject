import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css'],
  imports: [CommonModule, RouterOutlet]

})
export class StartersComponent implements OnInit {
  starters: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
  
    // Fetch only the items in the "Starters" category
    this.menuService.getMenuItems().subscribe((menu) => {
      this.starters = menu.filter((item) => item.category === 'Starters');
    });
  }
}

 