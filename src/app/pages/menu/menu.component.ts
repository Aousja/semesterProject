import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-menu',  // Correct selector (remove the HTTP request)

  imports: [CommonModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private menuService: MenuService) {}  // Inject HttpClient

  menuItems: any[] = [];
  

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((menu) => {
      this.menuItems = menu;
    })
  }
}
