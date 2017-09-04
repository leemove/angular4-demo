import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '雷神' },
      { id: 12, name: '绿巨人' },
      { id: 13, name: '黑寡妇' },
      { id: 14, name: '超人' },
      { id: 15, name: '美国队长' },
      { id: 16, name: '蝙蝠侠' },
      { id: 17, name: '蚁人' },
      { id: 18, name: '奇异博士' },
      { id: 19, name: '神奇女侠' },
      { id: 20, name: '死侍' }
  ];
    return {heroes};
  }
}
