import { TestBed, waitForAsync } from '@angular/core/testing'

import { HomeComponent } from './home.component'

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
      }).compileComponents()
    }),
  )
  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(HomeComponent)
      const app = fixture.debugElement.componentInstance
      expect(app).toBeTruthy()
    }),
  )
  it(
    `should have as title 'ng-study'`,
    waitForAsync(() => {
      const fixture = TestBed.createComponent(HomeComponent)
      const app = fixture.debugElement.componentInstance
      expect(app.title).toEqual('ng-study')
    }),
  )
  it(
    'should render title in a h1 tag',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(HomeComponent)
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('h1').textContent.trim()).toEqual(
        'Welcome to ng-study! Go to Phones',
      )
    }),
  )
})
