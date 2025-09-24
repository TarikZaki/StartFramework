import { Component } from '@angular/core';
import { Star } from "../star/star";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Star, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  title: string = "Contact Section"
  lineClr: string = 'var(--main-clr)'
  userName!: string;
  userAge!: number;
  userPassword!: string;
  userEmail!: string;

}

