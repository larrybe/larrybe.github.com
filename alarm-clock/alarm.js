function run() {
	document.querySelector('h1').style.display = 'none';
	var curr_hr = document.querySelector('#current-hr');
	var curr_min = document.querySelector('#current-min');
	var currAMPM = document.querySelector('#current-am-pm');
	var alarmAMPM = document.querySelector('#alarm-am-pm');
	var set = document.querySelector('.set');
	var offbtn = document.querySelector('.off');
	offbtn.style.display = 'none';
	var buzzer = document.querySelector('audio');
	var alarmTime;

	function currentTime() { //get the current time. Runs every 1000ms
		var t = new Date(); //date constructor
		hourNow = t.getHours(); //get current hour in 24hr format
		minsNow = t.getMinutes(); //get current minutes
		if (hourNow >= 12) { //if hour is greater than or equal to 12
			currAMPM.value = 'PM'; //change value to PM
			if (hourNow > 12) { //if hour is greater than 12
				hourNow = hourNow - 12; //subtract 12 to get 12 hour format
			}

		} else { //else
			currAMPM.value = 'AM'; //change value to AM
		}

		if (minsNow < 10) { //If current minutes is less than 10
			minsNow = "0" + minsNow; //add a "0" to the front of it. FAILS IN FIREFOX
		}

		curr_hr.value = hourNow; //store current hour in var hour now
		curr_min.value = minsNow; //store current minutes in var minsNow

		currentTime = t.getTime(); //store current time in milliseconds in var currentTime
		currentTime = Math.floor(currentTime / 1000) * 1000; //round down time to nearest 1000.

		function getAlarm() { //This function runs when the "SET" button is clicked.
			var alarm_hr = document.querySelector('#alarm-hr');
			var alarm_min = document.querySelector('#alarm-min');

			var alarmHour = parseInt(alarm_hr.value, 10); //parse hour entered into an integer.
			var alarmMin = parseInt(alarm_min.value, 10); //parse minutes entered into an integer.

			if (alarmAMPM.value == 'PM') { //If AM-PM selector is set to "PM"
				if (alarmHour < 12) { //and alarm hour is less than 12
					alarmHour += 12; //add 12 to alarm hour
				}
		}else{ //else
				if (alarmHour = 12){ //if alarm hour is 12			
					alarmHour -= 12; //subtract 12 from alarm hour
				}
			}

			var a = new Date(); //create new date object with name "a"
			a.setHours(alarmHour, alarmMin, 00, 00); //set the time [hour, min, sec, ms]

			alarmTime = a.getTime(); //get the time we set in milliseconds and assign to "alarmTime"
			
			if (alarmTime < currentTime){ //if alarm time set is less than current time
				alarmTime += 86400000;	//Foward time we just set by 24 hours
			}

			//console.log(a.getHours()); //DEBUG PURPOSES
			
			//console.log(a.toDateString()); //DEBUG PURPOSES
			
			//console.log(t.toDateString()); //DEBUG PURPOSES

			off();
		}
		
		function off(){
			buzzer.pause();
			offbtn.style.display = 'none';
		}


		set.addEventListener('click', getAlarm, false); //add event to button
		
		offbtn.addEventListener('click', off, false); //add event to button

		if (currentTime == alarmTime) { //when time is up
			buzzer.play(); //play sound
			offbtn.style.display = 'block';
		}

		console.log(currentTime);
		console.log(alarmTime);
	}

	setInterval(currentTime, 1000); //run the function "currentTime" every 1000ms or 1second

}

window.addEventListener('load', run, false); //when everything in HTML is done loading, run this script.
