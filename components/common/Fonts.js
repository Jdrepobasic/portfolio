const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';

  const link2 =  document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);
  document.head.appendChild(link2);

  const roboto = new FontFaceObserver('Roboto');
  const monsterratSubrayada = new FontFaceObserver('Montserrat Subrayada');

  roboto.load().then(() => {
    document.documentElement.classList.add('roboto');
  })

  monsterratSubrayada.load().then(() => {
    document.documentElement.classList.add('monsterratSubrayada');
  })
}

export default Fonts
