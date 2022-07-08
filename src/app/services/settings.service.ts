import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elementoTheme = document.querySelector('#theme');

  constructor() {
    
    const url: string = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.elementoTheme?.setAttribute('href',url);

  }

  changeTheme( theme: string ) {
  
    const url: string = `./assets/css/colors/${ theme }.css`; 
    this.elementoTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll(".selector");
    
    links.forEach(element => {
      
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.elementoTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ) {
         
        element.classList.add('working');

      }

    });
  }   


}
