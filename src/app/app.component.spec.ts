import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Service1Service } from './services/service1.service';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service1: Service1Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [Service1Service]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service1 = TestBed.get(Service1Service);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shoud test service1', () => {

    spyOn(service1 as any, 'testFunction').and.callFake(() => {
      console.log('callFake');
    });
    // spyOnProperty(service1, 'testProperty', 'get').and.returnValue(99);

    // service1.
    // console.log('service1.test', service1.test);

    console.log('service1.testProperty 1', service1.testProperty);
    component.serviceTestFunction();
    console.log('service1.testProperty 2', service1.testProperty);

    // expect(component.testService1()).toBe(1);
  });
});
