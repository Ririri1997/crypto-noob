export interface NewsItem {
 body: string;
 categories: string;
 downvotes: string;
 guid: string;
 id: string;
 imageurl: string;
 lang: string;
 published_on: number;
 source: string;
 source_info: {
   name: string;
   img: string;
   lang: string;
 };
 tags: string;
 title: string;
 upvotes: string;
 url: string;
}

// export interface NewsResponse {
//  Type: number;
//  Message: string;
//  Promoted: any[];
//  Data: NewsItem[];
//  RateLimit: any;
// }
