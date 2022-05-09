import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const DELAY = 2000;

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitForm)


function onSubmitForm(e) {
  e.preventDefault();
  const formData = {
    delay: formEl.elements.delay.value,
    step: formEl.elements.step.value,
    amount: formEl.elements.amount.value,
  };

promiseGetValue(formData);
}

const promiseGetValue = ({ delay, step, amount }) => {
  let totalDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, totalDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    totalDelay += step;
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}









// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(()=>{
//     if(canFulfill){
//       resolve('good')
//     }
//     reject('no')
//   }, 2000);

// });

// promise
// .then( result => {

// console.log(result);
// return 5;

// })
// .then(y => {
//   console.log(y);
//   return 10;
// }).catch(error => {
//   console.log(error);
// })
