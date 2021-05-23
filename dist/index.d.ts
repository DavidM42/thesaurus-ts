export declare class ThesaurusTS {
    private words;
    private dictionarySeperator;
    constructor(language?: 'en' | 'de');
    search(term: string): any;
    reverseSearch(term: string): string[];
}
