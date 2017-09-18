

function triggerAlarm() {
  var alarmHour;
  var alarmMinute;
  function currentTime() {
    var d = new Date();
    var hours   = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById('hours-line').style['transform'] =   'rotate('+ ((hours*15) - 180)  +'deg)';
    document.getElementById('minutes-line').style['transform'] = 'rotate('+ ((minutes*6) - 180) +'deg)';
    document.getElementById('seconds-line').style['transform'] = 'rotate('+ ((seconds*6) - 180)  +'deg)';
    if ( (hours == alarmHour) && (minutes == alarmMinute)) {
      // alert('WAKE THE FUCK UP');
      window.open('https://www.youtube.com/watch?v=lTs6a0ORdQU');
      alarmHour = alarmMinute = 0;
    }
  }
  var timeUpdater = setInterval(currentTime, 1000);


  $('#submit-button').click(function() {
      $('#alarm-set').empty();
      alarmHour   = $('#h-input').val();
      alarmMinute = $('#m-input').val();
      $('#alarm-set').append(alarmHour + ':' + alarmMinute);
  });
}
triggerAlarm();
