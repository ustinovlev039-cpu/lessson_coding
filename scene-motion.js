// Each mission has its own route, set piece and payoff. Coordinates are relative to
// the available scene width, so the same animation also works on narrow screens.
export const scenes = [
  {name:'Первые шаги',prop:'▣',payoff:'СИГНАЛ ПОЛУЧЕН',path:[[0,0,0,0],[.22,.16,0,-7],[.42,.34,-3,8],[.65,.60,0,-6],[.82,.78,-4,7],[1,1,0,0]]},
  {name:'Прыжок к экрану',prop:'✦',payoff:'PYTHON-90',path:[[0,0,0,0],[.18,.15,0,-8],[.36,.32,-48,-14],[.55,.50,-58,8],[.7,.68,0,12],[.85,.83,-24,-8],[1,1,0,0]]},
  {name:'Восемь шагов',prop:'8',payoff:'8 МОДУЛЕЙ',path:[[0,0,0,0],[.16,.14,-9,-5],[.33,.30,0,5],[.5,.47,-9,-5],[.67,.63,0,5],[.84,.81,-9,-5],[1,1,0,0]]},
  {name:'Двойной прыжок',prop:'+',payoff:'12 + 5 = 17',path:[[0,0,0,0],[.16,.12,-43,-12],[.32,.31,0,8],[.48,.48,-53,-13],[.67,.68,0,11],[.82,.83,-19,-6],[1,1,0,0]]},
  {name:'Тайный проход',prop:'◈',payoff:'ПИЛОТ НАЙДЕН',path:[[0,0,0,0],[.2,.17,0,-13],[.38,.33,0,9],[.55,.49,0,-13],[.72,.68,-6,8],[.88,.85,-24,-17],[1,1,0,0]]},
  {name:'Рывок за энергией',prop:'⚡',payoff:'ЭНЕРГИЯ 42',path:[[0,0,0,0],[.12,.08,-6,-18],[.3,.31,0,16],[.48,.51,-8,-18],[.7,.77,0,15],[.84,.88,-10,-12],[1,1,0,0]]},
  {name:'Зарядный прыжок',prop:'✚',payoff:'+15 ЭНЕРГИИ',path:[[0,0,0,0],[.16,.13,-27,-8],[.3,.28,-65,0],[.48,.44,-27,9],[.63,.59,0,0],[.78,.78,-35,-8],[1,1,0,0]]},
  {name:'Зигзаг букв',prop:'ПИ + ТОН',payoff:'ПИТОН',path:[[0,0,0,0],[.17,.18,-28,-10],[.33,.34,12,11],[.5,.52,-31,-11],[.67,.68,14,10],[.83,.84,-24,-8],[1,1,0,0]]},
  {name:'Шлюз открыт',prop:'7',payoff:'ДОСТУП ОТКРЫТ',path:[[0,0,0,0],[.25,.19,0,-5],[.47,.36,-70,-17],[.68,.67,-64,10],[.83,.84,-10,8],[1,1,0,0]]},
  {name:'Обходной путь',prop:'×',payoff:'НАЙДЕН ОБХОД',path:[[0,0,0,0],[.18,.22,0,-8],[.35,.34,0,12],[.5,.18,-30,-12],[.7,.60,-51,-10],[.85,.82,-15,7],[1,1,0,0]]},
  {name:'Прыжок батареи',prop:'▰',payoff:'ЗАРЯДА ХВАТИТ',path:[[0,0,0,0],[.15,.13,-10,-15],[.36,.30,-85,-10],[.57,.52,-90,10],[.78,.80,-32,14],[1,1,0,0]]},
  {name:'Два датчика',prop:'● ●',payoff:'ОБА АКТИВНЫ',path:[[0,0,0,0],[.18,.15,-37,-12],[.35,.33,0,10],[.52,.50,-40,-12],[.7,.68,0,10],[.86,.84,-28,-7],[1,1,0,0]]},
  {name:'Три импульса',prop:'✴',payoff:'ПИК · ПИК · ПИК',path:[[0,0,0,0],[.16,.17,-45,-9],[.33,.33,0,9],[.50,.50,-45,-9],[.67,.67,0,9],[.84,.84,-45,-9],[1,1,0,0]]},
  {name:'По секторам',prop:'1 2 3',payoff:'СЕКТОРЫ ПРОВЕРЕНЫ',path:[[0,0,0,0],[.16,.30,0,-7],[.30,.30,0,0],[.46,.61,0,-7],[.6,.61,0,0],[.77,.88,0,-7],[1,1,0,0]]},
  {name:'Ракетный старт',prop:'3 2 1',payoff:'ПУСК!',path:[[0,0,0,0],[.22,.06,12,0],[.42,.10,16,0],[.6,.18,-78,-16],[.78,.72,-105,10],[1,1,0,0]]},
  {name:'Сбор деталей',prop:'◆ ◆ ◆',payoff:'СОБРАНО 10',path:[[0,0,0,0],[.16,.16,-26,-17],[.32,.31,0,12],[.48,.48,-33,-17],[.65,.65,0,12],[.82,.83,-40,-17],[1,1,0,0]]},
  {name:'Новая команда',prop:'def',payoff:'КОМАНДА СОЗДАНА',path:[[0,0,0,0],[.18,.13,-17,-18],[.38,.32,-43,-75],[.58,.57,-19,-265],[.78,.80,0,-360],[1,1,0,-360]]},
  {name:'Приветствие Ады',prop:'АДА',payoff:'ПРИВЕТ, АДА!',path:[[0,0,0,0],[.2,.19,0,-10],[.4,.39,-15,10],[.56,.55,-15,-15],[.71,.68,-30,13],[.86,.82,-23,-16],[1,1,0,0]]},
  {name:'Двойное ускорение',prop:'× 2',payoff:'СИГНАЛ УДВОЕН',path:[[0,0,0,0],[.18,.12,-48,-15],[.34,.30,0,10],[.48,.46,-70,-20],[.65,.70,-46,16],[.82,.88,-18,6],[1,1,0,0]]},
  {name:'Финальный маршрут',prop:'★',payoff:'МИССИЯ ВЫПОЛНЕНА!',path:[[0,0,0,0],[.12,.12,-35,-15],[.28,.28,0,13],[.43,.47,-68,-140],[.58,.60,-60,-310],[.72,.71,0,-360],[.86,.87,-28,-375],[1,1,0,-360]]}
];

let avatarAnimation;
let effectAnimation;
export function stopScene() {
  avatarAnimation?.cancel();
  effectAnimation?.cancel();
  avatarAnimation = effectAnimation = undefined;
  const stage = document.getElementById('scene');
  stage.classList.remove('animating');
  document.getElementById('sceneEffect').classList.remove('visible');
}

export function setupScene(index, done) {
  stopScene();
  const scene = scenes[index];
  const stage = document.getElementById('scene');
  stage.classList.toggle('won', done);
  stage.dataset.chapter = String(Math.floor(index / 4));
  document.getElementById('sceneProp').textContent = scene.prop;
  document.getElementById('sceneEffect').textContent = scene.payoff;
  document.getElementById('sectorLabel').textContent = `SECTOR_${String(index + 1).padStart(2, '0')}`;
  document.getElementById('replayBtn').hidden = !done;
}

export function playScene(index) {
  const scene = scenes[index];
  if (!scene) return;
  stopScene();
  const stage = document.getElementById('scene');
  const avatar = document.getElementById('avatar');
  const effect = document.getElementById('sceneEffect');
  const replay = document.getElementById('replayBtn');
  stage.classList.add('won', 'animating');
  replay.hidden = false;
  document.getElementById('sceneCaption').textContent = scene.name.toUpperCase();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    stage.classList.remove('animating');
    effect.classList.add('visible');
    document.getElementById('sceneCaption').textContent = 'МИССИЯ ВЫПОЛНЕНА';
    return;
  }
  const distance = stage.clientWidth * .47;
  const frames = scene.path.map(([offset, x, y, rotate]) => ({
    offset,
    transform: `translate(${Math.round(distance * x)}px, ${y}px) rotate(${rotate}deg)`
  }));
  avatarAnimation = avatar.animate(frames, {duration: 3300, easing: 'ease-in-out', fill: 'forwards'});
  effectAnimation = effect.animate([
    {opacity: 0, transform:'translate(-50%, 14px) scale(.5)', offset:0},
    {opacity: 0, transform:'translate(-50%, 14px) scale(.5)', offset:.63},
    {opacity: 1, transform:'translate(-50%, -16px) scale(1.15)', offset:.82},
    {opacity: 1, transform:'translate(-50%, -12px) scale(1)', offset:1}
  ], {duration:3300, easing:'ease-out', fill:'forwards'});
  avatarAnimation.onfinish = () => {
    avatarAnimation?.cancel();
    avatarAnimation = undefined;
    stage.classList.remove('animating');
    effect.classList.add('visible');
    document.getElementById('sceneCaption').textContent = 'МИССИЯ ВЫПОЛНЕНА';
  };
}
