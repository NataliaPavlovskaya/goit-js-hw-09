import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitForm)
function onSubmitForm(e) {
  e.preventDefault();
  const formData = {
    delay: Number(formEl.elements.delay.value),
    step: Number(formEl.elements.step.value),
    amount: Number(formEl.elements.amount.value),
  };
promiseGetValue(formData);
}
const promiseGetValue = ({ delay, step, amount }) => {
  let totalDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, totalDelay)
      .then(({ position, delay }) => {
        Notify.success(`:белая_галочка: Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`:х: Rejected promise ${position} in ${delay}ms`);
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




// const DELAY = 2000;
// let formData = {};
// const formEl = document.querySelector('.form');

// formEl.addEventListener('submit', onSubmitForm);
// formEl.addEventListener('input', onFormInput)


// function onSubmitForm(e) {
//   e.preventDefault();
//   createPromise(formData.step,formData.delay );

// };

// function onFormInput(event) {
//   formData[event.target.name] = event.target.value;
// };

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//   });
// }

// const promiseGetValue = ( delay, step, amount }) => {
//   let totalDelay = delay;
//   for (let i = 1; i <= amount; i++) {
//     totalDelay += step;
//   }
// };












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
