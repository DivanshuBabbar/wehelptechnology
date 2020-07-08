jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
  
    else var str = $(this).serialize();
   console.log("hello");
    console.log(str);
    $.ajax({
    method: 'post',
    url: `https://api.mailgun.net/v3/sandboxa2c487dd3b9e404989d97da0d2664340.mailgun.org/messages`,
    auth: {
        username: 'api',
        password: '562fcec8960bc4ba2d0fe10f481a6c71-f696beb4-9e3514e5'
    },
    params: {
        from: 'Awesome Development Team <mailgun@sandboxa2c487dd3b9e404989d97da0d2664340.mailgun.org>',
        to: 'yogeshnawhal@gmail.com',
        subject: 'Hello',
        text: 'Welcome to the team!'
    }
}).then(
    response => {
        console.log(response)
    },
    reject => {
        console.log(reject)
    }
);
    return false;
  });

});
