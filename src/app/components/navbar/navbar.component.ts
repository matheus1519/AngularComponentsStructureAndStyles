import { Component, Input } from '@angular/core';

type DirectionType = 'horizontal' | 'vertical' | 'teste'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username = 'Nome'
  @Input() direction: DirectionType = 'horizontal'

  changeDirection(direction: DirectionType){
    this.direction = direction
  }
}
