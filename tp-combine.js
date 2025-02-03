// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    let liste_employees = getEmployees();
    let test = liste_employees.filter((element) => element.name.endsWith('e'));
    return test;
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    let liste_employees = getEmployees();
    let test2 = liste_employees.find((element) => element.age < 30);
    return test2;
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    let liste_employees = getEmployees();
    let test3 = liste_employees.findIndex((element) => element.name === 'Jeremy');
    return test3;
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    let liste_employees = getEmployees();
    let test4 = liste_employees.sort((a, b) => a.age - b.age);
    return test4;
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    let liste_employees = getEmployees();
    liste_employees.push({ name: "Kasimu", age: 38 });
    return liste_employees;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    let liste_employees = getEmployees();
    return liste_employees.length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    let liste_employees = getEmployees();
    let test5 = liste_employees.map((element) => {
      if (element.name === "Theo") {
        element.name = element.name.replace('o', 'a');
      }
      return element;
    });
    return test5;
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    let liste_employees = getEmployees();
    let test6 = liste_employees.filter((element) => element.name.includes('e'));
    return test6;
  },
};