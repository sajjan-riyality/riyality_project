 


 document.addEventListener('DOMContentLoaded', function() {
            const paginationLinks = document.querySelectorAll('.pagination .page-link');
            const pages = document.querySelectorAll('.content .page');
            
            paginationLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    
                    const pageNumber = this.textContent.trim();
                    const targetPage = document.getElementById(`page-${pageNumber}`);
                    
                    // Hide all pages
                    pages.forEach(page => page.classList.remove('active'));
                    
                    // Show the selected page
                    if (targetPage) {
                        targetPage.classList.add('active');

                       

                    }
                    
                    // Update pagination link states
                    paginationLinks.forEach(link => link.parentElement.classList.remove('active'));
                    this.parentElement.classList.add('active');
                });
            });
        });