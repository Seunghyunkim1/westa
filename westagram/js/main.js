



// var mango = document.createElement("li");
// var mangoText = document.createTextNode("망고");
// mango.appendChild(mangoText); 

// var parent = document.querySelector("ul");

// parent.appendChild(mango);

// const thisIsPw = document.getElementById('password');
// const thisIsCode = document.getElementById('code');

// thisIsPw.addEventListener('keydown', function(e) {
//   thisIsCode.innerHTML = e.keyCode;
// });



// const cmt = document.getElementById('comment-detail');
// const x = document.getElementById("댓글창");






// let text = document.createTextNode("오늘역시빡세다");
// let span = document.createElement("span");

// let div1 = document.createElement("div");

// let space = document.getElementsByClassName("article-blow-top");

// space.appendChild(div1);



// const space = document.getElementById("show-comment-space");
// //show-comment-part 는 댓글이 들어갈 div

// space.appendChild(comment);



let comment = document.getElementById("comment-detail");
let bbb = document.getElementById("postbutton");
let aaa = document.getElementsByClassName("article-below-top")[0];



function asdf () {
       

    let div1 = document.createElement("div");
    div1.className = 'div1class';

    let a = document.createElement("a");
    a.className = 'a1class';
    a.innerText = 'wecode';

    let span = document.createElement("span");
    span.className = 'span1class';

    span.innerHTML = comment.value;


    div1.appendChild(a);
    div1.appendChild(span);
    aaa.appendChild(div1);

    comment.value = "";

}

// .addEventListener('', function(){
//     asdf();
//     bbb.className ="bbbclass";
// });


comment.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        
        asdf();
        

    }
    
    if (comment.value !== "0");
    
    bbb.className ="bbbclass";


  });