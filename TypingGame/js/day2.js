console.log("Day 2 Practice for Touch Typing by Vedansh Tech Tutorials");
var testbox = document.querySelector(".words");
var testcharactersstring = "fg jh fg jh ghgh jhjh fgfg gfgf hjhj hghg ';'; asdf jkl; fgjh ghfj jg hf fh gj g'h l' lh dg ah lg agkh ;k 'k ;' a' f' gh' ;lj kg 'hg ag fj' adg jd asdfghjkl;' asdfghjkl;' ';lkjhgfdsa ';lkjhgfdsa fghj sg kh jkl fk jd";
var testcharactersarray = testcharactersstring.split("");
testcharactersarray.forEach((e)=>{
    testbox.innerHTML += `<span class="key">${e}</span>`;
})