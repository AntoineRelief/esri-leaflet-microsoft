import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriAuthComponent } from './esri-auth.component';

describe('EsriAuthComponent', () => {
  let component: EsriAuthComponent;
  let fixture: ComponentFixture<EsriAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsriAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsriAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
