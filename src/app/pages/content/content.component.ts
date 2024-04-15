import { Element } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ''
  contentTitle:string = ''
  contentDescription:string = ''
  tags:string[] = [];
  private id:string | null = "0";
  numTags:number = 0;
  botaoVoltar = "";


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuestoComponent(this.id)

    this.insertTags()
  }

  setValuestoComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.descriptionPage;
    this.photoCover = result.photoCover;
    this.tags = result.tags
    this.botaoVoltar = "src/assets/img/seta.png"

  }

  insertTags(){

    if (this.tags.length != 0){
      const divPai = document.getElementById("tags")
      this.tags.forEach(item =>{
        let newParagraph = document.createElement("p")
        newParagraph.textContent = item
        newParagraph.className = 'tags__style'
        divPai?.appendChild(newParagraph)
      })
    }

  }



}
