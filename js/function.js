let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
image1.style.backgroundImage = "url('img/steady.jpg')"
$('#p5').waypoint(function(direction) {
	if (direction === 'up'){
		image2.style.backgroundImage = "url('img/steady.jpg')"
		image1.style.zIndex ='900'
	}
	var tl = anime.timeline({
		easing: 'easeOutExpo',
	  });
	  
	  // Add children
	  tl
	  .add({
		targets: '#image2',
		translateX: '200',
		zIndex: 1001,
		update: function(){
			image2.style.backgroundImage = "url('img/harley.jpg')"
		}
	  })
	  .add({
		targets: '#image2',
		translateX: [200,0]
	  });
	  
}, {
	offset: '100%',
	context: $('.article')
});
$('#article2').waypoint(function(direction) {
	if (direction === 'up'){
		image2.style.backgroundImage = "url('img/harley.jpg')"
		image1.style.zIndex ='900'
	}
	var tl = anime.timeline({
		easing: 'easeOutExpo',
	  });
	  
	  // Add children
	  tl
	  .add({
		targets: '#image1',
		translateY: '200',
		zIndex: 1002,
		update: function(){
			image1.style.backgroundImage = "url('img/boy.jpg')"
		}
	  })
	  .add({
		targets: '#image1',
		translateY: [-200,0]
	  });
}, {
	offset: '90%',
	context: $('.article')
});
$('#ap5').waypoint(function(direction) {
	if (direction === 'up'){
		
	}
	var tl2 = anime.timeline({
		easing: 'easeOutExpo',
		duration: 450
	  });
	  
	  // Add children
	  tl2
	  .add({
		targets: '#image2',
		translateX: '200',
		zIndex: 1004,
		update: function(){
			image2.style.backgroundImage = "url('img/child.jpg')"
		}
	  })
	  .add({
		targets: '#image2',
		translateX: [200,0]
	  });
	  
}, {
	offset: '90%',
	context: $('.article')
});







// document.addEventListener('DOMContentLoaded', () => {
// 	// Creating waypoint
// 	new Waypoint({
// 	  element: document.querySelector('#p6'),
// 	  handler: function() {
// 			anime({
// 				targets: '#image2',
// 				easing: 'easeOutExpo',
// 				translateY: '-100vh',
// 				duration: 1000,
// 				update : function(){
// 					document.querySelector('#image2').style.backgroundImage = "url('/img/pablo.jpg')"
// 				}
// 			})
// 			anime({
// 				targets: '#image1',
// 				easing: 'easeOutExpo',
// 				translateY: '-100vh',
// 				duration: 1000,
// 			})
// 	  },
// 	  context: document.querySelector('.article'),
// 		offset: '100%',
// 	})
// })


let menu = document.querySelector('.hamburger')
let sidebar = document.querySelector('.sidebar')
let sidebarWidth = document.querySelector('.sidebar').offsetWidth
menu.addEventListener('click', () => {
	// sidebarWidth = 68 ? document.body.classList.add('expanded'):document.body.classList.remove('expanded')
	if(sidebarWidth == 68){
		sidebar.classList.add('expanded')
	} else if(sidebarWidth > 69) {
		sidebar.classList.remove('expanded')
	}
})
let night = document.querySelector('#darkMode').addEventListener('click', nightMode);
let bg = document.querySelector('body')
let text = document.querySelector('.article')
function nightMode(){
    switch(bg.style.backgroundColor){
        case "rgb(41,41,41)":
            anime({
                targets: bg,
                backgroundColor: 'rgb(255, 255, 255)',
                easing: 'easeInExpo',
                duration: 1000,
			});
			anime({
                targets: text,
                color: '#000000',
                easing: 'easeInExpo',
                duration: 1000,
			});
            break;
        default:
            anime({
				targets: bg,
				backgroundColor: 'rgb(41,41,41)',
                easing: 'easeInExpo',
                duration: 1000,
            })
            anime({
                targets: text,
                color: "#ffffff",
                easing: 'easeInExpo',
                duration: 1000,
			})
			anime({
                targets: 'svg',
                fill: '#ffffff',
                easing: 'easeInExpo',
                duration: 1000,
			});
			anime({
				targets: '.separator',
				backgroundColor: '#ffffff',
			})
            break;
    }
}

// $('#p5').waypoint(function() {
// 	anime({
// 		targets: '#image2',
// 		easing: 'easeOutExpo',
// 		translateY: '-100vh',
// 		duration: 1000,
// 		update : function(){
// 			document.querySelector('#image2').style.backgroundImage = "url('/img/pablo.jpg')"
			
// 		}
// 	})
// }, {
// 	offset: '100%',
// 	context: $('.article')
// });

// $('#p6').waypoint(function() {
// 	anime({
// 		targets: '#image1',
// 		easing: 'easeOutExpo',
// 		delay: 500,
// 		zIndex: 1002,
// 		update : function(){
// 			document.querySelector('#image1').style.backgroundImage = "url('/img/portrait.jpg')"
			
// 		}
// 	})
// }, {
// 	offset: '100%',
// 	context: $('.article')
// });
