const userAlgorithm = [
  {
    title: 'inicio',
    menssages: [
      'Bienvenido a tu ayudante de diligenciamiento del formurario de seguro para  vivienda fiscal',
      'sin imprimir, ni complicarte, lo llenas todo desde aqui, recuerda responder a cada pregunta que se te hara pregunta que se te hará',
      'responde ok para continuar'
  ],
    validate: (confirmation) => confirmation.toLowerCase() === 'ok'
  },
  {
    title: 'nombre',
    menssages: [
      'Por favor escriba su nombre completo'
    ],
    validate: (nombre) => typeof(nombre) === 'string',
  },
  {
    title: 'cedula',
    menssages: [
      'Por favor digite su número de cédula'
    ],
    validate: (cedula) => !!cedula.match(/^[0-9]*$/),
  },
  {
    title: 'email',
    menssages: [
      'Por favor escriba su email'
    ],
    validate: (email) => !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  },
   {
    title: 'telSiniestro',
    menssages: [
      'Por favor digite un numero de celular al cual se le pueda contactar en caso de siniestro'
    ],
     validate: (telefono) => !!telefono.match(/^[0-9]*$/) && telefono.length > 7,
  },
  {
    title: 'telOtr',
    menssages: [
      'Por favor digite otro numero de celuar'
    ],
    validate: (telefono) => !!telefono.match(/^[0-9]*$/) && telefono.length > 7,
  },
  {
    title: 'vigenciaInicio',
    menssages: [
      'Por favor escriba la FECHA DE INICIO DE VIGENCIA con el formato que se muestra en el ',
      'ejemplo:     DD/MM/AAAA',
    ],
    validate: (fecha) => !!fecha.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
  },
  {
    title: 'vigenciaFinal',
    menssages: [
      'Por favor escriba la FECHA DE TEMNINACION DE VIGENCIA con el formato que se muestra en el ',
      'ejemplo:     DD/MM/AAAA',
    ],
    validate: (fecha) => !!fecha.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
  },
  {
    title: 'final',
  }
];
exports.userAlgorithm = userAlgorithm;
