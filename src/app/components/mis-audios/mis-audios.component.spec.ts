import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAudiosComponent } from './mis-audios.component';

describe('MisAudiosComponent', () => {
  let component: MisAudiosComponent;
  let fixture: ComponentFixture<MisAudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisAudiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
