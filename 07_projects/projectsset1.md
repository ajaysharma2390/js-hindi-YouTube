# Projects related to DOM

## project practice link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1 solution code link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-9hfvnbyx?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript
console.log("ajay")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    // if(e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id // =>grey
    // }
    // if(e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id // =>white
    // }
    // if(e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id // =>blue
    // }
    // if(e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id // =>yellow
    // }
    // if(e.target.id === 'purple') {
    //   body.style.backgroundColor = "purple" // =>purple
    // }

    //+++++++ using switch ++++++++
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('Invalid color');
    }
  });
});

```