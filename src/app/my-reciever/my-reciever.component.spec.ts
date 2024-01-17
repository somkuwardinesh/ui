import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecieverComponent } from './my-reciever.component';

describe('MyRecieverComponent', () => {
  let component: MyRecieverComponent;
  let fixture: ComponentFixture<MyRecieverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRecieverComponent]
    });
    fixture = TestBed.createComponent(MyRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
