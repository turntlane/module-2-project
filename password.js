const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   


readline.question('Type your password: ', (password) => {
    if (password.length < 10) {
        console.log('Your password needs to be more than 10 characters!')
    }if (!password.includes('!')) {
        console.log('Your password needs a special character!')
    }
    else {
        console.log(`
        _   _   _____    _____   ______   _ 
       | \ | | |_   _|  / ____| |  ____| | |
       |  \| |   | |   | |      | |__    | |
       | .  |   | |   | |      |  __|   | |
       | |\  |  _| |_  | |____  | |____  |_|
       |_| \_| |_____|  \_____|  |______|  (_)
                                            
                                            
      
        `)
    }
    readline.close();
});






                       