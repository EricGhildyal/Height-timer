var startTime = 0;
var running = false;
var time;
var s = true; //by default, displays start

function dispHeight(){
	var endTime = Date.now();
	var height = 0;
	var heightmt = 0;
	totalTime = (endTime - startTime)/1000; // divided by 1000 to get seconds, not milliseconds
	document.getElementById('time').innerHTML = totalTime + ' Seconds';
	height = 16*(totalTime*totalTime);
	document.getElementById('height-ft-disp').innerHTML = height + ' Feet';
	heightmt = 4.9*(totalTime*totalTime)
	document.getElementById('height-mt-disp').innerHTML = heightmt + ' Meters';
}

function changebtn(){
	if(s){
		start();
		document.getElementById('startstop').value='Stop';
		s = false; //stop is showing, so start is false
	} else {
		stop();
		document.getElementById('startstop').value='Reset';
		s = true; //reset is showing, so stop is false
	}
}

function reset(){
	 //resets the counters
	document.getElementById('time').innerHTML = '';
	document.getElementById('height-ft-disp').innerHTML = '';
	document.getElementById('height-mt-disp').innerHTML = '';
}

function start(){
	reset();
	// start counting
	running = true;
	startTime = Date.now();
	showTime();
}

function stop(){
	running = false;
	dispHeight();
}

function showTime(){
	if(running){
		window.requestAnimationFrame(function() //loop
        {
            showTime();
        });
		time = Date.now() - startTime;
		document.getElementById('time').innerHTML = 'Counting...'; 
		//Doesn't display current time to save resources on mobile devices
	}
}
