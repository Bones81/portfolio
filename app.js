$(() => {
  
  //have array of projects such that you can populate a new project-card for each project by simply adding the project details to the project array!

  const projects = [
    { 
      name: 'Blockbuster or Bust',
      type: 'HTML/CSS/JS/jQuery',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: `Designed and built with Reid Shipley, this game utilizes jQuery to simulate the career of an actor whose primary goal is to get cast in a Hollywood blockbuster.`
    },
    { 
      name: 'Actor Website',
      type: 'HTML/CSS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'A sample website for an actor, with photos, videos, email/comment form, and contact page'
    },
    { 
      name: 'Frogger',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'A crude vanilla JS remake of a single level of the arcade classic'
    },
    { 
      name: 'Snake Game',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'Vanilla JS build. A loving imitation of the NOKIA snake game. Each time your snake eats an apple, it grows longer and moves faster. Your goal is simply to grow the largest snake you can!'
    },
    { 
      name: 'Crude Space Invaders',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'Vanilla JS grid-based game. Who knew colored squares could be so threatening? Fire with space bar. Move left or right with the left/right arrows on your keyboard.'
    },
    { 
      name: 'Crude Connect 4',
      type: 'HTML/CSS/JS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: `A simple browser-based version of the classic children's game Connect 4.`
    },
    { 
      name: 'Memory Game',
      type: 'HTML/CSS/Vanilla JS',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'The classic Memory card game, in vanilla JS. Turn over two cards. If they are the same, you get points. If they are not, you turn them over and try again. Try to uncover all the matching pairs as fast as possible.'
    },
    { 
      name: 'Mastermind',
      type: 'Ruby',
      liveLink: null,
      gitHubLink: null,
      picURL: null,
      blurb: 'This project was coded in Ruby. Before wordle, there was Mastermind, the game of coded colored pegs. Your goal is to figure out the secret code of colors in the correct order before you run out of opportunities.'
    },
  ]

  const $projects = $('#projects-main')
  for (const proj of projects) {
    const $card = $('<div>').addClass('card') //create a card div to house the project info, start with class card
    const $h3 = $('<h3>').addClass('project-title').text(`${proj.name}`) // build the card heading 
    const $img = $('<img>').addClass('project-img').attr('src',`${proj.picURL}`) // build the img for the project card
    const $p = $('<p>').addClass('project-description').text(`${proj.blurb}`) // build the text blurb
    const $btn1 = $('<button>').addClass('live-link') // build the buttons
    const $btn2 = $('<button>').addClass('github-link')
    const $a1 = $('<a>').attr('href',`${proj.liveLink}`).text(`Live Link`) // build the links that go in the buttons
    const $a2 = $('<a>').attr('href',`${proj.gitHubLink}`).text(`Github Link`)

    $btn1.append($a1) // put anchor links inside buttons
    $btn2.append($a2)
    $card.append($h3, $img, $p, $btn1, $btn2) // append all components to the card

    $('#projects-main').append($card)
    $card.on('click', () => {
      $card.toggleClass('open-card')
    })

  }

})