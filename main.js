const t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
  });
  
  t1
  .add({
    targets: '.char1__body',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function(el, i) { return i * 250},
    direction: 'normal'
  })
  .add({
    targets: '.char1__body',
    fill: '#333',
    duration: 1500
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner' ],
    opacity: [0,1],
    duration: 500
  })
  .add({
    targets: '.char1__mouth',
    opacity: [0,1],
    duration: 500
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 200
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 200
  })
  .add({
    targets: '#char1',
    translateX: 400,
    duration: 2000,
    delay: 1000
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 200
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 200
  })
  .add({
    targets: '.char2__body',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function(el, i) { return i * 250},
    direction: 'normal'
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 100
  })
  .add({
    targets: '#char1',
    translateX: -300,
    duration: 1000,
  })
  .add({
    targets: '.char2__body',
    fill: '#333',
    duration: 1500
  })
  .add({
    targets: ['.char2__left-eye--inner' ,'.char2__right-eye--inner' ],
    opacity: [0,1],
    duration: 500
  })
  .add({
    targets: '.char2__mouth',
    opacity: [0,1],
    duration: 500
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 100
  })
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [1,0],
    duration: 100
  },'+1000')
  .add({
    targets: ['.char1__left-eye--inner' ,'.char1__right-eye--inner','.char1__left-eye' ,'.char1__right-eye' ],
    opacity: [0,1],
    duration: 100
  },'+500')
  .add({
    targets: ['.char1__left-eye--open', '.char1__right-eye--open' ],
    opacity: [0,1],
    duration: 300
  }, '+3000')
  .add({
      targets: ['.char1__mouth'],
      opacity: [1,0],
      duration: 100
  })
  .add({
      targets: '.char1__mouth--happy',
      opacity: [0,1],
      duration: 1000
  })
  .add({
    targets: '#char2',
    translateX: -350,
    duration: 1000
  })
  .add({
    targets: '#char1',
    translateX: 300,
    duration: 1000
})
.add({
    targets: ['.char2__left-eye--inner' ,'.char2__right-eye--inner','.char2__left-eye' ,'.char2__right-eye' ],
    opacity: [1,0],
    duration: 100
  },'+1000')
  .add({
    targets: ['.char2__left-eye--inner' ,'.char2__right-eye--inner','.char2__left-eye' ,'.char2__right-eye' ],
    opacity: [0,1],
    duration: 100
  },'+500')
  .add({
    targets: '.char1__harm',
    opacity: [0,1],
    fill: '#333',
    duration: 20
})
.add({
    targets: '.flower__line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function(el, i) { return i * 250},
    direction: 'normal'
})
.add({
    targets: '.flower',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    delay: function(el, i) { return i * 250},
    direction: 'normal'
})
.add({
    targets: '.flower',
    fill: '#ffb3e9',
})
  .add({
    targets: ['.char2__left-eye--open', '.char2__right-eye--open' ],
    opacity: [0,1],
    duration: 300
  }, '+3000')
  .add({
      targets: ['.char2__mouth'],
      opacity: [1,0],
      duration: 100
  })
  .add({
      targets: '.char2__mouth--happy',
      opacity: [0,1],
      duration: 1000
  })
  .add({
    targets: '.char2__body',
    fill: '#333',
    duration: 100,
  })
  .add({
    targets: '#char2',
    translateX: -390,
    duration: 1000
  })
  .add({
    targets: '#char1',
    translateX: 380,
    duration: 1000
  })
  .add({
      targets: ['.char1__harm', '.flower__line', '.flower'],
      opacity: [1,0],
      duration: 100
  })
  .add({
    targets: '#char1',
    translateX: 380,
    rotate: [0, -45],
    duration: 1000
  })
  .add({
    targets: '#char2',
    translateX: -390,
    rotate:[0, 45],
    duration: 1000
  })
  .add({
    targets: ['.char1__left-eye--open', 
    '.char1__right-eye--open',
    '.char2__left-eye--open', 
    '.char2__right-eye--open', 
    '.char2__left-eye--inner' ,
    '.char2__right-eye--inner',
    '.char2__left-eye' ,
    '.char2__right-eye',
    '.char1__left-eye--inner' ,
    '.char1__right-eye--inner',
    '.char1__left-eye' ,
    '.char1__right-eye',
    '.char2__mouth--happy',
    '.char1__mouth--happy'
     ],
    opacity: [1,0],
    duration: 2000
  })
  .add({
      targets: ['.char1__body', '.char2__body'],
      fill: '#333',
      duration: 1000
  })

  
 


  
  
  
  

 
  
  
  