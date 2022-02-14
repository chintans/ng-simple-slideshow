import { Component, OnInit } from "@angular/core";
import { IImage } from "./modules/slideshow/IImage";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    {
      url: "https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg",
      caption: "The first slide",
      href: "#config",
    },
    {
      url: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg",
      clickAction: () => alert("custom click function"),
    },
    {
      url: "https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg",
      caption: "Apple TV",
      href: "https://www.apple.com/",
    },
    "https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg",
    {
      url: "assets/kitties.jpg",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  ];
  height = "400px";
  minHeight: string;
  arrowSize = "30px";
  showArrows = true;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 3333;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = "cover";
  backgroundPosition = "center center";
  backgroundRepeat = "no-repeat";
  showDots = true;
  dotColor = "#FFF";
  showCaptions = true;
  captionColor = "#FFF";
  captionBackground = "rgba(0, 0, 0, .35)";
  lazyLoad = false;
  hideOnNoSlides = false;
  width = "100%";
  fullscreen = false;
  enableZoom = false;
  enablePan = false;
  noLoop = false;

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log("adding an image url dynamically.");
      this.imageUrls.push(
        "https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg"
      );
    }, 2000);
    console.log(`
                                  /   \\
 _                        )      ((   ))     (
(@)                      /|\\      ))_((     /|\\
|-|                     / | \\    (/\\|/\\)   / | \\                      (@)
| | -------------------/--|-voV---\`|'/---Vov-|--\\---------------------|-|
|-|                         '^\`   (o o)  '^\`                          | |
| |                               \`\\Y/'                               |-|
|-|                                                                   | |
| |                                Hey                                |-|
|-|                                                                   | |
| |                                                                   |-|
|_|___________________________________________________________________| |
(@)              l   /\\ /         ( (       \\ /\\   l                \`\\|-|
                 l /   V           \\ \\       V   \\ l                  (@)
                 l/                _) )_          \\I
                                   \`\\ /'
				                     \`
    `);
  }

  testEvent(event) {
    console.log(typeof event);
    console.log(event);
  }
}
