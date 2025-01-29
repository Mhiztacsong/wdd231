const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

});


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
];

// Function to display courses dynamically
function displayCourses(coursesToDisplay) {
    const container = document.getElementById('course-container');
    const totalCreditsElement = document.getElementById('total-credits');
    container.innerHTML = ''; // Clear previous courses

    let totalCredits = 0;

    coursesToDisplay.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.style.backgroundColor = course.completed ? 'green' : 'red'; // Different style for completed

        courseCard.textContent = `${course.subject}${course.number}`;

        // Add event listeners to open modal on course card click
        courseCard.addEventListener('click', () => displayCourseDetails(course));
    
        container.appendChild(courseCard);

        totalCredits += course.credits; // Calculate total credits
    });

    totalCreditsElement.textContent = `The total number of course credit listed above is  ${totalCredits}`; // Update total credits
}


// Filter functions
function filterCourses(subject) {
    if (subject === 'ALL') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
}

// Event listeners for buttons
document.getElementById('all').addEventListener('click', () => filterCourses('ALL'));
document.getElementById('cse').addEventListener('click', () => filterCourses('CSE'));
document.getElementById('wdd').addEventListener('click', () => filterCourses('WDD'));

// Initial load (display all courses)
filterCourses('ALL');


const courseDetails = document.querySelector('#course-details');


function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    const closeModal = document.querySelector('#closeModal')
    
    closeModal.addEventListener("click", () => {
      courseDetails.close();
    });
}