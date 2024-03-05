       
       // Surprising Code | Loging Form Popup
       
       
       
       
       // Important Elements
         // Sittings Toggling
         const toggle_btn = document.querySelector(".toggle-btn"),
         sitting_conta = document.querySelector(".sitting-container");
        const linksli = document.querySelectorAll(
            ".sitting-container .option-box .links li"
        );
        
        
        // Header Stiky
        const header = document.querySelector(".header");
        const top_btn = document.querySelector(".top");
        // Whene Scrool
        window.onscroll = () => {
        if (scrollY >= 50)  {header.classList.add("stiky");
            sitting_conta.classList.remove('tog')
            
    }
        else {header.classList.remove("stiky");}
        };
   
       // Toggling

        toggle_btn.addEventListener("click", () => {
        sitting_conta.classList.toggle("tog");
        });

        //  Check Local Storage
        let main_color = localStorage.my_color;
        if (main_color != null) {
            // Apply Active Class
            linksli.forEach((li)=> {
                if (li.dataset.color === main_color){
                   li.classList.add('active')
                } else {
                    // Remove Class active 
                    li.classList.remove('active');
                }
            })
        document.documentElement.style.setProperty("--main-color", main_color);
        }
        const switching = () => {
        
        linksli.forEach((li) => {
            // set Main value on Css Proprty

            li.addEventListener("click", (e) => {
            let data_colr = e.target.dataset.color;
            // set on css proprty
            document.documentElement.style.setProperty("--main-color", data_colr);
            // Set also in Local Storage
            localStorage.setItem("my_color", data_colr);
            // Remove all class active
            e.target.parentElement.querySelectorAll(".active").forEach((el) => {
                el.classList.remove("active");
            });
            //  Add on self element
            e.target.classList.add("active");
            });
        });
        };

        switching();

        /*  Build Random Images Function */
        // Array of image URLs
        const img = [
        "b1.jpg",
        "b2.jpg",
        "b3.jpg",
        
        ];

        // Function to set random background image
        function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * img.length);
        const randomImage = img[randomIndex];
        const landing = document.querySelector(".landing");
        landing.style.backgroundImage = `url("images/${randomImage}")`;
        }

        setInterval(() => {
        setRandomBackground();
        }, 5000);
                /*  Smoth Scroling Aplly On my Page  */
                    // Whene The Document Load Th Content
                document.addEventListener("DOMContentLoaded", function() {
                    var scrollLinks = document.querySelectorAll('a[href^="#"]');
                    
                    for (var i = 0; i < scrollLinks.length; i++) {
                      scrollLinks[i].addEventListener("click", smoothScroll);
                    }
                    
                    function smoothScroll(e) {
                      e.preventDefault();
                      var targetId = this.getAttribute("href");
                      var targetPosition = document.querySelector(targetId).offsetTop;
                      var startPosition = window.scrollY;
                      var distance = targetPosition - startPosition;
                      var duration = 1000;
                      var start = null;
                      
                      window.requestAnimationFrame(step);
                      
                      function step(timestamp) {
                        if (!start) start = timestamp;
                        var progress = timestamp - start;
                        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                        if (progress < duration) window.requestAnimationFrame(step);
                      }
                      
                      function easeInOutCubic(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t * t + b;
                        t -= 2;
                        return c / 2 * (t * t * t + 2) + b;
                      }
                    }
                  });