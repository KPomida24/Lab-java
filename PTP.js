console.log("Hello World");

const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent=currentYear;

const alertButton = document.getElementById('btn-alert');
const incrementButton = document.getElementById('increment-btn');

let alertState = true;

alertButton.addEventListener('click' , function(){alert('Not Open')
});

alertButton.addEventListener('mouseover', () => { 
    if (alertState) {
        alertButton.innerText = 'Not Open';
        alertState = false;
    } else {
        alertButton.innerText = 'Alert!';
        alertState = true;
    }
});

incrementButton.addEventListener('click', () => incrementCounter());

let counter = 0;


function incrementCounter() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

const orderedList = document.getElementById('numbers');
        
     for (let i = 1; i <= 100; i++) {
                
     const listItem = document.createElement('li');
        
     listItem.textContent = i % 2 === 0 ? 'PTP' : 'PrimeThreads';
    
     orderedList.appendChild(listItem);
}
        document.getElementById('increment-btn').addEventListener('click', () => incrementCounter());

        function incrementCounter() {
            counter++;
            document.getElementById('counter').innerText = counter;
        }
