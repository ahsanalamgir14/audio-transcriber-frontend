import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBlobComponent } from './audio-blob.component';

describe('AudioBlobComponent', () => {
  let component: AudioBlobComponent;
  let fixture: ComponentFixture<AudioBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioBlobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
