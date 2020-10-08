var request = new XMLHttpRequest()

//open a connection
request.open('GET', 'https://api.github.com/orgs/zero-to-mastery/repos', true)

request.onload = function () {
    //start access the json data 
    var data = JSON.parse(this.response);
    // console.log(data);


    var statusHTML = '';


    $.each(data, function(i, status) {

        var name= status.name;
        var type = status.private;
        if(type === "true") {
            type = "private";
        }else{
            type = "public";
        }


        statusHTML +='<tr>';
        statusHTML += '<td>' + name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<td>' + status.default_branch + '</td>';
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '<td>' + type + '</td>';
        statusHTML += '</tr>';
        
    });

    $('tbody').html(statusHTML);

}

//request send
request.send();