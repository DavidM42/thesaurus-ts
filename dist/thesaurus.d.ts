export declare class ThesaurusTS {
    private words;
    constructor(language?: 'en' | 'de');
    search(term: string): any;
    reverseSearch(term: string): string[];
}
