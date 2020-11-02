function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

window.addEventListener('scroll', function(event) {
  var ima1 = document.getElementById('imgMotion1'),
      offset = ima1.getBoundingClientRect().top - windowHeight;
      
      if (offset > 0) {
      	ima1.classList.remove('Movement');
      	return;
      }
      
      if (ima1.className.indexOf('Movement') === -1) {
      	ima1.classList.add('Movement');
      }
});
   
window.addEventListener('scroll', function(event) {
  var ima2 = document.getElementById('imgMotion2'),
      offset = ima2.getBoundingClientRect().top - windowHeight;
      
      if (offset > 0) {
      	ima2.classList.remove('Movement');
      	return;
      }
      
      if (ima2.className.indexOf('Movement') === -1) {
      	ima2.classList.add('Movement');
      }
});

window.onscroll = function() {collapse()};

function collapse() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").className = "nav collapsed";
  } else {
    document.getElementById("nav").className = "nav";
  }
}






