var request = new XMLHttpRequest()

// var inputText   = document.getElementById('orgname').value;
// var inputText = "zero-to-mastery";
function inputText() {
    var inputText   = document.getElementById('orgname').value;
    alert("high ..");

}
//open a connection
request.open('GET', 'https://api.github.com/orgs/zero-to-mastery/repos', true)

request.onload = function () {
    //start access the json data 
    var data = JSON.parse(this.response);
    // console.log(data);


    var statusHTML = '';


    $.each(data, function(i, status) {
        // var req = new XMLHttpRequest()

        // req.open('GET','https://api.github.com/repos/zero-to-mastery/'+ status.name +'/branches', true)
        // req.onload = function () {
        //     //start access the json data 
        //     var branchData = JSON.parse(this.response);
            
        

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
            statusHTML += '<td>' + data.count + '</td>';
            statusHTML += '<td>' + status.language + '</td>';
            statusHTML += '<td>' + type + '</td>';
            statusHTML += '</tr>';
        
        // }
        // req.send();
    });

    $('tbody').html(statusHTML);

}

//request send
request.send();


const searchfun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('table');

    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[3];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }else{
                tr[i].style.display = none;
            }
        }
        
    }
};