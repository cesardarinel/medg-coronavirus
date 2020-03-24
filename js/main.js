window.onload = function () {
    document.getElementById("generar").addEventListener("click", function () {
        valida()
    })
};
var texto1 = "USTED NO NECESITA ASISTIR A CENTRO DE SALUD NI REALIZARSE EL TEST",
    texto2 = "SERÍA BUENO QUE HABLE CON UN MEDICO",
    boton = "<br> <input type='submit' value='Refescar' onclick='location.reload()'></input>",
    msj = "hola%20tengo%20algunas%20condultas%2C%20sali%20con%20los%20sintomas%3A",
    resul = "<p>Si no presenta síntomas, no necesita atención médica ni realizarse el test. </p>",
    cc = "Sin embargo como ha tenido contacto con un caso sospechoso o confirmado, usted tiene indicación de AISLAMIENTO DOMICILIARIO (CUARENTENA) durante 14 días, posterior al contacto con el caso probable o confirmado de COVID-19.",
    resul2 = "<p>Evite asistir a lugares con aglomeración de personas y los desplazamientos en general. La prevención es de suma importante, tanto para usted como su familia.   </p>",
    resul3 = "<p>Le rogamos estar atento a la aparición de síntomas, tales como tos, fiebre mayor a 38ºC y dificultad respiratoria.   </p>",
    sing = "Una persona sana no debe usar mascarillas en espacios públicos. No está probado que proporcione protección efectiva, sino al contrario, puede dar falsa sensación de seguridad. ",
    resul4 = "<p>En caso de aparición de los síntomas antes mencionados, rogamos ingresar nuevamente a la plataforma para posible teleconsulta con profesional médico, </p><p>evite asistir a centros de salud para evitar posibles contagios. </p>",
    resul5 = "<p>Además, es prioritario mantener las medidas generales de prevención del coronavirus </p>",
    resul6 = "<p>Si no presenta síntomas, no necesita atención médica ni realizarse el test. </p>",
    ed = "<p>Como es parte de un grupo de riesgo de complicaciones, también recomendamos evitar contactos innecesarios:</p><p>- Evite supermercados y malls, sobre todo en horarios punta. Solicite a algún miembro de su familia ayuda en sus compras</p><p>- Evite contacto con personas enfermas</p><p>Una persona sana no debe usar mascarillas en espacios públicos. No está probado que proporcione protección efectiva, sino al contrario, puede dar falsa sensación de seguridad</p>";

function valida() {
    let e = !1,
        a = !1,
        o = !1,
        s = !1,
        n = !1;
    var t = 0,
        r = resul,
        i = !1;
    document.getElementById("a1").checked && (e = !0, msj += "%0Acontacto", t += 1, r += cc),
     r += resul2,
     r += resul3, 
    document.getElementById("b1").checked && (a = !0, msj += "%0Asintomas",t += 1, r += sing, i = !0), 
    document.getElementById("c1").checked && (o = !0, msj += "%0Aproblema%20al%20respirar", t += 1, i = !0),
     document.getElementById("d1").checked && (s = !0, msj += "%0Afiebre", t += 1, i = !0),
     i && (r += sing),
     r += resul4, 
     r += resul5, 
     r += resul6, 
     document.getElementById("e1").checked && (n = !0, msj += "%0Aedad", t += 1, r += ed), 
     document.getElementById("formulario").style.visibility = "hidden", 
     document.getElementById("resultado").innerHTML =  0 == e && 0 == a && 0 == o && 0 == s && 0 == n ? 
     "<h3> " + texto1 + '</h3> <br><p>Si no presenta síntomas,no necesita atención médica ni realizarse el test. Evite asistir a lugares con aglomeración de personas y los desplazamientos en general. La prevención es de suma importante,tanto para usted como su familia. </p><p>Le rogamos estar atento a la aparición de síntomas,tales como tos,fiebre mayor a 38ºC y dificultad respiratoria. </p><p>En caso de aparición de los síntomas antes mencionados,rogamos ingresar nuevamente a la plataforma para posible teleconsulta con profesional médico,evite asistir a centros de salud para evitar posibles contagios. </p><p>Además,es prioritario mantener las medidas generales de prevención del coronavirus</p><a href="https://api.whatsapp.com/send?phone=18298161993&text=' + msj + '&source=&data=">Click para hablar con un medico  </a>' + boton : 
      1 == e && 1 == a && 1 == o && 1 == s && 1 == n || t >= 3 || 1 == i ? 
     "<h3> " + texto2 + '</h3> <br><p>No se alarme, puede ser solo una gripe, pero debemos hablar con los expertos para saber que es y evitar cosas peores</p><a href="https://api.whatsapp.com/send?phone=18298161993&text=' + msj + '&source=&data=">Click para hablar con un medico </a>' + boton : 
     "<h3> " + texto1 + "</h3> <br>" + r + '<a href="https://api.whatsapp.com/send?phone=18298161993&text=' + msj + '&source=&data=">Click para hablar con un medico </a>' + boton
     window.scrollTo(0, 0);
    }