let option = prompt(
    "Witaj, podróżniku! Czego potrzebujesz?\nNocleg - wpisz 1\nGorzała - wpisz 2");

if (option === "" || option === null) {
    alert("Bywaj!");
} else if (option === "1") {
    if (confirm("To będzie 1 sztuka srebra za noc.")) {
        alert("Pokój na piętrze po lewej, to Twój klucz.");
    } else {
        alert("W porządku, może następnym razem.");
    }
} else if (option === "2") {
    let age = prompt("...\n\nA ile wiosen liczysz?");
    if (age === "" || age === null || isNaN(age)) {
        console.log(age);
        console.log(typeof(age));
        alert("Trudno. Do następnego razu!");
    } else if (age < 18) {
        alert("Nie podajemy alkoholu młodocianym. Zmykaj!");
    } else if (age > 100) {
        alert("Masz, dziadku, zdrowie...");
    } else {
        alert("Przepraszam, młodo wyglądacie. Na zdrowie!");
    }
} else {
    alert("Nie oferujemy takiej usługi...");
}

