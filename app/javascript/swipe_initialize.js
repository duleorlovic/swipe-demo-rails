import Swipe from 'swipejs'

window.addEventListener('turbo:load', (event) => {
  console.log("turbo:load")

  initializeSwipe(1)
})

function initializeSwipe(index) {
  console.log(`initializeSwipe${index}`)
  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: index,
    speed: 400,
    // auto: 3000,
    draggable: true,
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function (index, elem, dir) {
      console.log(`callback index=${index} elem=${elem} dir=${dir}`)
    },
    transitionEnd: function (index, elem) {
      console.log(`transitionEnd index=${index} elem=${elem}`)
      elem.querySelector("form").requestSubmit()
      mySwipe.kill()
      setTimeout(() => {
      initializeSwipe(index)
      }, 100)
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
}
