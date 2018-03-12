import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const materials = [
      {
        'id': 1,
        'name': 'Meterial 1',
        'article_id': 'material1',
        'tags': ['Paid'],
        'state': 'completed',
        'gallery_image': '../assets/images/shader-balls/mat0001.jpg'
      },
      {
        'id': 2,
        'name': 'Meterial 2',
        'article_id': 'material2',
        'tags': ['Paid'],
        'state': 'completed',
        'gallery_image': '../assets/images/shader-balls/mat0002.jpg'
      },
      {
        'id': 3,
        'name': 'Meterial 3',
        'article_id': 'material3',
        'tags': ['Paid'],
        'state': 'completed',
        'gallery_image': '../assets/images/shader-balls/mat0003.jpg'
      },
      {
        'id': 4,
        'name': 'Meterial 4',
        'article_id': 'material4',
        'tags': ['Paid'],
        'state': 'completed',
        'gallery_image': '../assets/images/shader-balls/mat0004.jpg'
      }
    ];
    return {materials};
  }
}
