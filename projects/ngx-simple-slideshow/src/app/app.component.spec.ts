import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
describe("AppComponent", () => {
  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  it(
    "should create the app",
    waitForAsync(async () => {
      const fixture = TestBed.createComponent<AppComponent>(AppComponent);
      const app = fixture.debugElement.componentInstance as AppComponent;

      await expect(app).toBeTruthy();
    })
  );
});
