class BluePrint {
  private static element: HTMLImageElement;

  static insert(url: string) {
    if (!url) {
      throw new Error("specify image url");
    }
    if (BluePrint.element) {
      BluePrint.element.src = url;
    } else {
      BluePrint.insertImage(url);
    }
  }

  static setOpacity(opacity) {
    BluePrint.assertElement();
    BluePrint.element.style.opacity = opacity;
  }

  private static insertImage(url: string) {
    BluePrint.element = document.createElement('img');
    BluePrint.element.src = url;
    BluePrint.setBaseStyle(BluePrint.element);
    document.body.appendChild(BluePrint.element);
  }

  private static setBaseStyle(img) {
    img.style.position = "absolute";
    img.style.top = 0;
    img.style.left = 0;
    img.style.zIndex = 999;
    img.style.opacity = 0.5;
  }

  private static assertElement() {
    if (!BluePrint.element) {
      throw new Error("call insertImage(url) at first");
    }
  }

}

