function cambiarContenido(seccion) {
    const contenedor = document.getElementById('Contenedor-principal');
    switch (seccion) {
        case 'Home':
            contenedor.innerHTML = `
                <h4>Bienvenidos~~</h4>
                <p class="intro">Por medio de este canal conoceras un poco acerca de lo que es el cuidado de el agua además de que comprenderas un poco acerca de su importancia y como es tan necesario su mantenimiento adecuado para que siga estando con nosotros, sin mas preambulos sientete libre de explorar!!!</p>
                <img src="imagenes/duck.jpg" style="max-width: 100%;">
            `;
            break;

        case 'Intro':
            contenedor.innerHTML = `
                <h4 class="titulo1">Introducción</h4>
                <p class="texto1">Buenas tardes, estimados miembros de la comunidad, el día de hoy venimos con el propósito de hablarles sobre medidas para reducir el uso de agua. En los últimos tiempos, ha habido una escasez en este recurso vital. Podríamos pensar que solo pasa en otros países o estados, pero Calvillo ha sufrido un declive en distintos factores por la falta de agua.  
                   ​¿Por qué es importante?
                ​El agua es necesaria para casi todo: beber, cocinar, bañarse, lavar, para la agricultura, los animales, producir energía y fabricar productos..</p>
                <img src="imagenes/ponyo2.jpg" style="max-width: 100%;">
               <p class="texto1">de ahi se deriva su importancia ya que dejando todo esto de lado ¿Que somos nosotros sin el agua?...</p>
            `;
            break;

        case 'Objetivos':
            contenedor.innerHTML = `
                <h4 class="objetivos">Nuestros Objetivos</h4>
                <p class="texto2">¿Porque hacemos esto? En los últimos años, en todas las partes del mundo, incluyendo nuestro municipio han habido crisis y escasez de la materia
indispensable    para la vida, el agua. Según el Gobierno del Estado de Aguascalientes 
aproxima  que cada habitante de Calvillo gasta 574 litros de agua diarios para cumplir con distintas necesidades cotidianas, entre todas las personas del municipio tomando 60,000 personas como muestra se gasta 34,440,000 litros diarios, si incluimos el gasto que se da en el sector agrario y el sector de consumo público se gastan 112 Milliones de Litros diarios.</p> 
                <p class="texto2">¿Cuál es nuestro objetivo?
Nosotros con este proyecto buscamos fomentar soluciones de calidad a esta problemática haciendo que sean herramientas efectivas y  prácticas,para que la gente de nuestro municipio y otras partes del mundo las utilicen como forma de guiar su compartimento diario y su relación con el agua.</p> 
                <img src="imagenes/squirtle.jpg" style="max-width: 100%; border-radius: 15px;">
            `;
            break;

        case 'Cuida-el-agua':
            contenedor.innerHTML = `
                <h4 class="cuidado">¡Cuidado del Agua!</h4>
                <p class="acciones">Acciones para reducir el uso del agua</p>
​<p class="acciones">Existen acciones sencillas que forman parte de nuestra campaña:</p>

<ul>
  <li class="puntos">Concientización: Realizar pláticas en escuelas, calles y redes sociales sobre la importancia del cuidado del agua.</li>
  <p class="acciones">​Hábitos en casa:</p>
  <li class="puntos">​Cerrar la llave al cepillarse los dientes.</li>
 <li class="puntos">​Tomar baños más cortos.</li>
 <li class="puntos">​Reutilizar agua para limpiar o regar plantas.</li>  
 <li class="puntos">​Detección de fugas: En comunidades rurales existen fugas que pasan desapercibidas, por lo que se busca alertar a las personas para que revisen llaves, tuberías y tinacos.</li> 
 <li class="puntos">​Usar cubetas en lugar de mangueras.</li>
</ul>

<p class="acciones">En conclusion...
​El agua es el recurso más importante para la supervivencia humana. Necesitamos aprender a darle un uso más responsable para ayudar a las futuras generaciones y mejorar la calidad de vida de las comunidades.  
</p>
                <img src="imagenes/gary.jpg" style="max-width: 100%;">
                <p class="acciones">Nota: esto se siente bastante repetitivo y aburrido a la vez pero si es para cuidar de nuestro recurso mas importante, entonces vale la pena no? y si esa no es razon suficiente, hazlo por gary.</p>
            `;
            break;

        case 'Preguntas':
            contenedor.innerHTML = `
                <h4>Es hora de las preguntas</h4>
                <div style="text-align: left; font-family: 'Courier New', Courier, monospace; ">
                    <p><strong>¿Cómo se purifica el agua que consumimos?</strong></p>
                <p>Para que llegue agua potable de calidad a nuestros grifos ésta pasa por un importante proceso conocido como filtrado del agua. Este proceso elimina los sólidos y agentes contaminantes (virus, parásitos y bacterias) que tiene el agua en su origen para que podamos consumirla sin riesgo de enfermar. Por lo tanto, el agua purificada tiene propiedades buenas para la salud en la medida en que no contiene patógenos ni sustancias nocivas.</p>
                <hr>
            <p><strong>¿Hacia dónde va el agua después de que nosotros la usamos?</strong></p>
                <p>Nuestro sistema de alcantarillado recolecta y trata las aguas residuales de hogares y negocios, las aguas pluviales (agua de lluvia) y la escorrentía de las calles hacia los desagües. Esta es la línea de vida de nuestra ciudad que protege la salud pública y la calidad ambiental.</p>
                 <hr>
            <p><strong>¿A qué amenaza se enfrenta el agua en estos tiempos?</strong></p>
                <p>Las principales amenazas para el agua son la contaminación, la sobreexplotación, el cambio climático y la destrucción del hábitat. Estas amenazas pueden provocar el deterioro de la calidad y la cantidad del agua, con repercusiones negativas para la salud humana, la fauna silvestre y el medio ambiente.</p>
                <hr>
                <p><strong>¿Se puede usar el agua de lluvia?</strong></p>
                <p>El agua de lluvia se puede utilizar, principalmente para actividades domésticas, riego y limpieza, siendo una excelente forma de ahorrar agua potable. El agua de lluvias no es necesariamente segura para beber sin antes eliminar microbios y sustancias químicas.</p>
                <hr>
                <p><strong>¿Cuáles son los mayores contaminantes del agua?</strong></p>
                <p>Los principales contaminantes del agua incluyen bacterias, virus, parásitos, fertilizantes, pesticidas, fármacos, nitratos, fosfatos, plásticos, desechos fecales y hasta sustancias radiactivas. Estos elementos no siempre tiñen el agua, haciendo que la contaminación hídrica resulte invisible en muchas ocasiones.</p>
                
            </div>
            `;
            break;

        default:
            contenedor.innerHTML = `<h4>Sección no encontrada</h4>`;
    }
}