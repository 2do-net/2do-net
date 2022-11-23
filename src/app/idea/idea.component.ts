import { Component } from '@angular/core';
import { ideas } from '../ideas';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent {
  ideas = ideas;
}
