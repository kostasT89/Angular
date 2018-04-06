import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { UserService, HttpService } from '../shared/service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, ItemComponent ],
      imports: [ SharedModule, HttpClientModule,
        RouterModule.forRoot([{ path: '', component: HomeComponent}]) ],
      providers: [ UserService, HttpService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
