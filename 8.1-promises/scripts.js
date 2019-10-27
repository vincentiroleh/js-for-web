const result = document.getElementById('result');

let approval = 'Not approved!';

const getApproval = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Approved!');
        }, 500);
    });
}

getApproval()
    .then((resolvedApproved) => {
        result.textContent = resolvedApproved;
    });

