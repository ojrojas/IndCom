import { Component, OnInit } from "@angular/core";
import { SearchResult } from "./search-result.model";

@Component({
    selector:'app-you-tube-search',
    templateUrl: './youtube-search.component.html'
})
export class YoutubeSearchComponent implements OnInit {
    results:SearchResult[];
    loading:boolean;
    constructor() {}

    ngOnInit(){}

    updateResults(results:SearchResult[]):void{
        this.results = results;
    }
}