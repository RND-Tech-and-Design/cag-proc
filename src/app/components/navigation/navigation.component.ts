import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIcon, RouterModule, CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'

})
export class NavigationComponent {
    routes: Routes = [];
    activeRoute: string;

    constructor(private router: Router) {
        this.routes = this.router.config.filter(route => route.title);
        this.activeRoute = this.router.url;
    }
}
