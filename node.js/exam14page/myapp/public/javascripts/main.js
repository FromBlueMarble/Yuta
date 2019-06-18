document.addEventListener('DOMContentLoaded', () => {
    'use strict'
  
    const btn = document.querySelector('#btn')
  
    btn.addEventListener('click', () => { 
      const items = [ 'great blessing', 'middle blessing', 'Uncertain luck', 'misfortune']  
      const random = Math.floor(Math.random()*items.length)  
      btn.textContent = items[random]  
  
      const url = 'http:/random/localhost:3000/api/'
      fetch(url)
        .then(res => {
          return res.json()
        })
        .then(result => {
          btn.textContent = result.item
          console.log(result.item)
        })
        .catch(err => {
          console.error(err)
        })
    })
  })