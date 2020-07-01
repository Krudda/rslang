import speakit from '../pages/speakit/speakit.app';
import audiocall from '../pages/audiocall/audiocall.app';
import englishPuzzle from '../pages/english-puzzle/english-puzzle.app';
import ourgame from '../pages/ourgame/ourgame.app';
import savanna from '../pages/savanna/savanna.app';
import sprint from '../pages/sprint/sprint.app';
import helper from '../pages/audiocall/common/audiocall.helper';
import startScreenComponent from '../pages/audiocall/components/start-screen';
import startScreenOurGameComponent from '../pages/ourgame/components/start-screen';

const controller = {
  callAction: (url) => {
    switch (url) {
      case '/':
        controller.actionMain();
        break;
      case 'puzzle':
        controller.actionPuzzle();
        break;
      case 'speakit':
        controller.actionSpeakIt();
        break;
      case 'audiocall':
        controller.actionAudioCall();
        break;
      case 'ourgame':
        controller.actionOurGame();
        break;
      case 'savanna':
        controller.actionSavanna();
        break;
      case 'sprint':
        controller.actionSprint();
        break;
      default:
        break;
    }
  },

  actionMain: () => {
    main.sayHello();
  },
  actionPuzzle: () => {
    englishPuzzle.sayHello();
  },
  actionSpeakIt: () => {
    speakit.sayHello();
  },
  actionAudioCall() {
    helper.render('#root', startScreenComponent());
    audiocall.init();
  },
  actionOurGame() {
    helper.render('#root', startScreenOurGameComponent());
    ourgame.init();
  },
  actionSavanna() {
    savanna.sayHello();
  },
  actionSprint() {
    document.getElementById('root').classList.add('bg');
    sprint.init();
  },

  sayHello(text) {
    const hello = document.createElement('h1');
    hello.textContent = text;
    document.querySelector('body').append(hello);
  },
};

export default controller;
