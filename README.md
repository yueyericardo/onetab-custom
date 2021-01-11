# onetab-custom

### Features
- Download as json
  - Without loss of timestamp information
  - D for keyboard shortcut
  - Do it regularly to backup!
- Import from json
- Dark mode

<p align="center">
<img src="https://raw.githubusercontent.com/yueyericardo/onetab-custom/master/images/screenshot.png" width="600" height="auto">
</p>

### Install
1. Run the following code in the Console of onetab page to export your current onetab json data
```js
function download() {
    var text = localStorage.getItem('state');
    var filename = 'onetab.json';
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
download();
```
2. Git clone this repo and click `Load Unpacked` from chrome's extension page, load this repo's folder to install the extension.
