import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
  imports: [CommonModule, RouterOutlet]

})
export class DessertsComponent implements OnInit {
  desserts: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Fetch only the items in the "Starters" category
    this.menuService.getMenuItems().subscribe((menu) => {
      this.desserts = menu.filter((item) => item.category === 'Desserts');
    });
  }
}
