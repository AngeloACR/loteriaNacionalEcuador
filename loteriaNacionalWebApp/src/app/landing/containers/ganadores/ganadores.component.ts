import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(link) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
} 



@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.scss']
})

export class GanadoresComponent implements OnInit {

  link:string = "https://www.youtube.com/embed/yR_S-qNNlkw"
  title:string = "You title of Video"

  constructor() { }

  ngOnInit() {
  }

}
