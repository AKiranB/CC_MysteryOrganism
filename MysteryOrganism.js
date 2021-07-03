// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//factory that creates objects  
function pAequorFactory(specNum, dna) {

  return {
    specNum,
    dna,

    //method that changes a random base to a new random base

    mutate: function () {
      //randomly select a BASE in this.obj's dna

      const index = Math.floor(Math.random() * this.dna.length); // here we create a random base index
      let newBase = returnRandBase(); //here we generate a random ase
      while (this.dna[index] === newBase) { //as long as the randomIndex of this.dna is equal to the newRandom generated base
        newBase = returnRandBase(); //continue to generate random base (saves a bunch of for/else/switch logic)
      }
      this.dna[index] = newBase
      return this.dna;
    },
    compareDNA: function (diffOrganism) {
      let sameDna = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === diffOrganism.dna[i]) {
          sameDna++
        }
      }
      let dnaPerc = sameDna / 15 * 100
      return `specimin 1 amd specimin 2 have ${dnaPerc}% DNA in common`
    },
    willLikelySurvive: function () {
      let survivalCount = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivalCount++
          console.log(`SurvivalCount ${i}`)
        }
      }
      if (survivalCount / this.dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
    complimentaryStrand: function () {
      let strand2 = []
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'G') {
          strand2.push('C');
        } else if (this.dna[i] === ' C') {
          strand2.push('G');
        } else if (this.dna[i] === 'A') {
          strand2.push('T');
        } else {
          strand2.push('A')
        }
      } return strand2

    }

  }
};

const organismsArr = []
while (organismsArr.length < 30) {
  let iCounter = 1
  let newOrganism = pAequorFactory(iCounter, mockUpStrand());
  if (newOrganism.willLikelySurvive() === true) {
    organismsArr.push(newOrganism);
  }
  iCounter++
};



const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());

console.log(organism1);
console.log(organism1.compareDNA(organism2));
console.log(organism1.willLikelySurvive());
console.log(organism1.complimentaryStrand());
// console.log(organismsArr)

// console.log(organism2);
// console.log(factObj);

// console.log(returnRandBase());
// console.log(mockUpStrand())





