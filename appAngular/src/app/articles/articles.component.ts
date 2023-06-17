import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  public title = "Liste articles";

  maDate = new Date();

  public articles: any[] = [
  {
    artId: 1,
    artName: 'Les datas',
    artDescrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus nec enim sed nisi interdum efficitur. Sed nec congue metus. Sed condimentum id orci sit amet finibus.
    Aenean pharetra enim et tellus dapibus pulvinar. Mauris iaculis eu turpis placerat feugiat. Duis posuere, massa et
    cursus sagittis, mi metus convallis justo.`,
    artImage: 'assets/img/data.jpg',
    artDate: this.maDate
  },
  {
    artId: 2,
    artName: 'Les Technologies',
    artDescrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus nec enim sed nisi interdum efficitur. Sed nec congue metus. Sed condimentum id orci sit amet finibus.
    Aenean pharetra enim et tellus dapibus pulvinar. Mauris iaculis eu turpis placerat feugiat. Duis posuere, massa et
    cursus sagittis, mi metus convallis justo.`,
    artImage: 'assets/img/tech.jpg',
    artDate: this.maDate
  },
  {
    artId: 3,
    artName: 'Design',
    artDescrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus nec enim sed nisi interdum efficitur. Sed nec congue metus. Sed condimentum id orci sit amet finibus.
    Aenean pharetra enim et tellus dapibus pulvinar. Mauris iaculis eu turpis placerat feugiat. Duis posuere, massa et
    cursus sagittis, mi metus convallis justo.`,
    artImage: 'assets/img/design.jpg',
    artDate: this.maDate
  },
  {
    artId: 4,
    artName: 'Designer',
    artDescrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus nec enim sed nisi interdum efficitur. Sed nec congue metus. Sed condimentum id orci sit amet finibus.
    Aenean pharetra enim et tellus dapibus pulvinar. Mauris iaculis eu turpis placerat feugiat. Duis posuere, massa et
    cursus sagittis, mi metus convallis justo.`,
    artImage: 'assets/img/designer.jpg',
    artDate: this.maDate
  },
  {
    artId: 5,
    artName: 'Social Media',
    artDescrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Vivamus nec enim sed nisi interdum efficitur. Sed nec congue metus. Sed condimentum id orci sit amet finibus.
    Aenean pharetra enim et tellus dapibus pulvinar. Mauris iaculis eu turpis placerat feugiat. Duis posuere, massa et
    cursus sagittis, mi metus convallis justo.`,
    artImage: 'assets/img/social.jpg',
    artDate: this.maDate
  }


]
}
