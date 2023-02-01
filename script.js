function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

function navanimation(){

  var hover = document.querySelector(".hover")
  
  var a1 = document.querySelector("#a1")
  
    a1.addEventListener("mouseenter",function(dets){
      // console.log(dets)
      hover.style.opacity = 1
      hover.style.left = `${dets.x = 0}%`
      })
  
  var a3 = document.querySelector("#a2")
  
    a3.addEventListener("mouseenter",function(dets){
      hover.style.left = `${dets.x = 36}%`
      hover.style.opacity = 1
      })
  
  var a3 = document.querySelector("#a3")
  
    a3.addEventListener("mouseenter",function(dets){
      hover.style.opacity = 1
      hover.style.left = `${dets.x = 76}%`
      })
  
      var atag = document.querySelector("#atag")
      atag.addEventListener("mouseleave",function(dets){
      hover.style.opacity = 0
      // hover.style.left = `${dets.x = 76}%`
      })
  
  
      document.querySelector("#atag")
      .addEventListener("mouseenter",function(){
        gsap.to("#gif",{
          y:-50,
          duration:1,
          opacity:1
        })
        
      })
      document.querySelector("#atag")
      .addEventListener("mouseleave",function(){
        gsap.to("#gif",{
          y: 0,
          opacity:0
        })
        
      })
  
}

function circleanimation(){

  gsap.to(".boubles",{
    scrollTrigger:{
      scroller:"#main",
      trigger:".boubles",
      start:"top 40%",
      // markers:true,
      scrub:2
    },
    width:"30vw",
    height:"30vw",
    opacity: 1,
    // ease:"bounce.lnOut"
  })
  gsap.to("#bl1",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#bl1",
      start:"top 40%",
      // markers:true,
      scrub:1
    },
    left:"29%",
    top:75
    // ease:"elastic.lnOut"
  })
  
  gsap.to("#bl2",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#bl2",
      start:"top 40%",
      // markers:true,
      scrub:1
    },
    right:"29%",
    top:75,
    ease: Elastic
  })

  document.querySelector("#bl4")
.addEventListener("mouseenter",function(){
  gsap.to("#bl4",{
    scale:.5,
    duration:1,
    
  })
})

document.querySelector("#bl4")
.addEventListener("mouseleave",function(){
  gsap.to("#bl4",{
    scale:1,
    duration:1,

  })
})

document.querySelector("#bl3")
.addEventListener("mouseenter",function(elm){
  gsap.to("#bl3",{
    scale:.5,
    duration:1
    
  })
})

document.querySelector("#bl3")
.addEventListener("mouseleave",function(){
  gsap.to("#bl3",{
    scale:1,
    duration:1

  })
})

}

function clickfuntion(){
  var flag = 0;


document.querySelector("#button")
.addEventListener("click",function(){    
  if(flag === 0) {
    document.querySelector("#main").style.backgroundColor = "black"
  document.querySelector("#button").textContent = "Day"
  document.querySelector("#bl3 h1").style.color = "white"
  document.querySelector("#bl4 h1").style.color = "white"
  document.querySelector(".para1").style.color = "white"
  document.querySelector(".para2").style.color = "white"
  document.querySelector(".info").style.color = "white"
  document.querySelector(".info h1").style.color = "white"
  document.querySelector(".hover").style.backgroundColor = "white"
  document.querySelector("#atag").style.borderColor = "white"
  document.querySelector("#about p").style.color = "white"
  document.querySelector("#about").style.borderColor = "white"
  document.querySelector(".credit .color").style.color = "white"
  document.querySelector(".credit h4").style.color = "white"
  document.querySelector("#ayushcredit").style.color = "white"
  document.querySelector("#ayush").style.color = "white"
  document.querySelector("#ayushhelp").style.color = "white"
  document.querySelector("#eight span").style.backgroundColor = "white"
  document.querySelector("#eight h6").style.color = "white"
  flag = 1;
  }        
  else{
    document.querySelector("#main").style.backgroundColor = "white"
    document.querySelector("#button").textContent ="Night"
  document.querySelector("#bl3 h1").style.color = "black"
  document.querySelector("#bl4 h1").style.color = "black"
  document.querySelector(".para1").style.color = "black"
  document.querySelector(".para2").style.color = "black"
  document.querySelector(".info h1").style.color = "black"
  document.querySelector(".hover").style.backgroundColor = "black"
  document.querySelector("#atag").style.border = "black"
  document.querySelector("#about p").style.Color = "black"
  document.querySelector("#about").style.borderColor = "black"
  document.querySelector(".credit .color").style.color = "black"
  document.querySelector(".credit h4").style.color = "black"
  document.querySelector("#ayushcredit").style.color = "black"
  document.querySelector("#ayush").style.color = "black"
  document.querySelector("#ayushhelp").style.color = "black"
  document.querySelector("#eight span").style.backgroundColor = "black"
  document.querySelector("#eight h6").style.color = "black"
    flag = 0 
  }                                                                                                                                                    
})
}

function imaganimation(){

  gsap.to("#img",{
   scrollTrigger:{
     scroller: "#main",
     trigger: "#img",
     start: "top 30%",
     pin:true,
    //  markers: true,
     scrub:2,
   },
   width: "100%",
   height: "100%", 
  })
  
  gsap.to("#left",{
   scrollTrigger:{
     scroller: "#main",
     trigger: "#left",
     start: "top 10%",
     pin:true,
    //  markers: true,
     scrub:2,
   },
   x:"-100%",
   duration:2
  })
  
  gsap.to("#right",{
   scrollTrigger:{
     scroller: "#main",
     trigger: "#right",
     start: "top 10%",
     pin:true,
    //  markers: true,
     scrub:2,
   },
   x:" 110%",
   duration:2
  })                             

}

function popanimation(){
  let imgs =
  [
    [
        "https://tse3.mm.bing.net/th?id=OIP.Eq1lkef7mEHWl3cd1ximlQHaLH&pid=Api&P=0",
        "https://tse4.mm.bing.net/th?id=OIP.fM-b7m_jcZc3_XWYYJCfSwHaHa&pid=Api&P=0",
        "https://wallsdesk.com/wp-content/uploads/2017/05/13-Eerie-Pictures.jpg",
        "https://cdn.shopify.com/s/files/1/0267/0241/products/EerieEyes-7-Grid-Index-Image-600x600_large_1_grande.jpg?v=1546988923",
        "http://2.bp.blogspot.com/-fB-Apyju75E/U6XcqmfuXXI/AAAAAAAAbSQ/iCP8SrdilnU/s1600/Creepshow.jpg",
        "https://www.telegraph.co.uk/content/dam/news/2017/08/09/TELEMMGLPICT000136977946_trans_NvBQzQNjv4BqeqwG1mMdY8c_ukC_8VAhqrg1-UCrohYeNB8IHO6mMqc.jpeg?imwidth=1400",
        "https://www.rd.com/wp-content/uploads/2018/10/Creepy-clown.jpg",
      
      ],
      [
        "https://external-preview.redd.it/WQjEivgJyqCMxY2ixVeXYunYLLWOAs6R4G0foZZqSL8.jpg?auto=webp&s=3690b51e2564ad8024f269fc315eb8b845069c81",
        "https://lh3.googleusercontent.com/proxy/HTlxnVmzdWU7OBr9vdfN5Leo1EFkAoQfFSKCzWP7E6aCsfS8KGNy7Pyb_Ysysa1QxVourizffUvhz0lT3GWPiQQoPP7XyR0sf-SVpw0U07oecLFAIOE9_HScgdU6=w1200-h630-p-k-no-nu",
        "https://tse3.mm.bing.net/th?id=OIP.GrPovi543HF4JY-rqpjsYQHaJT&pid=Api&P=0",
        "https://lh5.googleusercontent.com/proxy/cb-crFjhIMUULPxyXqiLcgpVwk4XoLUCLh-bx-tokD16idtNW-7zu-KDUhcSAjsnGVO5Cg7PwjLXqYNIe5Y4iPIJZQOF4fPscLMbObdahcMUcw=s0-d",
        "https://tse2.mm.bing.net/th?id=OIP.V7cOLh4pT8cbjZPqbdvnvAHaKg&pid=Api&P=0",
        "https://art.ngfiles.com/images/46000/46399_giyganmage_a-ghostly-figure.png?f1253558652",
        "https://tse2.mm.bing.net/th?id=OIP.AxGUuE0tWosMCirO7Mh0_QHaLH&pid=Api&P=0",
      
      ],
      [
        "https://3.bp.blogspot.com/-23ZIndVTRbc/Tdppq247nwI/AAAAAAAAAi4/IVDDGJTQ8To/s1600/SCREAM-horror+images.jpg",
        "https://images.pexels.com/photos/1528375/pexels-photo-1528375.jpeg?cs=srgb&dl=anatomy-blur-bones-1528375.jpg&fm=jpg",
        "http://img.izismile.com/img/img10/20170816/640/horrifying_portraits_of_your_favourite_characters_640_01.jpg",
        "https://i.pinimg.com/originals/40/7c/6a/407c6a8f89788ca59527df4e1f6dbde3.jpg",
        "https://1.bp.blogspot.com/-hXo-ZZf4SKo/V_jxIdz9NpI/AAAAAAAAAdw/RGzu_7P2Ql08aRNNKRx0JkC-IU9g5CzKQCLcB/s1600/UncleGriz.jpg",
        "https://i.redd.it/kaw6javd1xm41.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.QZkWxkvW7Y_SgpROJN0ydAHaHa&pid=Api&P=0",
      
      ],
      [
        "https://i2.wp.com/www.tor.com/wp-content/uploads/2014/12/Mummy11.jpg?fit=800%2C%209999&crop=0%2C0%2C100%2C940px",
        "https://img00.deviantart.net/c6f4/i/2016/308/f/5/vampire_by_mac_tire-dan95y0.jpg",
        "https://tse3.mm.bing.net/th?id=OIP.JnD_ha63bSZSlUEHTnlnBAHaHa&pid=Api&P=00",
        "https://tse4.mm.bing.net/th?id=OIP.x-YNfxp9zIs1VhJgahPrGgHaHr&pid=Api&P=0",
        "https://tse4.mm.bing.net/th?id=OIP.VPUy9Lqk2W8D19yoG1nFvwHaIF&pid=Api&P=0",
        "https://i.pinimg.com/736x/95/f8/99/95f899f63ee9719e7620f6cc11d9a229--sexy-witch-wicked-witch.jpg",
      
      ],
      [
        "https://wallpaperaccess.com/full/1940408.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.zPFQvHfpj5SywO026kfBqwHaLW&pid=Api&P=0",
        "https://tse1.mm.bing.net/th?id=OIP.t8xb_w8ElbMJPtAAHsXzWQHaK-&pid=Api&P=0",
        "http://images6.fanpop.com/image/polls/1660000/1660338_1511667035734_full.jpg",
        "https://www.hdwallpaper.nu/wp-content/uploads/2015/06/scary-wallpapers-free-download-horror-hd-wallpapers-widescreen-1024x768.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.yVdFy7o6CHqFmiLGr-OQpAHaE8&pid=Api&P=0",
        "https://tse2.mm.bing.net/th?id=OIP.llPtf4cTM7R9fEU20f7uEgHaKA&pid=Api&P=0",
      
      ],

    ]

  function imgInsert(){
    let clutter1='';
    for(let i=0;i<5;i++){

      for(let j=0; j<7; j++){

        clutter1 +=`<img id="photo${i}${j}" class="photos" src="${imgs[i][j]}" alt="">`
    }}

    document.querySelector("#imgsF").innerHTML=clutter1;
  }

  imgInsert();

  function insertBox(){
    let clutter2='';
    for(let i=0;i<5;i++){


      clutter2 +=`<div class="row">`

      for(let j=0; j<7; j++){
        clutter2 +=`<div id="cube${i}${j}" class="cubs"></div>`
    }
    clutter2 +=`</div>`
    }
    document.querySelector("#pumpkin").innerHTML=clutter2;
  }
  insertBox();

let cubs=document.querySelectorAll(".cubs")
let photos=document.querySelectorAll(".photos")

cubs.forEach(function(elm,index){
  
  elm.addEventListener("mouseover",function(){
    gsap.to(photos[index],{
      scale: 1,
      // stagger:1,
      duration:1
    })
    // (flag === 1);
  })
  elm.addEventListener("mouseleave",function(){
    gsap.to(photos[index],{
      // y: "50%",
      // opacity:0,
      scale: 0,
      duration:1
    })
  })
})

cubs.forEach(function(elm,index){
  
 
})
}

function spananimation(){
  gsap.to("#lefttxt h1 span",{
    y: 400,
    duration:2.3,
    stagger:.1,
    ease: Circ,
    delay:2,
    opacity:0 
  })
  
  gsap.from("#seven #head span",{
    scrollTrigger:{
    scroller:"#main",
    trigger:"#seven #head span",
    start: "top 100%",
    // markers:true
    },
      stagger:.1,
      y: 200,
      rotate: 200,
      duration:.7,
      ease:Expo.easeInOut
  })

}

init();
navanimation();
spananimation();
circleanimation();
clickfuntion();
imaganimation();  
popanimation();
