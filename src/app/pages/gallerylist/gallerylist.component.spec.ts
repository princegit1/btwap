import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylistComponent } from './gallerylist.component';

describe('GallerylistComponent', () => {
  let component: GallerylistComponent;
  let fixture: ComponentFixture<GallerylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
