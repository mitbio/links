      
	// Toggle hamburger menu
	function toggleMenu() {
	  const sidebar = document.getElementById('sidebar');
	  if (sidebar.style.left === '0px') {
		sidebar.style.left = '-200px';
	  } else {
		sidebar.style.left = '0px';
	  }
	}

	 // JavaScript to handle theme switching
        const toggleSwitch = document.getElementById('toggle-switch');
        const toggleState = document.getElementById('toggleState');
        const body = document.body;

        // Update the theme based on the toggle switch
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                toggleState.textContent = 'Dark Mode';
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                toggleState.textContent = 'Light Mode';
            }
        });

        // Optional: Load saved theme from local storage (if applicable)
        window.addEventListener('load', function() {
            if (localStorage.getItem('theme') === 'dark') {
                toggleSwitch.checked = true;
                body.classList.add('dark-theme');
                toggleState.textContent = 'Dark Mode';
            } else {
                body.classList.add('light-theme');
                toggleState.textContent = 'Light Mode';
            }
        });
				let currentIndex = 0;
			const slides = document.querySelector('.slider');
			const dots = document.querySelectorAll('.dots button');

			// Show a particular slide based on index
			function showSlide(index) {
				const totalSlides = document.querySelectorAll('.slider img').length;
				if (index >= totalSlides) {
					currentIndex = 0;
				} else if (index < 0) {
					currentIndex = totalSlides - 1;
				} else {
					currentIndex = index;
				}
				slides.style.transform = `translateX(-${currentIndex * 100}%)`;
				updateDots();
			}

			function prevSlide() {
				showSlide(currentIndex - 1);
			}

			function nextSlide() {
				showSlide(currentIndex + 1);
			}

			function currentSlide(index) {
				showSlide(index);
			}

			function updateDots() {
				dots.forEach(dot => dot.classList.remove('active'));
				dots[currentIndex].classList.add('active');
			}

			// Auto Slide every 5 seconds
			setInterval(() => {
				nextSlide();
			}, 5000);