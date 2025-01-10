import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css'],
  imports: [CommonModule, RouterOutlet]

})
export class MainCourseComponent implements OnInit {
  maincourse: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Fetch only the items in the "Starters" category
    this.menuService.getMenuItems().subscribe((menu) => {
      this.maincourse = menu.filter((item) => item.category === 'Main Course');
    });
  }
}
