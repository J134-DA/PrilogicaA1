class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)

  }

//ejercicios1//
    mayor(){
        let n1 = document.getElementById('num1').value
        n1 = parseFloat(n1)
        let n2 = document.getElementById('num2').value
        n2 = parseFloat(n2)
        let resp = document.getElementById('resp')
      if(n1 > n2){
        resp.textContent=`el numero ${n1.toString()} es mayor`
      }else if(n2>n1){
        resp.textContent=`el numero ${n2.toString()} es mayor`
      }else if(n1===n2){
      resp.textContent=`los numeros son iguales`
      }else{
        resp.textContent=`los valores ingresados son incorrectos`
      }
    }

    diasdelasemana(){
      let num = document.getElementById("num").value
      num = parseFloat(num)
      let resp = document.getElementById('resp')
        switch(num){
          case 1:
            resp.textContent=`el dia es LUNES`
            break
          case 2:
            resp.textContent=`el dia es MARTES`
            break
          case 3:
            resp.textContent=`el dia es MIÉRCOLES`
            break
          case 4:
            resp.textContent=`el dia es JUEVES`
            break
          case 5:
            resp.textContent=`el dia es VIERNES`
            break
          case 6:
            resp.textContent=`el dia es SÁBADO`
            break
          case 7:
            resp.textContent=`el dia es DOMINGO`
            break
        default:
          resp.textContent=`el valor ingresado no corresponde a ningun dia de la semana`  
            
        }  
        
      }
      añobisiesto(){
        let año = document.getElementById("Año").value
        año = parseFloat(año)
        let resp = document.getElementById('resp')
        if (año % 4 == 0 && (año % 100 != 0)|| año % 400 == 0){
          resp.textContent=`el año es bisiesto`
        }else{
          resp.textContent=`el año no es bisiesto`
        }
      }

      presentar(){
        let ini= document.getElementById("inicio").value
        ini = parseFloat(ini)
        let fin= document.getElementById("final").value
        fin = parseFloat(fin)
        let resp = document.getElementById('resp')
        resp.textContent=`contamos:\n`
        while(ini <= fin){
          resp.textContent+=`${ini.toString()}\n`
          ini++
        }
       
      }

      sumarycontar(){
        let ini= document.getElementById("inicio").value
        ini = parseFloat(ini)
        let fin= document.getElementById("final").value
        fin = parseFloat(fin)
        let resp = document.getElementById('resp')
        let acum = 0
        if(ini <=  fin){
          resp.textContent+=`los valores son:\n`
          while (ini <= fin){
            resp.textContent+=`${ini.toString()}\n`
            acum = acum + ini
            ini++
          }
          resp.textContent+=`la suma de todos los numeros es:${acum.toString()}`
        }else if (ini >= fin){
          resp.textContent=`los valores son:\n`
          while (ini >= fin){
            resp.textContent+=`${ini.toString()}\n`
            acum = acum + ini
            ini--
          }
          resp.textContent+=`la suma de todos los numeros es:${acum.toString()}`
        }else{
          resp.textContent=`valor no valido`
        }
      }

      divisores(){
        let nume = document.getElementById("nume").value
        nume = parseFloat(nume)
        let resp = document.getElementById('resp')
        let conta = 1
        resp.textContent+=`los divisores del numero ${nume.toString()} son:\n`
        if(nume === nume){
        while (conta < nume){
          if (nume % conta == 0 ){
            resp.textContent+=`${conta.toString()}\n`
          }
          conta++
        }
        }else{
          resp.textContent=`el valor ingresado no es valido`
        }
      }

      pares(){
        let nume = document.getElementById("nume").value
        nume = parseFloat(nume)
        let resp = document.getElementById('resp')
        let conta = 1, acum = 0
        resp.textContent=`los numeros pares del 1 al ${nume.toString()} son:\n`
        for(let conta = 1; conta <=nume; conta++){
          if (conta % 2 == 0 ){
            resp.textContent+=`${conta.toString()} - `
            acum = acum + conta
          }
        }
        resp.textContent+=`\n`
        resp.textContent+=`la suma de los numeros pares es: ${acum.toString()}`
      }

      numeroperfecto(){
        let nume = document.getElementById("nume").value
        nume = parseFloat(nume)
        let resp = document.getElementById(`resp`)
        let i = 1, acum = 0
        while (i < nume){
          if (nume % i == 0 ){
            acum = acum + i
          }
          i++
        }
        if(acum == nume){
          resp.textContent=`el numero ${nume.toString()} es PERFECTO`
        }else{
          resp.textContent=`el numero ${nume.toString()} no es PERFECTO`
        }

      }
 

      }









    



   
let ejer = new Ejercicios1()
//ejer.venta()
