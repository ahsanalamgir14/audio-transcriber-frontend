import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrabadoraComponent } from './grabadora.component';

describe('GrabadoraComponent', () => {
  let component: GrabadoraComponent;
  let fixture: ComponentFixture<GrabadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrabadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrabadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
