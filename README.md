L.control.endToEndCursor
-----------------------

Quite posibly the smallest leaflet plugin. Displays an extened cursor.
I'm pretty sure this is **_the_** most inefficient way to do this. Currently it creates 
two ginormous polylines and moes them around with the mouse.
No options yet, currently you get a grey 1-pixel wide cursor.

#### Usage

Assuming your leaflet map is called ```map```:

```
var myendToEndCursor = L.control.endToEndCursor();
map.addControl(myendToEndCursor);
```

And that is it!!

[Check out the demo.](http://rhysallister.github.io/endtoend/end2end.html)

