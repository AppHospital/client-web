import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src/app/app.feature');

defineFeature(feature, test => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  let app: any;

  test('L\'application doit exister', ({ when, then }) => {
    when('Je lance l\'application', () => {
      const fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;

      /*
      2 cas possibles :
         - componentInstance (app = fixture.debugElement.componentInstance;) => accède à la classe du composant
         - nativeElement (app =  = fixture.debugElement.nativeElement;) => accède au code html généré.

        Exemple componentInstance :
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app.title).toEqual('bfe-web');
        Exemple nativeElement :
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Welcome to bfe-web!');
      */
    });

    then('L\'objet app existe', () => {
      expect(app).toBeTruthy();
    });
  });
});
