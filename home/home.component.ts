import { Component, OnInit } from '@angular/core';
import { UserService, HttpService } from '../shared/service';
import { Router } from '@angular/router';
import { Item } from '../shared/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filter: string;
  loading: boolean;
  items: Item[];
  totals: number;

  constructor(
    private userService: UserService,
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.userService.signedIn) {
      this.router.navigate(['user']);
    }
  }

  searchImage() {
    this.loading = true;
    this.httpService.get('search', {
      media_type: 'image',
      q: this.filter
    }).subscribe(
      res => {
        this.loading = false;
        this.items = res.collection.items.map(item => {
          return {
            url: item.links[0].href,
            description: item.data[0].description,
            title:  item.data[0].title,
            created_at: item.data[0].date_created
          };
        });

        this.totals = res.collection.metadata.total_hits;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
