//Coloca aqui tu Clave youtube API V3
export const YOUTUBE_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXX-XXXXXX";
export const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { SearchResult } from "./search-result.model";

@Injectable()
export class YoutubeSearchService {
    constructor(private http: HttpClient, @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string) {

    }
    search(query: string): Observable<SearchResult[]> {
        const params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;
        return this.http.get(queryUrl).map(response => {
            return <any>response['items'].map(item => {
                console.log('El item: ',item);
                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url   
                });
            });
        });
    }
}
