        // const menuToggle = document.getElementById('menu-toggle');
        // const menuClose = document.getElementById('menu-close');
        
        // menuToggle.addEventListener('click', () => {
        //     mobileMenu.classList.add('open');
        // });
        
        // menuClose.addEventListener('click', () => {
        //     mobileMenu.classList.remove('open');
        // });
        
        // document.querySelectorAll(' a').forEach(link => {
        //     link.addEventListener('click', () => {
        //         mobileMenu.classList.remove('open');
        //     });
        // });
        
        // const sections = document.querySelectorAll('.section');
        
        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('visible');
        //         }
        //     });
        // }, {
        //     threshold: 0.1
        // });
        
        // sections.forEach(section => {
        //     observer.observe(section);
        // });
        
        // const skillBars = document.querySelectorAll('.skill-progress');
        
        // const skillObserver = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             const width = entry.target.style.width;
        //             entry.target.style.width = '0';
        //             setTimeout(() => {
        //                 entry.target.style.width = width;
        //             }, 100);
        //         }
        //     });
        // }, {
        //     threshold: 0.5
        // });
        
        // skillBars.forEach(bar => {
        //     skillObserver.observe(bar);
        // });
        
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function(e) {
        //         e.preventDefault();
                
        //         const targetId = this.getAttribute('href');
        //         const targetElement = document.querySelector(targetId);
                
        //         if (targetElement) {
        //             window.scrollTo({
        //                 top: targetElement.offsetTop - 80,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });