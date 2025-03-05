document.addEventListener('DOMContentLoaded', function () {
    showSection('Works'); // Assuming showSection is defined elsewhere

    fetch('posts/descriptions.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.trim().split('\n');
            const descriptions = lines.map(line => {
                const [title, desc, styleFlag] = line.split("===");
                return { title: title.trim(), description: desc.trim().replace(/\\n/g, '<br>'), style: styleFlag.trim() };
            });

            const worksContainer = document.getElementById('Works');
            worksContainer.innerHTML = ''; // Clear existing content if needed

            descriptions.forEach((item, index) => {
                // Create main container for each item
                const imgWithInfoDiv = document.createElement('div');
                imgWithInfoDiv.className = 'img-with-info';

                

                // Create container for 'a' and its contents if style is 'yes'
                if (item.style === 'yes') {

                    imgWithInfoDiv.setAttribute('id', 'thing');
                    
                    // Create sidebar container
                    const sidebarDiv = document.createElement('div');
                    sidebarDiv.className = 'sidebar2';
                    sidebarDiv.setAttribute('id', 'hi');


                    // Populate sidebar content
                    const h2 = document.createElement('h2');
                    h2.innerHTML = item.title;

                    const p = document.createElement('p');
                    p.innerHTML = item.description;

                    sidebarDiv.appendChild(h2);
                    sidebarDiv.appendChild(p);

                    // Append sidebar to main container
                    imgWithInfoDiv.appendChild(sidebarDiv);

                    // Create container for image with border
                    const imgWithBorderDiv = document.createElement('div');
                    imgWithBorderDiv.className = 'img-with-border';
                    

                    // Create image element
                    const img = document.createElement('img');
                    img.setAttribute('id', 'boom');
                    img.src = `posts/image${index + 1}.jpg`; // Assuming images are named sequentially
                    img.alt = `Image ${index + 1} Description`;

                    // Append image to container with border
                    imgWithBorderDiv.appendChild(img);
                    imgWithInfoDiv.appendChild(imgWithBorderDiv);
                } else {
                    // Create sidebar container
                    const sidebarDiv = document.createElement('div');
                    sidebarDiv.className = 'sidebar2';

                    // Populate sidebar content
                    const h2 = document.createElement('h2');
                    h2.innerHTML = item.title;

                    const p = document.createElement('p');
                    p.innerHTML = item.description;

                    sidebarDiv.appendChild(h2);
                    sidebarDiv.appendChild(p);

                    // Append sidebar to main container
                    imgWithInfoDiv.appendChild(sidebarDiv);

                    // Create container for image with border
                    const imgWithBorderDiv = document.createElement('div');
                    imgWithBorderDiv.className = 'img-with-border';

                    // Create image element
                    const img = document.createElement('img');
                    img.src = `posts/image${index + 1}.jpg`; // Assuming images are named sequentially
                    img.alt = `Image ${index + 1} Description`;

                    // Append image to container with border
                    imgWithBorderDiv.appendChild(img);
                    imgWithInfoDiv.appendChild(imgWithBorderDiv);
                }

                // Append the constructed item container to the main works container
                worksContainer.appendChild(imgWithInfoDiv);
            });
        })
        .catch(error => console.error('Error fetching or processing descriptions:', error));
});



function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
