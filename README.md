
# Task ID: Lazy Loading

Create a Web Application that should implement lazy loading on an image dataset and display only a few images on the screen at a time.
The image dataset should contain at least 100 images

Lazy loading is the practice of delaying load or initialization of resources until they’re actually needed to improve performance and save system resources.

The benefits of lazy loading include:

   <ul>
      <li>Reduces initial load time</li>
      <li>Bandwidth conservation</li>
      <li>System resource conservation</li>
   </ul>

## Deployment

Go to the site https://lazy-loading-sujay000.herokuapp.com/ it is cloud deployed on herokuapp



## Project Setup

1. Download/clone the repository
2. Make sure node and npm are installed in your machine
3. Run `npm install`
4. Run `node app.js` to start the project.


## Running Tests

To run tests and to see the lazy loading implementation,
1. Open the developer tools (Right-click & click on inspect or Ctrl+Shift+I)

<img src='https://www.linkpicture.com/q/inspect.png' type='image'>

2. Next go to the 'Network' option there.

3. The images are of HD quality so you would see them loading, but you can control the network speed by throttling, choose the slow 3G network to 
see it more vividly.

4. Here in the Network section the images loaded are visible, not all images are loaded, now try scrolling the page, more images get added to the loading part which is visible in the Network section. 


<img src='https://www.linkpicture.com/q/network_2.png' type='image'>
<br/>

## Precaution
 Make sure that you 'empty cache and hard reload' every time before you test, otherwise the images would be loaded from the cache.
    To refresh with this option open developer tools, now right-click on the refresh button, and choose that option.
    
<img src='https://www.linkpicture.com/q/hardReload.png' type='image'>
<br/>

## Reference links

* https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
* https://reactjs.org/docs/code-splitting.html
* https://youtu.be/AActXSWxsRo


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  Color 1 | ![#0A1929](https://via.placeholder.com/10/0A1929?text=+) #0A1929 |
|  Color 2 | ![#3587DE](https://via.placeholder.com/10/3587DE?text=+) #3587DE |
|  Color 3 | ![#C8F7F3](https://via.placeholder.com/10/C8F7F3?text=+) #C8F7F3 |
