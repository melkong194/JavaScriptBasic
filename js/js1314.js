var button = document.querySelector("button");
var elem = document.getElementById("animate");
var duration = 3000;
var posEnd = 350;
var oldId = null;//for remove 2 setInterval

button.addEventListener('click', function (e) {
  var id = setInterval(frame, 5);
  if (oldId && oldId != id) {
    clearInterval(oldId);
  }

  var pos = 0;
  elem.style.top = pos + "px";
  elem.style.left = pos + "px";
  var start = new Date().getTime();
  function frame() {
    var end = new Date().getTime();
    if (end - start >= duration) {
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
      clearInterval(id);
    } else {
      var time = end - start;
      var percent = time / duration;
      pos = posEnd * percent;
      console.log("time:", time, "-percent:", percent, "%-pos:", pos);
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
  oldId = id;

})

setTimeout(() => {
  var end = new Date().getTime();
}, 3000);

// --- JS SCROLL --------------------
//window.scrollY is hidden height.
//box.clientHeight chi tinh content, box.offsetHeight tinh border
//box.offsetTop return the heigh the closest box
var box = document.querySelector('.box');
window.addEventListener('scroll', function (e) {
  if (window.scrollY + window.innerHeight >= box.offsetTop) {
    if (window.scrollY <= box.offsetHeight + box.offsetTop) {
      console.log("See a box");
    }
  }
})

// --- JS SCROLL PART 2 --------------------
var list_counter = Array.from(document.querySelectorAll('.counter'));
list_counter = list_counter.map(function(counter){
  return {
    el: counter, 
    isRun: false
  };
})

function getOffset(elem) {
  if (!elem) return; //ko ton tai return

  if (!elem.getClientRects().length) {// if not return
    return { top: 0, left: 0 };
  }

  var rect = elem.getBoundingClientRect();
  var win = elem.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}

window.addEventListener('scroll', function (e) {
  list_counter.forEach(function (obj, idx) {
  
    if(!obj.isRun){
      var duration = Number(obj.el.getAttribute('duration')) || 2000;
      var data_number = Number(obj.el.getAttribute('data-number')) || 0;
      // console.log(duration,'-', data_number);
  
      if (window.scrollY + window.innerHeight >= getOffset(obj.el).top) {
        if (window.scrollY <= obj.el.offsetHeight + getOffset(obj.el).top) {
          runEffectCounter(obj.el, duration, data_number);
          list_counter[idx].isRun = true;
        }
      }
    }

  })
})

function runEffectCounter(counter, duration, number){
  var id = setInterval(frame, 5);
  var numberEl= counter.querySelector('.number');
  var number_temp = 0;
  numberEl.innerText = number_temp;

  var start = new Date().getTime();
  function frame() {
    var end = new Date().getTime();
    if (end - start >= duration) {
      numberEl.innerText = number;
      clearInterval(id);
    } else {
      var time = end - start;
      var percent = time / duration;
      number_temp = parseInt(number * percent);
      numberEl.innerText = number_temp;
      // console.log("time:", time, "-percent:", percent, "%-pos:", pos);
    }
  }
  
}
// SLIDER ============================
$('.slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2, 
  prevArrow: '<button type="button" class="mn-slick-pre">Previous</button>',
  nextArrow: '<button type="button" class="mn-slick-next">Next</button>', 
  customPaging: function(slick, index){
    return '<span class="mn-dots"></span>';
  }
});

// MOUSE BOX ============================

var mbox = document.querySelector('.mouse-box');
mbox.addEventListener("mouseover", function(e){
  console.log("mouseover, e");
});
mbox.addEventListener("mouseout", function(e){
  console.log("mouseout, e");
});
mbox.addEventListener("mousemove", function(e){
  console.log("mousemove, e");
  document.querySelector('#screen').innerHTML = `ScreenX: ${e.screenX}px - ScreenY: ${e.screenY}px`;
  document.querySelector('#page').innerHTML = `PageX: ${e.pageX}px - PageY: ${e.pageY}px`;
  document.querySelector('#client').innerHTML = `ClientX: ${e.clientX}px - ClientY: ${e.clientY}px`;
  document.querySelector('#offset').innerHTML = `OffsetX: ${e.offsetX}px - OffsetY: ${e.offsetY}px`;
  document.querySelector('#layer').innerHTML = `LayerX: ${e.layerX}px - LayerY: ${e.layerY}px`;
  document.querySelector('#xy').innerHTML = `X: ${e.x}px - Y: ${e.x}px`;
  /*
  screen: man hinh
  page: toi' trang web
  layer: same with page, when in absolute, different layer => different
  offset: 
  */
});
mbox.addEventListener("mouseleave", function(e){
  console.log("mouseleave, e");
});
