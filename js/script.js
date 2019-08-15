const changeContent = (params) => {
  document.getElementById("title").innerHTML= params.title;
  document.getElementById("content").innerHTML= params.content;
}

const content = 
"<li>"+"Hobby:"+ "<b>"+"Game, Read, Watching Movies"+"</b>"+"</li>"+
"<li>"+"Phone:"+ "<b>"+"+62-81-5661-5006"+"</b>"+"</li>"+
"<li>"+"Email:"+ "<b>"+"antonpw2019@gmail.com"+"</b>"+"</li>"

const myProfile = {
  title: 'My Profile',
  content,
}

const contact = {
  title: 'Contact',
  content: 
  "<li>"+"Find me at "+"<a href='https://github.com/shadowM8'>"+"github"+"</a>"+"</li>"
}

const about = {
  title: 'About',
  content:
  "<li>"+"This website is created for submission task from Dicoding \"Belajar Dasar Pemrograman Web\" "+"</li>"
}