
	var myAudio=document.getElementById("day_mp3");

	var segEnd;

	myAudio.addEventListener("timeupdate", function (){
		if (myAudio.currentTime >= segEnd) {
			myAudio.pause();
		}   
		console.log(myAudio.currentTime);
	}, false);

	function playSegment(startTime, endTime){
		segEnd = endTime;
		myAudio.currentTime = startTime;
		myAudio.play();
	}

	function playAll()
		{ 
		myAudio.currentTime=0;
		myAudio.play();
		} 	
	
	function playStop()
		{ 
		myAudio.currentTime=0;
		myAudio.pause();
    } 
	function volUp()
   {
    myAudio.volume+=0.2;
   }
	function volDown()
   {
    myAudio.volume-=0.2;
   }