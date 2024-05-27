// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';
// Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."
const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};
console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Mis hobbies son ${user.hobbies[0]}, ${user.hobbies[1]} y ${user.hobbies[2]}. Tengo un ${user.pets[0].type} llamado ${user.pets[0].name} y un ${user.pets[1].type} llamado ${user.pets[1].name}. Vivo en la calle ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}, ${user.address.country}. Mi número de teléfono es ${user.phone} y mi email ${user.email}. Soy ${user.occupation} e hice un ${user.education}`
);
console.log('');

// Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.
const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};
for (let i = 0; i < data.numbers.length; i++) {
  data.firstFloor.secondFloor.numbersPlus2.push(data.numbers[i] + 2);

  data.firstFloor.thirdFloor.numbersDouble.push(data.numbers[i] * 2);

  data.fourthFloor.numbersDividedBy2.push(data.numbers[i] / 2);

  if (data.numbers[i] % 2 === 0) {
    data.fifthFloor.onlyEven.push(data.numbers[i]);
  } else {
    data.fifthFloor.onlyOdd.push(data.numbers[i]);
  }
}
console.log(data.firstFloor.secondFloor.numbersPlus2);
console.log(data.firstFloor.thirdFloor.numbersDouble);
console.log(data.fourthFloor.numbersDividedBy2);
console.log(data.fifthFloor.onlyEven);
console.log(data.fifthFloor.onlyOdd);
console.log('');

// Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};
const isVowel = letter => {
  const regex = /^[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]$/;
  return regex.test(letter);
};

const getAsciiCode = letter => {
  return letter.charCodeAt(0);
};

const fillObject = frase => {
  let word = '';

  for (const letter of frase) {
    if (isVowel(letter) && letter != ' ') {
      data2.firstFloor.vowels.push(letter);
    } else if (letter != ' ') {
      data2.secondFloor.consonants.push(letter);
    }

    data2.fourthFloor.asciiCode.push(getAsciiCode(letter));

    if (letter === ' ') {
      word = substring;
    }
  }
};

fillObject('Si no estudias acabarás como Victor');

console.log(data2.firstFloor.vowels);
console.log(data2.secondFloor.consonants);
console.log(data2.fourthFloor.asciiCode);
