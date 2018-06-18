var BluePrint = (function () {
    function BluePrint() {
    }
    BluePrint.insert = function (url) {
        if (!url) {
            throw new Error("specify image url");
        }
        if (BluePrint.element) {
            BluePrint.element.src = url;
        }
        else {
            BluePrint.insertImage(url);
        }
    };
    BluePrint.setOpacity = function (opacity) {
        BluePrint.assertElement();
        BluePrint.element.style.opacity = opacity;
    };
    BluePrint.insertImage = function (url) {
        BluePrint.element = document.createElement('img');
        BluePrint.element.src = url;
        BluePrint.setBaseStyle(BluePrint.element);
        document.body.appendChild(BluePrint.element);
    };
    BluePrint.setBaseStyle = function (img) {
        img.style.position = "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.zIndex = 999;
        img.style.opacity = 0.5;
    };
    BluePrint.assertElement = function () {
        if (!BluePrint.element) {
            throw new Error("call insertImage(url) at first");
        }
    };
    return BluePrint;
}());
