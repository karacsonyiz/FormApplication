function startNewForm(osap){

        let storage = window.sessionStorage;
        console.log(storage)
        let osap_num = "2201"
        console.log(osap)
        let form = {
                           "osap_num": osap_num
                       }

        fetch("api/createform", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                                },
                        body: JSON.stringify(form)
               }).then(function(response) {
                          return response.json();
                      })
                      .then(function(jsonData) {
                          console.log(jsonData);
                          window.location.href = "/worklist.html";
                      })
                  .catch(error => console.log(error));
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})