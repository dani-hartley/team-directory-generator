const generatePage = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/f4a393c93b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div>
        <h1 class="header">My Team</h1>
        </div>
</header>
<div calss="container">
<div class="row row-cols-4 d-flex justify-content-center">
${data}
</div>
</div>
    
</body>
</html>
    `
}

const generateManager = data => {
    return `
    
    <div class="card bg-info" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    <i class="fas fa-mug-hot"></i> Manager
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">Office Number: ${data.office}</li>
    </ul>
    </div>
    
    `
}
const generateEngineer = data => {
    return `
    
    <div class="card bg-warning" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    <i class="fas fa-glasses"></i> Engineer
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">Github:<a href="https://github.com/${data.github}" target="_blank"> ${data.github}</a></li>
    </ul>
    </div>
    
    `
}
const generateIntern = data => {
    return `
    
    <div class="card bg-secondary" style="width: 18rem;">
    <div class="card-header">
    ${data.name} <br>
    <i class="fas fa-user-graduate"></i> Intern
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email:<a href="mailto: ${data.email}"> ${data.email}</a></li>
    <li class="list-group-item">School: ${data.school}</li>
    </ul>
    </div>
    
    `
}

module.exports = { generateManager, generateEngineer, generateIntern, generatePage };