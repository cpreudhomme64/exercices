
  var heure = new Date();

  document.getElementById('trotteuse').style.animationDelay = -(heure.getSeconds()) + 's';
  document.getElementById('minute').style.animationDelay = -(heure.getMinutes()*60 + heure.getSeconds()) + 's';
  document.getElementById('heure').style.animationDelay = -((heure.getHours()%12)*3600 + heure.getMinutes()*60 + heure.getSeconds()) + 's';



