import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-linux',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  RouterLink, RouterLinkActive],
  templateUrl: './linux.component.html',
  styleUrl: './linux.component.css'
})
export class LinuxComponent {

}
