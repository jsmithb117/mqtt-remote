type Topics = {
  [key: string]: string;
  power: string;
  channelUp: string;
  channelDown: string;
  volumeUp: string;
  volumeDown: string;
  mute: string;
  sleep: string;
  input: string;
  decimal: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
  zero: string;
  enter: string;
  previousChannel: string;
  null: string;
};

export const topics: Topics = {
  power: "home/living/entertainment/tv/controller/PWR",
  channelUp: "home/living/entertainment/tv/controller/CH_PLUS",
  channelDown: "home/living/entertainment/tv/controller/CH_MINUS",
  volumeUp: "home/living/entertainment/tv/controller/V_PLUS",
  volumeDown: "home/living/entertainment/tv/controller/V_MINUS",
  mute: "home/living/entertainment/tv/controller/MUTE",
  sleep: "home/living/entertainment/tv/controller/SLP",
  input: "home/living/entertainment/tv/controller/INPUT",
  decimal: "home/living/entertainment/tv/controller/DEC",
  one: "home/living/entertainment/tv/controller/ONE",
  two: "home/living/entertainment/tv/controller/TWO",
  three: "home/living/entertainment/tv/controller/THREE",
  four: "home/living/entertainment/tv/controller/FOUR",
  five: "home/living/entertainment/tv/controller/FIVE",
  six: "home/living/entertainment/tv/controller/SIX",
  seven: "home/living/entertainment/tv/controller/SEVEN",
  eight: "home/living/entertainment/tv/controller/EIGHT",
  nine: "home/living/entertainment/tv/controller/NINE",
  zero: "home/living/entertainment/tv/controller/ZERO",
  enter: "home/living/entertainment/tv/controller/ENTER",
  previousChannel: "home/living/entertainment/tv/controller/PREV_CH",
  null: "null",
};


export const controllerLoggedInTopic = 'home/living/entertainment/tv/controller/logged-in/boolean';
