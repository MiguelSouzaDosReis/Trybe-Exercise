let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index ++) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function createHolidayButton() {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
  
    newButton.innerHTML = 'Feriados';
    newButton.id = 'btn-holiday';
    buttonContainer.appendChild(newButton);
    newButton.className = 'botão-de-feriados'
  };
  
  createHolidayButton();

  function displayHolidays() {
    let getHolidayButton = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'pink';
  
    getHolidayButton.addEventListener('click',() => {
      for (let index = 0; index < getHolidays.length; index ++) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

  function createFridayButton() {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
  
    newButton.innerHTML = 'Sexta-feira' ;
    newButton.id = 'btn-friday';
    buttonContainer.appendChild(newButton);
    newButton.className = 'botão-de-feriados'
  };
  
  createFridayButton();

  function displayFridays(fridaysArray) {
    let getFridayButton = document.getElementById('btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let newFridayText = 'SEXTOU ᕙ(`▿´)ᕗ';
  
    getFridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index ++) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);

  function dayMouseOver() {
    let days = document.getElementById('days');
  
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.getElementById('days');
  
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();
