$(() => {
  //////////// Travel Images Carousel script /////////////////

  
  let currentCarouselImgIdx = 0;
  let numImages = $('.carousel-images').children().length - 1
  console.log(numImages)
  
  $('.next').on('click', () => {
    $('.carousel-images').children().eq(currentCarouselImgIdx).css('display', 'none')
    if (currentCarouselImgIdx < numImages) {
      currentCarouselImgIdx++
    } else {
      currentCarouselImgIdx = 0
    }
    $('.carousel-images').children().eq(currentCarouselImgIdx).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentCarouselImgIdx).css('display', 'none')
    if (currentCarouselImgIdx > 0) {
      currentCarouselImgIdx--
    } else {
      currentCarouselImgIdx = numImages - 1
    }
    $('.carousel-images').children().eq(currentCarouselImgIdx).css('display', 'block')
  })
  
  
  //have array of projects such that you can populate a new project-card for each project by simply adding the project details to the project array!
  
  const projects = [
    { 
      name: 'Blockbuster or Bust',
      type: 'HTML/CSS/JS/jQuery',
      liveLink: 'https://bones81.github.io/Blockbuster/',
      gitHubLink: 'https://github.com/Bones81/Blockbuster',
      picURL: 'img/Blockbuster_screenshot.png',
      blurb: `Designed and built with Reid Shipley, this game utilizes jQuery to simulate the career of an actor whose primary goal is to get cast in a Hollywood blockbuster.`
    },
    { 
      name: 'Actor Website',
      type: 'HTML/CSS',
      liveLink: 'https://bones81.github.io/template_actor_website/',
      gitHubLink: 'https://github.com/Bones81/template_actor_website',
      picURL: 'img/Actor_Website_screenshot.png',
      blurb: 'An actor website (incomplete), with photos, videos, email/comment form, and contact page.'
    },
    { 
      name: 'HKDL Caroler Info',
      type: 'HTML/CSS',
      liveLink: 'https://bones81.github.io/HKDLCarolerInfo/',
      gitHubLink: 'https://github.com/Bones81/HKDLCarolerInfo',
      picURL: 'img/Caroler_Info_screenshot.png',
      blurb: `Built in 2020 to prepare new and returning performers for the life-changing experience of working for Hong Kong Disneyland as a Christmas season vocalist.`
    },
    { 
      name: 'Developer Blog',
      type: 'HTML/CSS',
      liveLink: 'https://bones81.github.io/Developer-Blog/',
      gitHubLink: 'https://github.com/Bones81/Developer-Blog',
      picURL: 'img/Dev_Blog_screenshot.png',
      blurb: `A personal blog journaling the early days teaching myself code.`
    },
    { 
      name: 'Frogger',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Frogger/',
      gitHubLink: 'https://github.com/Bones81/Frogger',
      picURL: 'img/Frogger_screenshot.png',
      blurb: 'A crude vanilla JS remake of a single level of the arcade classic'
    },
    { 
      name: 'Snake Game',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Snake_Game/',
      gitHubLink: 'https://github.com/Bones81/Snake_Game',
      picURL: 'img/Snake_Game_screenshot.png',
      blurb: 'Vanilla JS build. A loving imitation of the NOKIA snake game. Each time your snake eats an apple, it grows longer and moves faster. Your goal is simply to grow the largest snake you can!'
    },
    { 
      name: 'Space Invaders',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/SpaceInvaders/',
      gitHubLink: 'https://github.com/Bones81/SpaceInvaders',
      picURL: 'img/Space_Invaders_screenshot.png',
      blurb: 'Vanilla JS grid-based game. Who knew colored circles could be so threatening? Fire with space bar. Move left or right with the left/right arrows on your keyboard.'
    },
    { 
      name: 'Connect 4',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Connect_4/',
      gitHubLink: 'https://github.com/Bones81/Connect_4',
      picURL: 'img/Connect_4_screenshot.png',
      blurb: `A simple browser-based version of the classic children's game Connect 4.`
    },
    { 
      name: 'Whack-A-Mole',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Whack-A-Mole/',
      gitHubLink: 'https://github.com/Bones81/Whack-A-Mole',
      picURL: 'img/Whack-a-Mole_screenshot.png',
      blurb: `A simple, vanilla JS version of the classic arcade and carnival classic that definitely doesn't encourage animal abuse.`
    },
    { 
      name: 'Etch-a-Sketch',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Etch-a-Sketch/',
      gitHubLink: 'https://github.com/Bones81/Etch-a-Sketch',
      picURL: 'img/Etch-A-Sketch_screenshot.png',
      blurb: `A sandbox-style, vanilla JS Etch-a-Sketch app that allows you to choose the "resolution" of your drawing canvas and switch between black, greyscale, and random color patterns.`
    },
    { 
      name: 'Memory Game',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/Memory_Game/',
      gitHubLink: 'https://github.com/Bones81/Memory_Game',
      picURL: 'img/Memory_Game_screenshot.png',
      blurb: 'The classic Memory card game, in vanilla JS. Turn over two cards. If they are the same, you get points. If they are not, you turn them over and try again. Try to uncover all the matching pairs as fast as possible.'
    },
    { 
      name: 'Mastermind',
      type: 'Ruby',
      liveLink: null,
      gitHubLink: 'https://github.com/Bones81/Mastermind',
      picURL: 'img/Mastermind_screenshot.png',
      blurb: 'This project was coded in Ruby. Before wordle, there was Mastermind, the game of coded colored pegs. Your goal is to figure out the secret code of colors in the correct order before you run out of opportunities.'
    },
    { 
      name: 'Calculator',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/calculator/',
      gitHubLink: 'https://github.com/Bones81/calculator',
      picURL: 'img/Calculator_screenshot.png',
      blurb: `A JavaScript app that performs basic calculator functions.`
    },
    { 
      name: 'Rock, Paper, Scissors',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: 'https://bones81.github.io/RockPaperScissors/',
      gitHubLink: 'https://github.com/Bones81/RockPaperScissors',
      picURL: 'img/RPS_screenshot.png',
      blurb: `The classic early student developer project, in living color!`
    },
  ]
  
  const $projects = $('#projects-main')
  for (const proj of projects) {
    const $card = $('<div>').addClass('card') //create a card div to house the project info, start with class card
    // const $bigCard = $('<div>').addClass('big-card') //create card to house the expanded version of the project
    const $subDiv1 = $('<div>').addClass('project-sub-div-1')
    const $subDiv2 = $('<div>').addClass('project-sub-div-2')
    const $h3 = $('<h3>').addClass('project-title').text(`${proj.name}`) // build the card heading 
    const $h5 = $('<h5>').addClass('project-type').text(proj.type) // build the text that notes app type
    const $img = $('<img>').addClass('project-img').attr('src',`${proj.picURL}`) // build the img for the project card
    const $p = $('<p>').addClass('project-description').text(`${proj.blurb}`) // build the text blurb
    const $btn1 = $('<button>').addClass('live-link') // build the buttons
    const $btn2 = $('<button>').addClass('github-link')
    const $exitBtn = $('<button>').addClass('exit-btn').text('Back to Projects')
    const $a1 = $('<a>').attr('href',`${proj.liveLink}`).attr('target','_blank').text(`Live Link`) // build the links that go in the buttons
    const $a2 = $('<a>').attr('href',`${proj.gitHubLink}`).attr('target','_blank').text(`Github Link`)

    $btn1.append($a1) // put anchor links inside buttons
    $btn2.append($a2) // but this doesn't make the entire button activate the link, only the <a> tag text, so...
    $btn1.on('click', () => {
      window.open(proj.liveLink, '_blank') // see #submit-btn logic below for source on this syntax
    })
    $btn2.on('click', () => {
      window.open(proj.gitHubLink, '_blank')
    })
    
    if (proj.type === 'Ruby') { // I put this here because I don't know how to make a live running Ruby program accessible via link
      $btn1.hide()
    }

    $subDiv1.append($h3, $h5, $img) 
    $subDiv2.append($p, $btn1, $btn2) 
    $card.append($subDiv1, $subDiv2, $exitBtn) // append all components to the card
    $('#projects-main').append($card)
    $card.on('click', () => {
      $card.toggleClass('open-card') // when clicking card in list of projects, activate the open-card version 
    })

  }

  // Used the following search result to help code the basic email comment form:
  // https://www.codegrepper.com/code-examples/javascript/javascript+to+send+email+on+button+click

  $('#submit-btn').on('click', () => {
    const $name = $('#name-input')
    const $email = $('#email-input')
    const $message = $('#comment-box')

    const link = "mailto:nathanlfreeman@gmail.com"
              //  + `?cc=${$email}` // this line only adds the user's own email to the cc field. 
               + "?subject=" + encodeURIComponent("Comment from " + $name.val())
               + "&body=" + encodeURIComponent($message.val());

    $name.val('')
    $email.val('')
    $message.val('')
    // window.location.href = link // this reopens the current window to the mailto url that was just built by the function. Instead we want it to open in a new tab with the following line:
    window.open(link, '_blank')
  })

})