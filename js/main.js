console.log(`Warsztaty - jQuery - Pobierz dane po kliknięciu przycisku`);

$(document).ready(function() {
    
    // wariant 1

    // $('#get-data').click(function() {

    //    $.get('https://akademia108.pl/api/ajax/get-post.php')
    //    .done(function(data){

    //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
    //         let userId = $('<p></p>').text(`User ID: ${data.userId}`);
    //         let pTitle = $('<p></p>').text(`Title: ${data.title}`);
    //         let pBody = $('<p></p>').text(`Body: ${data.id}`);
    //         let hr = $('<hr />');

    //         let jqBody = $('body');

    //         jqBody.append(pId);
    //         jqBody.append(userId);
    //         jqBody.append(pTitle);
    //         jqBody.append(pBody);
    //         jqBody.append(hr);
          
    //         // console.log(data);
    //    })
    //    .fail(function(error) {
    //         console.error(error);
    //    })

    // })



    // wariant 2

    $('#get-data').click(function() {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){
 
             let pId = $('<p></p>').text(`Post ID: ${data.id}`);
             let userId = $('<p></p>').text(`User ID: ${data.userId}`);
             let pTitle = $('<p></p>').text(`Title: ${data.title}`);
             let pBody = $('<p></p>').text(`Body: ${data.id}`);
             let hr = $('<hr />');
 
             let jqBody = $('body');
 
             jqBody.append(pId);
             jqBody.append(userId);
             jqBody.append(pTitle);
             jqBody.append(pBody);
             jqBody.append(hr);
           
             // console.log(data);
        })
        .fail(function(error) {
             console.error(error);
        })
    });

})

