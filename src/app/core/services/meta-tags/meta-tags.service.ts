import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaTagsService {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateMetaTag(type: string, tag: string, value: any) {
    if (type == 'update') {
      switch (tag) {
        case 'title':
          {
            this.titleService.setTitle(value);
          }
          break;

        case 'keywords':
          {
            this.metaService.updateTag({ name: 'keywords', content: value });
          }
          break;

        case 'description':
          {
            this.metaService.updateTag({ name: 'description', content: value });
          }
          break;

        case 'og:title':
          {
            this.metaService.updateTag({
              property: 'og:title',
              content: value,
            });
          }
          break;

        case 'og:type':
          {
            this.metaService.updateTag({ property: 'og:type', content: value });
          }
          break;

        case 'og:image':
          {
            this.metaService.updateTag({
              property: 'og:image',
              content: value[0]['url'],
            });
          }
          break;

        case 'og:url':
          {
            this.metaService.updateTag({ property: 'og:url', content: value });
          }
          break;

        case 'og:description':
          {
            this.metaService.updateTag({
              property: 'og:description',
              content: value,
            });
          }
          break;

        default:
          break;
      }
    }
  }
}
