let op = prompt(
    "Seleccione una de las opciones:  \n 1 - Vertebrados \n 2 - Invertebrados \n 3 - Herbívoros \n 4 - Carnívoros"
);

if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Debe ser un numero entre 1 y 4");
} else {
    let op2 = "";
    if (op === "1") {
        op2 = prompt(
            "Seleccionaste Vertebrados, ahora selecciona uno de los siguientes animales para ver una breve descripcion :  \n 1 - Perro \n 2 - Loro \n 3 - Tucán \n 4 - tiburón \n 5 - Vaca"
        );

        if (op2 !== "1" && op2 !== "2" && op2 !== "3" && op2 !== "4" && op2 !== "5") {
            alert("Debe ser un número entre 1 y 5");
        } else {
            if (op2 === "1") {
                alert("El perro es un animal mamífero y cuadrúpedo que fue domesticado hace unos 10.000 años y que, actualmente, convive con el hombre como una mascota. Su nombre científico es Canis lupus familiaris.");
            }

            if (op2 === "2") {
                alert("Los psitácidos son una familia de aves psitaciformes llamadas comúnmente loros o papagayos, que incluye a los guacamayos, las cotorras y formas afines de América y África.");
            }

            if (op2 === "3") {
                alert("Los ranfástidos, conocidos comúnmente como tucanes, diotedé o diostedé son una familia de aves ranfástidas del orden de los piciformes es muy amplia ya que alberga seis géneros y cuarenta y dos especies diferentes de tucanes.");
            }

            if (op2 === "4") {
                alert("Los selaquimorfos o selacimorfos son un superorden de condrictios conocidos comúnmente con el nombre de tiburones o escualos. Algunos grandes escualos, como el tiburón blanco y el toro, son conocidos a veces con el nombre de jaquetones.");
            }

            if (op2 === "5") {
                alert("Las vacas son animales que producen lácteos y se encuentran en los siguientes países");
            }
        }
    }

    if (op === "2") {
        op2 = prompt("Seleccionaste Invertebrados, ahora selecciona uno de los siguientes animales para ver una breve descripcion :  \n 1 - Arañas \n 2 - Moscas \n 3 - Escorpiones \n 4 - Hormigas \n 5 - Mariposas");
        if (op2 !== "1" && op2 !== "2" && op2 !== "3" && op2 !== "4" && op2 !== "5") {
            alert("Debe ser un número entre 1 y 5");
        } else {
            if (op2 === "1") {
                alert("Las arañas son el orden más numeroso de la clase Arachnida, lejanamente emparentadas con otros grupos de artrópodos, como los insectos, con los que no deben confundirse.");
            }

            if (op2 === "2") {
                alert("Mosca es el nombre común de diversas especies de insectos voladores pertenecientes al orden de los dípteros.");
            }

            if (op2 === "3") {
                alert("Scorpiones es un orden de artrópodos arácnidos depredadores conocidos comúnmente como escorpiones o alacranes");
            }

            if (op2 === "4") {
                alert("Las hormigas son una familia de insectos eusociales que, como las avispas y las abejas, pertenecen al orden de los himenópteros");
            }

            if (op2 === "5") {
                alert("Los lepidópteros son un orden de insectos holometábolos, casi siempre voladores, conocidos comúnmente como mariposas; las más conocidas son las mariposas diurnas, pero la mayoría de las especies son nocturnas y pasan muy inadvertidas");
            }
        }
    }

    if (op === "3") {
        op2 = prompt("Seleccionaste Herbívoros, ahora selecciona uno de los siguientes animales para ver una breve descripcion :  \n 1 - Caballo \n 2 - Oveja  \n 3 - Elefante \n 4 - Jirafa \n 5 - Cebra");

        if (op2 !== "1" && op2 !== "2" && op2 !== "3" && op2 !== "4" && op2 !== "5") {
            alert("Debe ser un número entre 1 y 5");
        } else {
            if (op2 === "1") {
                alert("El caballo ​​ es un mamífero perisodáctilo domesticado de la familia de los équidos. ");
            }

            if (op2 === "2") {
                alert("La oveja ​es un mamífero cuadrúpedo ungulado doméstico, usado como ganado. ");
            }

            if (op2 === "3") {
                alert("Los elefantes o elefántidos son una familia de mamíferos placentarios del orden Proboscidea");
            }

            if (op2 === "4") {
                alert("La jirafa es una especie de mamífero artiodáctilo de la familia Giraffidae propio de África. ");
            }

            if (op2 === "5") {
                alert("Se conocen como cebra​ a tres especies del género Equus propias de África —Equus quagga, ​ Equus zebra ​ y Equus grevyi ​— cuya característica más distintiva es su coloración a base de rayas blancas sobre un fondo negro ");
            }
        }
    }

    if (op === "4") {
        op2 = prompt("Seleccionaste Carnívoros, ahora selecciona uno de los siguientes animales para ver una breve descripcion :  \n 1 - Cocodrilo \n 2 - León \n 3 - Coyote \n 4 - Águila \n 5 - Serpiente");

        if (op2 !== "1" && op2 !== "2" && op2 !== "3" && op2 !== "4" && op2 !== "5") {
            alert("Debe ser un número entre 1 y 5");
        } else {
            if (op2 === "1") {
                alert("Crocodylidae es una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales.​ ");
            }

            if (op2 === "2") {
                alert("El león es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera.");
            }

            if (op2 === "3") {
                alert("El coyote es una especie de mamífero carnívoro de la familia Canidae.");
            }

            if (op2 === "4") {
                alert("Águila es el nombre dado a las aves de presa, del orden de Accipitriformes");
            }

            if (op2 === "5") {
                alert("Las serpientes u ofidios son un suborden de saurópsidos diápsidos pertenecientes al orden Squamata, del superorden Lepidosauria, caracterizado por la ausencia de patas ​ y el cuerpo muy alargado. ");
            }
        }
    }
}