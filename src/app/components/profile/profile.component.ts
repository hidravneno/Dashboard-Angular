import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() userName: string = 'Usuario';
  @Input() avatarUrl: string = 'https://via.placeholder.com/80';
}
