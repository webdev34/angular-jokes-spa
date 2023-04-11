import { Component } from '@angular/core';
import { JokesService } from './services/jokes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  currentJokeArray: any;
  showPunchline: boolean = false;
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(private jokesService: JokesService){}

  ngOnInit() {
    this.getJokes('random');
  }

  togglePunchlineDisplay(){
    this.showPunchline = !this.showPunchline;
  }

  getJokes(type: string){
    this.showPunchline = false;
    this.isLoading = true;
    
    this.jokesService.getJokesData(type).subscribe(
      (response) => {
          // Assuming the response always returns an array with atleast one item
          this.currentJokeArray = response; 
          setTimeout(() => { 
            this.isLoading = false; 
            this.hasError = false;
          }, 1000);
        },
      (error: HttpErrorResponse) => {
        this.currentJokeArray = false;
        this.isLoading = false;
        this.hasError = true;
        alert(error?.message);
    });
  }

}
