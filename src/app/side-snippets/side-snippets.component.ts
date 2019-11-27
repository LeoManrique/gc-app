import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-snippets',
  templateUrl: './side-snippets.component.html',
  styleUrls: ['./side-snippets.component.css']
})
export class SideSnippetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById( 'snippet-sql' ).style.display = 'none';
    document.getElementById( 'documento-java' ).style.display = 'none';
  }

  mostrarJava() {
    document.getElementById( 'snippet-sql' ).style.display = 'none';
    document.getElementById( 'documento-java' ).style.display = 'block';
  }

  mostrarSql() {
    document.getElementById( 'snippet-sql' ).style.display = 'block';
    document.getElementById( 'documento-java' ).style.display = 'none';
  }

}
