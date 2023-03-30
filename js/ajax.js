var baseURL = 'http://luctc-practice-ajax.herokuapp.com';
var listData =[];
var loading_elem = $("#loading");
getData();

function getData(){
    loading_elem.addClass('open');

    $.ajax({
        method: "GET",
        dataType: "html",
        url:  baseURL + "/api/cars.php",
        success : function(response) {
        //   console.log(JSON.parse(response));
        listData = JSON.parse(response);
        renderTable(); 
        loading_elem.removeClass('open');    
        }
      });
}


function renderTable(){
    var xhtml = '';
    for(var index =0 ; index <listData.length; index++){
        var car = listData[index];//car.name
        xhtml = xhtml + `<tr>
        <td>${car.id}</td>
        <td>${car.name}</td>
        <td>${car.year}</td>
        <td><button class='btn btn-info'>Edit</button>
            <button class='btn btn-danger'>Delete</button></td>
      </tr>`;
    }
    $('table tbody').html(xhtml);
}

// ============POST FORM=====================
function postData(id, name, year){
    loading_elem.addClass('open');
    $.ajax({
        type : "POST",
        dataType: "text",
        url:  baseURL + "/api/car.php",
        data: { id, name, year },
        error: function(jqXHR, textStatus, errorThrown) {
          var response = JSON.parse(jqXHR.responseText);
          if(response.status === 400){
              alert('invalid data input!!');
          }else if (response.status === 401){
              alert(response.error.join('-')); 
          }
          loading_elem.removeClass('open'); 
        },
        success: function (response) {
            //getData();
            var data = {id, name, year};
            listData.push(data);
            renderTable();
            loading_elem.removeClass('open'); 
        }
      });
}

$('form').submit(function(e){
    e.preventDefault();//prevent transfer to another page
    // console.log(e.target.elements);
    var id = Math.floor(Math.random()*99999);
    var name =e.target.elements.name.value;
    var year =e.target.elements.year.value;
    // console.log(id, name, year);
    postData(id, name, year);
})
