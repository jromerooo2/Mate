var form = $("#calculator");
var txtCalc =  $("#hola");


        console.log(input1)
        //Animacion
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

  $('#btn').click(function(e) {
            let b = $("#input1").val();
            let h = $("#input2").val();
             
            let op = $("#op").val();
            let opF = $("#opF").val();
            let rtrn = 0;

            if (op === "area" && opF === "triangulo") {
                rtrn = (b*h)/2;
            }
            
            if (op === "area" && opF === "cuadrado" || op === "area" && opF === "paralelogramo") {
                rtrn = b * h;
            }

            if (op === "perimetro" && opF === "paralelogramo") {     
                 let sum = parseInt(b) + parseInt(h) ;
                //  alert(sum);
                 rtrn = sum * 2;
            }
            if (op === "perimetro" && opF === "cuadrado") {     
                rtrn = 4 * b;
           }

            // let sum = parseInt(input1) + parseInt(input2);

            e.preventDefault();
            //alert(op);


            $(form).addClass('calculator');

            setTimeout(()=>{

                txtCalc.html(rtrn); 
                $(form).removeClass('calculator');  
            }, 1800);

        });


