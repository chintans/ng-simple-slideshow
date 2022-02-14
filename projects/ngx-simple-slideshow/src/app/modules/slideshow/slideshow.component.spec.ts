import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { SlideshowComponent } from "./slideshow.component";

describe("SlideshowComponent", () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [SlideshowComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    "should create",
    waitForAsync(async () => {
      await expect(component).toBeTruthy();
    })
  );
});
