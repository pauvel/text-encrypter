import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import Rijndael from 'rijndael-js';
import saver from 'file-saver';

@Component({
  selector: 'app-encriptar-page',
  templateUrl: './encriptar-page.component.html',
  styleUrls: ['./encriptar-page.component.css']
})
export class EncriptarPageComponent implements OnInit {

  key:string = '';
  iv:string = '';
  contenidoTxt:string = '';
  contenidoTxtDE:string = '';
  excriptadoTxt:any = '';
  actualAlgoritmo:string = 'rijndael';
  
  constructor(
  ) { }



  ngOnInit(): void {
  }

  getArchive(){
    const fileChooser = <HTMLInputElement>document.querySelector('input[type="file"]');
    fileChooser.click();
  }

  onChangeTextFile(files:FileList):void{
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.contenidoTxt = fileReader.result.toString().trim();
    }
    fileReader.readAsText(file);
  }

  setAlgorithm(value:string):void{
    this.actualAlgoritmo = value;
    console.log(this.actualAlgoritmo)
  }

  decrypt():void{
    const textToDecrypt = <HTMLInputElement>document.querySelector('#decryptArea');
    if(textToDecrypt.value.length < 1){
      alert('Nada que decriptar.');
      return;
    }

    const inputIV = <HTMLInputElement>document.querySelector('#ivDE');
    const inputKey = <HTMLInputElement>document.querySelector('#keyDE');
    
    
    const cipher = new Rijndael(inputKey.value.trim(), 'cbc');
    const ciphertext = Buffer.from(cipher.encrypt(this.contenidoTxt, '256', inputIV.value));
    const plaintext = Buffer.from(cipher.decrypt(Buffer.from(ciphertext), '256', inputIV.value));
    this.contenidoTxtDE = plaintext.toString("utf8");

  }

  generateHexString(length) {
    var ret = "";
    while (ret.length < length) {
      ret += Math.random().toString(16).substring(2);
    }
    return ret.substring(0,length);
  }

  encrypt():void{
    if(this.contenidoTxt.length < 1){
      alert('Nada que encriptar.');
      return;
    }

    const inputIV = <HTMLInputElement>document.querySelector('#iv');
    const inputKey = <HTMLInputElement>document.querySelector('#key');
    const inputIVDE = <HTMLInputElement>document.querySelector('#ivDE');
    const inputKeyDE = <HTMLInputElement>document.querySelector('#keyDE');

    const keyiv = this.generateHexString(32);
    inputIV.value = keyiv;
    inputKey.value = keyiv;
    inputIVDE.value = keyiv;
    inputKeyDE.value = keyiv;

    if(inputIV.value.length < 1 || inputKey.value.length < 1 ){
      alert('No deje campos vacios.');
      return;
    }

    this.key = inputKey.value.trim();
    this.iv = inputIV.value.trim();

    if(this.actualAlgoritmo == 'rijndael'){
      this.useRijndael();
    }

  }

  useRijndael():void{
    
    // Key can be 16/24/32 bytes long (128/192/256 bit)
    const key = this.key;
    // IV is necessary for CBC mode
    // IV should have same length with the block size
    const iv = this.iv;
    // Create Rijndael instance
    // `new Rijndael(key, mode)`
    const cipher = new Rijndael(key, 'cbc');
    // `Rijndael.encrypt(plaintext, blockSize[, iv]) -> <Array>`
    // Output will always be <Array> where every element is an integer <Number>
    const ciphertext = Buffer.from(cipher.encrypt(this.contenidoTxt, '256', iv));
    // ciphertext.toString("base64");
    // -> bmwLDaLiI1k0oUu5wx9dlWs+Uuw3IhIkMYvq0VsVlQY66wAAqS0djh8N+SZJNHsv8wBRfhytRX2p9LJ0GT3sig==
    // `Rijndael.decrypt(ciphertext, blockSize[, iv]) -> <Array>`
    // 
    // this.excriptadoTxt = ciphertext.toString("base64");
    this.excriptadoTxt = ciphertext.toString("base64");
    console.log(ciphertext)
    var blob = new Blob([ciphertext], {type: 'application/octet-stream'});
    saver.saveAs(blob, "encriptado.bin");
    // -> true
  }

  copiarTexto(item:string){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = item;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert('Copiado.')
  }

}
