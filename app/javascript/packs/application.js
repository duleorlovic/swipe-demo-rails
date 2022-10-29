// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import Swipe from 'swipejs'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.addEventListener('load', (event) => {

  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: 400,
    // auto: 3000,
    draggable: true,
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function (index, elem, dir) {
      console.log(`callback index=${index} elem=${elem} dir=${dir}`)
      // load next K pages
    },
    transitionEnd: function (index, elem) {
      console.log(`transitionEnd index=${index} elem=${elem}`)
    }
  });

  const nextDiv = document.getElementById('next')
  const prevDiv = document.getElementById('prev')

  nextDiv.addEventListener('click', function (e) {
    console.log('next click')
    window.mySwipe.next()
  })

  prevDiv.addEventListener('click', function (e) {
    console.log('prev click')
    window.mySwipe.prev()
  })
});
