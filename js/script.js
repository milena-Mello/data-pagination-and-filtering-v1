//Total number of students per page:
const itemsPerPage = 9;

//This function will create and insert/append the elements needed to display a "page" of nine students:
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const ulStudentList = document.querySelector(".student-list");
   ulStudentList.innerHTML = '';

   for (i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         const newItem =
            `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3 class='title'>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>`

         ulStudentList.insertAdjacentHTML('beforeend', newItem);
      }
   }
}


//This function will create and insert/append the elements needed for the pagination buttons:
function addPagination(list) {
   const numberOfPages = Math.ceil(list.length / itemsPerPage);
   const ulLinkList = document.querySelector('.link-list');
   ulLinkList.innerHTML = '';

   for (i = 1; i <= numberOfPages; i += 1) {
      let newButtom;
      if (i === 1) {
         newButtom =
            `<li>
         <button type="button" class="active">${i}</button>
      </li>`
         ulLinkList.insertAdjacentHTML('beforeend', newButtom);
      } else {
         newButtom =
            `<li>
         <button type="button">${i}</button>
      </li>`
         ulLinkList.insertAdjacentHTML('beforeend', newButtom);
      }

      ulLinkList.addEventListener('click', (event) => {
         if (event.target.tagName === 'BUTTON') {
            let element = document.querySelector('.active');
            element.className = '';
            event.target.className = 'active';
            showPage(list,element.textContent)
         }
      })

}} 


// Call functions:
showPage(data, 1);
addPagination(data);