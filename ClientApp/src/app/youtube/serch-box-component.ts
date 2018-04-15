import { Component, OnInit, Output, ElementRef, EventEmitter } from "@angular/core";
import { SearchResult } from "./search-result.model";
import { YoutubeSearchService } from "./youtube-search.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
    selector: 'app-search-box',
    template: `<div class="ui input" style="width:100%;">
    <input type="text" class="ui input"  placeholder="Buscar Videos">
    </div>`
})
export class SearchBoxComponent implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube: YoutubeSearchService, private el: ElementRef) {

    }

    ngOnInit(): void {
        Observable.fromEvent(this.el.nativeElement, 'keyup').map((e: any) =>
            e.target.value).filter((text: string) => text.length > 1).debounceTime(250)
            .do(() => this.loading.emit(true)).map((query: string) => this.youtube.search(query))
            .switch()
            .subscribe(
                (results: SearchResult[]) => {
                    this.loading.emit(true);
                    this.results.emit(results);
                }, (err: any) => {
                    console.log(err);
                    this.loading.emit(false);
                }, () => {
                    this.loading.emit(false);
                }
            );
    }
}