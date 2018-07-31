// WHY models - M in MVC
// decouple the model , split the logic
export class Article {
    title: string; link: string; votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}
/* use it like this
import { Article } from './article.model';
article: Article;
constructor() {
this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
}
*/