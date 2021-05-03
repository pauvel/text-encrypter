import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-encriptar-page',
  templateUrl: './encriptar-page.component.html',
  styleUrls: ['./encriptar-page.component.css']
})
export class EncriptarPageComponent implements OnInit {

  contenidoTxt:string = '';

  constructor(
  ) { }



  ngOnInit(): void {
  }

  getArchive(){
    const fileChooser = <HTMLInputElement>document.querySelector('input[type="file"]');
    fileChooser.click();
  }

  onChange(files:FileList):void{
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.contenidoTxt = fileReader.result.toString().trim();
    }
    fileReader.readAsText(file);
  }

}
