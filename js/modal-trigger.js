class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector)
    this.close_data()
  }
  
  show() {
    this.elem.classList.toggle('is-active')
  }
  
  close() {
    this.elem.classList.toggle('is-active')
  }
  
  close_data() {
    var modalClose = this.elem.querySelectorAll(".delete, .modal-background")
    var that = this
    modalClose.forEach(function(e) {
      e.addEventListener("click", function() {
        
        that.elem.classList.toggle('is-active')

        var event = new Event('modal:close')

        that.elem.dispatchEvent(event);
      })
    })
  }
  
  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback)
  }
}

document.addEventListener('DOMContentLoaded', () => {

  var trg1 = document.querySelector(".modal-trigger1")
  var trg2 = document.querySelector(".modal-trigger2")
  var trg3 = document.querySelector(".modal-trigger3")
  var mdl1 = new BulmaModal(".modal1")
  var mdl2 = new BulmaModal(".modal2")
  var mdl3 = new BulmaModal(".modal3")

  trg1.addEventListener("click", function () {
    mdl1.show()
  })

  trg2.addEventListener("click", function () {
    mdl2.show()
  })

  trg3.addEventListener("click", function () {
    mdl3.show()
  })

});