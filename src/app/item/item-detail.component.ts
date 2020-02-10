import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    
    sore : number;

    public list : Item[] = [];
    show : boolean



    public item :Item;

    zero: boolean;

    add: boolean = false;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);

    }

    onUpdate(data){
        this.show = true;
        this.item.name = data.name,
        this.item.role = data.role
    }


    addScore(){
        this.item.score++;
        this.zero=false;
    }

    minusScore(){
        this.item.score--;
        if(this.item.score==0){
            this.zero = true;
        }
    }
}
