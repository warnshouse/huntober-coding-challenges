export function filterSubmissions() {
  const submissions = "The Pawshank Redemption,Caturday Night Live,Only Mewor" +
                      "ders in the Building,I Love Mewcy, Mewsummer Meowders," +
                      "The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Sci" +
                      "ence Theater: Purrthousand, Amewican Idol,Dog City,Doc" +
                      "tor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogle" +
                      "y, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and" +
                      " Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The " +
                      "Catbert Purrport,The Pawffice,The Dogford Files, Battl" +
                      "estar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD M" +
                      "ew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder" +
                      " She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meow" +
                      "bender,The Pawnight Show,Arrested Dogvelopment,Furiend" +
                      "s,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Tu" +
                      "rtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next M" +
                      "ewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bon" +
                      "es, House of the Meowgon,The Purrlight Zone,Breaking B" +
                      "one,The Meowre,The Dogpranos,The Rings of Meower, The " +
                      "KIT Crowd,Strangepaw Things ,Catman: The Animeowted Se" +
                      "ries,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La C" +
                      "asa de Pawpel,Rick & Meowty,Amewican Purror Story, Mew" +
                      "cifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lass" +
                      "o,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Bark" +
                      "s and Recreation,How to Get Away with Meowder,Boneland" +
                      " ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghou" +
                      "se,Mewster Rogers' Neighborhood";

  const subsArray = submissions.split(',');
  const qualifyingSubs = [];

  for (let i = 0; i < subsArray.length; i++) {
    let sub = subsArray[i];

    if (sub !== sub.trim()) {
      continue;
    }

    if (sub.toLowerCase().includes("bark") ||
        sub.toLowerCase().includes("bone") ||
        sub.toLowerCase().includes("dog")) {
      continue;
    }

    if (sub.length % 5 === 0) {
      continue;
    }

    if ((sub.charCodeAt(0) + sub.charCodeAt(sub.length - 1)) % 2 === 0) {
      continue;
    }

    if (sub[Math.ceil(sub.length / 2)] === 'e') {
      continue;
    }

    if (sub.includes('S')) {
      continue;
    }

    let lowercaseCount = 0;
    let uppercaseCount = 0;

    for (let j = 0; j < sub.length; j++) {
      if (sub.charCodeAt(j) >= 97 && sub.charCodeAt(j) <= 122) {
        lowercaseCount++;
      }
      else if (sub.charCodeAt(j) >= 65 && sub.charCodeAt(j) <= 90) {
        uppercaseCount++;
      }
    }

    if (lowercaseCount % 2 || uppercaseCount < 2) {
      continue;
    }

    qualifyingSubs.push(sub);
  }

  return qualifyingSubs.length;
}
