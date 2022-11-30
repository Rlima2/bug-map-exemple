import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor() { }

  ngOnInit(): void {

    if (this.isLoggedIn) {
      this.showAdminBoard = this.roles.includes('ADMIN');
    }
  }

  logout(): void {
    window.location.reload();
  }


}
