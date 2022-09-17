var script = document.createElement("SCRIPT");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName("head")[0].appendChild(script);
function validateform(){
    const ime = document.getElementById("firstname").value;
    const prezime = document.getElementById("secondname").value;
    const adresa = document.getElementById("adresa").value;
    const grad = document.getElementById("grad").value;
    const godina = document.getElementById("godine").value;
    const regex = /^[a-zA-Z]+$/;
    var formaData = {ime:ime,prezime:prezime,adresa:adresa,grad:grad,godina:godina};
    if(ime != "" && prezime != "" && adresa != "" && grad != "" && regex.test(ime) === true && regex.test(prezime) === true  && regex.test(grad) === true){
        function ajaxCalls(){
            $.ajax({
                /*URL je uzet sa internet-a,
                zato sto nisam dobio nikakav url za dodavanje korisnika.
                Inace u url moze da se stavi i ime fajla kao string u php ili 
                u drugom jeziku
                koji je zaduzen za dodavanje korisnika u bazu.*/ 
                url:'https://jsonplaceholder.typicode.com/todos/1',
                type:"GET",
                data: formaData,
                success: function(){
                    if(document.getElementById("Musko").checked){
                        SuccessfullyPage();
                    }else{
                        FinishPage()
                    }
                },
                error:function(error){
                    alert(`Error: ${error}`)
                }
            })
        }
        ajaxCalls();
        if(document.getElementById("Musko").checked){
            function SuccessfullyPage(){
                alert("Uspešno ste dodali korisnika.");
                document.write("<h1>Ime: " + formaData.ime + "</h1");
                document.write("<br>");
                document.write("<h1>Prezime: " + formaData.prezime + "</h1");
                document.write("<br>");
                document.write("<h1>Pol: Muški</h1");
                document.write("<br>");
                document.write("<h1>Godina rodjenja: " + formaData.godina + "</h1");
                document.write("<br>");
                document.write("<h1>Adresa: " + formaData.adresa + "</h1");
                document.write("<br>");
                document.write("<h1>Grad: " + formaData.grad + "</h1")
            }
        }else if(document.getElementById("Zensko").checked){
            function FinishPage(){
                alert("Uspešno ste dodali korisnika.");
                document.write("<h1>Ime: " + formaData.ime + "</h1");
                document.write("<br>");
                document.write("<h1>Prezime: " + formaData.prezime + "</h1");
                document.write("<br>");
                document.write("<h1>Pol: Ženski</h1");
                document.write("<br>");
                document.write("<h1>Godina rodjenja: " + formaData.godina + "</h1");
                document.write("<br>");
                document.write("<h1>Adresa: " + formaData.adresa + "</h1");
                document.write("<br>");
                document.write("<h1>Grad: " + formaData.grad + "</h1")
            }
        }
    }else{
        alert("Nisu validni podaci.")
    }
}
function OneTheBox(check) {
    var checkbox = document.getElementsByName('check')
    checkbox.forEach((data) => {
        if (data !== check) data.checked = false
    })
}