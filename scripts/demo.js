window.addEvent('domready', function(){
   
  
  
  var slideshow = new BarackSlideshow('menu', 'pictures', 'loading', {transition: 'fade', auto: true});

	// the example above is only fitting for this demo, since we let the user pick the transition and turn auto on/off
	// for most scenarios, it's only enough with: 
	// new BarackSlideshow('menu', 'pictures', 'loading', {transition: '<transition here>', auto: true});
	// transitions can be 'slide-left', 'slide-right', 'slide-top', 'slide-bottom', 'fade'
});