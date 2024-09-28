'use strict';

// variables
let indexHeading;
let indexTerm;
let indexTermTerm;

let headings = new Array('Planes and Axes','Anatomical Terms', 'Movement of Joints');

// make arrays listing terms in a topic
let terms = new Array(100);
terms[0] = new Array('Longitundianl Axis', 'Horizontal Axis', 'Antero-Posterior Axis', 'Transverse Plane', 'Sagittal Plane', 'Frontal Plane');
terms[1] = new Array('Anterior/Posterior', 'Medial/Lateral', 'Superior/Inferior', 'Proximal/Distal');
terms[2] = new Array('Flexion/Extension', 'Abduction/Adduction', 'Plantar Flexion/ Dorsiflexion', 'Supination/Pronation', 'Inversion/Eversion', 'Internal Rotation/External Rotation', 'Elevation/Depression', 'Circumduction');

// make arrays listing descriptions of terms in a topic
let descriptions = new Array(100);
descriptions[0] = new Array('From North to South, see transverse plane', 'From East to West, see sagittal plane', 'from front to back, see frontal plane', 'Splits top and bottom, see logitudinal axis', 'Splits right and left, see horizontal axis', 'Splits front and back, see antero-posterior axis');
descriptions[1] = new Array('Anterior: front || Posterior: back', 'Medial: towards the midline || Lateral: away from the midline', 'Superior: higher (trunk) || Inferior: lower (trunk)', 'Proximal: closer to trunk (limbs) || Distal: farther from trunk (limbs)');
descriptions[2] = new Array('Flexion: joint angle decreases || Extension: joint angle increases', 'Abduction: moving away from midline || Adduction: moving towards the midline', 'Plantar Flexion: movement of ankle when pointing toes || Dorsiflexion: movement of ankle when flexing foot', 'Supination: Rotate palms facing forward || Pronation: Rotate palms facing backwards', 'Inversion: Ankle joint when standing on outer edge || Eversion: Ankle join when standing on inner edge', 'Internal Rotation: twist/turn a body part towards midline || External Rotation: twist/turn a body part outward from midline', 'Elevation: movement in upwards direction || Depression: movement in downwards direction', 'Circumduction: combonation of flexion, extension, abduction, and adduction');

// make arrays listing images of terms in a topic
let images = new Array(100);
images[0] = new Array('https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anatomical_axes.jpg/640px-Anatomical_axes.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anatomical_axes.jpg/640px-Anatomical_axes.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anatomical_axes.jpg/640px-Anatomical_axes.jpg', 'https://i0.wp.com/www.rishacademy.com/wp-content/uploads/2021/06/anatomicalplanes.png?fit=540%2C430&ssl=1', 'https://i0.wp.com/www.rishacademy.com/wp-content/uploads/2021/06/anatomicalplanes.png?fit=540%2C430&ssl=1', 'https://i0.wp.com/www.rishacademy.com/wp-content/uploads/2021/06/anatomicalplanes.png?fit=540%2C430&ssl=1');
images[1] = new Array('https://s3.us-east-2.amazonaws.com/medictests/app/public/ckeditor_assets/pictures/7/content_1-Anatomical-Terms-and-Planes-V6.jpg', 'https://s3.us-east-2.amazonaws.com/medictests/app/public/ckeditor_assets/pictures/7/content_1-Anatomical-Terms-and-Planes-V6.jpg', 'https://s3.us-east-2.amazonaws.com/medictests/app/public/ckeditor_assets/pictures/7/content_1-Anatomical-Terms-and-Planes-V6.jpg', 'https://s3.us-east-2.amazonaws.com/medictests/app/public/ckeditor_assets/pictures/7/content_1-Anatomical-Terms-and-Planes-V6.jpg');
images[2] = new Array('https://open.oregonstate.education/app/uploads/sites/157/2021/02/911_Body_MovementsPage-1-865x1024-1.jpg', 'https://open.oregonstate.education/app/uploads/sites/157/2021/02/911_Body_MovementsPage-1-865x1024-1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PinYWM_RUaMVHSWyO9iFx_AUITHcFAgrZg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Nk4EKh76P8M7N7A1syOYOPptW8h8s0gH9Q&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNx_9rbqyprojR-e0QNZbT8983jVzIUfaQuw&s', 'https://3.bp.blogspot.com/-4-V3SOP4FaY/TZHdtBUszyI/AAAAAAAAAC8/63KO4JmCLKo/s1600/F6-02+ER+0-40-40+Act+Prog.jpg', 'https://www.vhdissector.com/lessons/cadaver-dissection-guide/upper-extremities/movements/images/Scapular_elevation_depression.jpg','https://i.pinimg.com/736x/7c/df/fd/7cdffddbe7fbcb245419d3662ec5baaf.jpg');

// from section page to main menu page
function backToMain() {
    document.getElementById('main-page').hidden = false;
    document.getElementById('to-main').hidden = true;

    document.getElementById('anatomy-page').hidden = true;
}

function backToSection() {
    document.getElementById('subsections-page').hidden = true;
    document.getElementById('to-section').hidden = true;
    document.getElementById('to-main').hidden = false;

    if (indexTerm <= 2) {
        document.getElementById('anatomy-page').hidden = false;
    }
}

function backToSubsection() {
    document.getElementById('subsections-page').hidden = false;
    document.getElementById('learn-ss-page').hidden = true;
    document.getElementById('test-ss-page').hidden = true;
    document.getElementById('to-section').hidden = false;
    document.getElementById('to-subsection').hidden = true;
}

// from section page to subsection page
function sectionToSubsection() {
    document.getElementById('anatomy-page').hidden = true;
    document.getElementById('subsections-page').hidden = false;
    document.getElementById('to-section').hidden = false;
    document.getElementById('to-main').hidden = true;
}

// from main page to anatomy page
function anatomyMP() {
    document.getElementById('main-page').hidden = true;
    document.getElementById('anatomy-page').hidden = false;
    document.getElementById('to-main').hidden = false;
}

//from anatomy page to planes and axes page
function planesAxes() {
    document.getElementById('page-heading').innerText = 'Planes and Axes';
    sectionToSubsection();
    indexTerm = 0;
    indexHeading = 0;
}

// from anatomy page to anatomical terminology page
function anatomicalTerminology() {
    document.getElementById('page-heading').innerText = 'Anatomical Terminology';
    sectionToSubsection();
    indexTerm = 1
    indexHeading = 1;
}

// from anatomy page to movement at joints page
function movementAtJoints() {
    document.getElementById('page-heading').innerText = 'Movement at Joints';
    sectionToSubsection();
    indexTerm = 2
    indexHeading = 2;
}

// when next or prev button clicked, update arrays
function learnUpdate() {
    document.getElementById('progress-learn').innerText = (indexTermTerm + 1) + '/' + terms[indexTerm].length;
    document.getElementById('term-learn').innerText = terms[indexTerm][indexTermTerm];
    document.getElementById('description-learn').innerText = descriptions[indexTerm][indexTermTerm];
    document.getElementById('img-learn').src = images[indexTerm][indexTermTerm];
}

// initiate learning terms
function learnSS() {
    document.getElementById('subsections-page').hidden = true;
    document.getElementById('learn-ss-page').hidden = false;
    document.getElementById('to-section').hidden = true;
    document.getElementById('to-subsection').hidden = false;
    indexTermTerm = 0;

    document.getElementById('page-heading-learn').innerText = headings[indexHeading];
    learnUpdate();
}

// when previous button is clicked in learning section
function prevLearn() {
    // loop to back of array 
    if (indexTermTerm < 1) {
        indexTermTerm = (terms[indexTerm].length - 1);
    }
    else {
        indexTermTerm--;
    }
    learnUpdate();
}

// when next button is clicked in learning section
function nextLearn() {
    // loop back to beginning of array
    if (indexTermTerm >= (terms[indexTerm].length - 1)) {
        indexTermTerm = 0;
    }
    else {
        indexTermTerm++;
    }
    learnUpdate();
}

// test functions

// arrays for test questions
let test1 = new Array(100);
test1[0] = new Array('The ', 'The ', 'The ', 'The ', 'The ', 'The ');
test1[1] = new Array('In the anatomical position, the palms are ', 'The shoulders are ', 'The little toe lies ', 'The shoulder blade is ', 'The elbow bends at the ', 'The brain is ', 'The knee cap is ', 'The pelvis lies ',)

let test2 = new Array(100);
test2[0] = new Array(' plane divides the body into anterior and posterior sections.', ' plane divides the body into superior and inferior sections.', ' plane divides the body into left and right sections.', ' axis runs from North to South.', ' axis runs from East to West.', ' axis runs from front to back.');
test2[1] = new Array(' to the back of the hand', ' (above) to the pelvis', ' to the big toe', ' (behind) to the breastbone (sternum', ' end of the forearm', ' to the skull', ' to the femur (thigh)', ' to the skull')

// arrays for answers
let answersLength;

let answers = new Array(answersLength);
let result = new Array(answersLength);

let correctAnswers = new Array(100);
correctAnswers[0] = new Array('frontal', 'transverse', 'sagittal', 'longitudinal', 'horizontal', 'antero-posterior');
correctAnswers[1] = new Array('anterior', 'superior', 'lateral', 'posterior', 'proximal', 'medial', 'distal', 'inferior')

// update test arrays when next/prev button is clicked
function testUpdate() {
    document.getElementById('progress-test').innerText = (indexTermTerm + 1) + '/' + correctAnswers[indexTerm].length;
    document.getElementById('question-part-1').innerText = test1[indexTerm][indexTermTerm];
    document.getElementById('question-part-2').innerText = test2[indexTerm][indexTermTerm];
}

// initiate test 
function testSS() {
    // shuffle questions
    answersLength = test1[indexTerm].length;
    shuffle(test1, test2, correctAnswers);
    document.getElementById('subsections-page').hidden = true;
    document.getElementById('test-ss-page').hidden = false;
    document.getElementById('test-elements').hidden = false;
    document.getElementById('to-section').hidden = true;
    document.getElementById('to-subsection').hidden = false;
    document.getElementById('test-result').innerText = '';
    
    indexTermTerm = 0;

    document.getElementById('page-heading-test').innerText = headings[indexHeading];
    testUpdate();

    // reset answer and result arrays back to nothing
    for (let i=0; i<answersLength; i++) {
        answers[i] = '';
        result[i] = '';
    }
}

// shuffle test question and correct answer arrays 
function shuffle(array, array2, array3) {
    let currentIndex = array[indexTerm].length;

    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // randomize by switching the random number with the highest number
        [array[indexTerm][currentIndex], array[indexTerm][randomIndex]] = [array[indexTerm][randomIndex], array[indexTerm][currentIndex]];
        [array2[indexTerm][currentIndex], array2[indexTerm][randomIndex]] = [array2[indexTerm][randomIndex], array2[indexTerm][currentIndex]];
        [array3[indexTerm][currentIndex], array3[indexTerm][randomIndex]] = [array3[indexTerm][randomIndex], array3[indexTerm][currentIndex]];
    }
}

let textboxAnswer = document.getElementById('test-answer-1');

// when buttons are clicked, save value of textbox answer to answers array
function saveAnswer() {
    answers[indexTermTerm] = textboxAnswer.value;
    textboxAnswer.value = '';
}

// when prev button is clicked
function prevTest() {
    saveAnswer();
    // ensure index does not go below 0
    if (indexTermTerm > 0) {
        indexTermTerm--;
    }
    testUpdate();
    textboxAnswer.value = answers[indexTermTerm];
}

// when next button is clicked
function nextTest() {
    saveAnswer();
    // ensure index does not go above the last question
    if (indexTermTerm < (test1[indexTerm].length - 1)) {
        indexTermTerm++;
    }
    testUpdate();
    textboxAnswer.value = answers[indexTermTerm];
}

// submit answers
function submitTest() {
    saveAnswer();
    // check if any boxes are left blank
    for (let i = 0; i < correctAnswers[indexTerm].length; i++) {
        if (answers[i] !== '' || i == correctAnswers[indexTerm].length) {
            // hide test elements, post test result
            document.getElementById('test-elements').hidden = true;
            checkAnswers();
            document.getElementById('test-result').innerText = result;
        }
        else if (answers[i] === '') {
            alert('Please answer all questions before submitting.');
                break;
        }
        break;
    }
    
}

// when submit is clicked, check answers
function checkAnswers() {
    for (let i=0; i < answersLength; i++) {
        // compare correctAnswers to answers, respond accordingly
        if (answers[i] === correctAnswers[indexTerm][i]) {
            result[i] = 'Correct!';
        }
        else {
            result[i] = 'Incorrect!';
        }
    }
}