        $('#opF').change(function() {
            //alert('hols');
            let opF = $("#opF").val();
            let op = $("#op").val();

            if (opF === "cuadrado") {
                $("#text-change").html("Ingrese el lado 1");
                $("#text-change2").html("Ingrese el lado 2")
            }else{
                $("#text-change").html("Ingrese la base");
                $("#text-change2").html("Ingrese la altura")
            }
            if (op === "perimetro" && opF === "cuadrado") {
                $("#input2").hide();
                $("#text-change2").hide(); 
            }

            if (opF === "triangulo" && op === "perimetro" ) {
                $("#input2").show();
                $("#text-change2").show();
                $("#input3").show();
                $("#text-change3").show();
                
                $("#text-change").html("Ingrese el lado 1");
                $("#text-change2").html("Ingrese el lado 2");
                $("#text-change3").html("Ingrese el lado 3")
            }else{
                $("#input3").hide();
                $("#text-change3").hide();
            }
            if (opF === "paralelogramo") {
                $("#input2").show();
                $("#text-change2").show();       
            }
        });

        $('#op').change(function() {
           
            let opF = $("#opF").val();
            let op = $("#op").val();
            if (op === "area") {
                $("#input2").show();
                $("#text-change2").show();

                $("#input3").hide();
                $("#text-change3").hide(); 
            }
            if (op === "perimetro" && opF === "cuadrado") {
                $("#input2").hide();
                $("#text-change2").hide(); 
            }
            if (op === "perimetro" && opF === "triangulo") {
                $("#input3").show();
                $("#text-change3").show(); 
            }
        });
    
        //Animacion
  $('#btn').click(function(e) {
      
            var form = $("#calculator");
            var txtCalc =  $("#hola");
            let b = $("#input1").val();
            let h = $("#input2").val();
            let c = $("#input3").val();
            let op = $("#op").val();
            let opF = $("#opF").val();
            let rtrn = 0;


            if (op === "area" && opF === "triangulo") {
                if (b && h) {
                    rtrn = (b*h)/2;
                }else{
                    alert("Hacen falta datos")
                    return;
                }
               
            }
            
            if (op === "area" && opF === "cuadrado" || op === "area" && opF === "paralelogramo") {
                if (b && h) {
                    rtrn = b * h;
                }else{
                    alert("Hacen falta datos")
                    return;
                }
                
            }

            if (op === "perimetro" && opF === "paralelogramo"  ) {     
                if (b && h) {
                    let sum = parseInt(b) + parseInt(h);
                    //  alert(sum);
                     rtrn = sum * 2;
                }else{
                    alert("Hacen falta datos")
                    return;
                }

            }
            if (op === "perimetro" && opF === "cuadrado") {     
                if (b) {
                    rtrn = 4 * b;
                }else{
                    alert("Hacen falta datos")
                    return;
                }
                
           }

           if (op === "perimetro" && opF === "triangulo") {
            if (b && h && c) {
                rtrn = parseInt(b) + parseInt(h) + parseInt(c);
            }else{
                alert("Hacen falta datos")
                return;
            }
              
           }

            // let sum = parseInt(input1) + parseInt(input2);

            e.preventDefault();
            //alert(op);

                txtCalc.html(rtrn); 
                 
           

        });


