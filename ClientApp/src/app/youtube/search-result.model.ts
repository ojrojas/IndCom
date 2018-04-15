export class SearchResult {
    id: string;
    title: string;
    thumbnailUrl: string;
    description: string;
    videoUrl: string;
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title;
        this.description = obj && obj.description || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
        this.thumbnailUrl = obj && obj.thumbnailUrl ||null
    }
}