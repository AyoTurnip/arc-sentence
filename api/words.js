export default function handler(req, res) {
  const words = ['$(channel)', 'minato aqua', 'cat', 'dog', 'calibrate', 'extreme', 'easy', 'hard', 'insane', 'demon', 'normal', 'kyouki', 'haunted ship', 'robtop', 'die', 'love', 'kill', 'yourself', 'rngdle', 'fuck', 'bitch', 'moron', 'idiot', 'stupid', 'dumb', '$(sender)', '$(channel.game)', '$(channel.uptime)', '$(random.chatter)', '$(quote)', '$(game)', '$(channel.followers)', '$(channel.chatters)', '$(channel.subs)', '$(channel.title)', '$(random.0-100)', '$(random.0-1000)', 'tokoyami towa', 'command', 'help', 'ship', 'wave', 'cube', 'spider', 'ball', 'swing', 'ufo', 'penis', 'jerk', 'masturbate', 'vagina', 'pussy', 'eater', 'collab', 'level', 'hardest', 'geometry', 'dash', 'jump', 'click', 'cbf', 'frame perfect', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'grief', 'heliopolis', 'tidal wave', 'vehemence', 'angelicide', 'aeternus', 'thinking space ii', 'ts2', 'amethyst', 'flamewall', 'i', 'can', 'cant', 'want', 'how', 'what', 'when', 'where', 'live', 'stream', 'twitch', 'youtube', 'steam', 'furry', 'vtuber', 'hololive', 'goon', 'gooning', 'song', 'music', 'name', 'computer', 'wooting', 'keyboard', 'monitor', '60 hz', '144 hz', '240 hz', '360 hz', 'frame', 'pixel', 'perfect', 'editor', 'doggie', 'zoink', 'wpopoff', 'trick', 'pedophile', 'groomer', 'diddy', 'israeli', 'shot', 'my', 'us', 'me', 'our', 'larp', 'ai', 'drop', 'rate', 'epic', 'feature', 'legendary', 'mythic', 'icon', 'robtop', 'viprin', 'pauze', 'suck', 'dick', 'lmao', 'lol', 'gg', 'ez', 'fucking', 'frick', 'freaking', 'freak', 'fricking', 'testicles', 'W', 'L', 'go', 'GO', 'predict', 'attempt', 'you', 'all', 'chat', 'follow', 'sub', 'subscribe', 'gift', 'gifted', 'to', 'from', 'a', 'by', 'before', 'after', 'then', 'than', 'whore', 'instead', 'or', 'either', 'rather', 'the', 'sorry', 'run', 'portal', 'orb', 'red', 'yellow', 'orange', 'green', 'cyan', 'blue', 'pink', 'purple', 'black', 'shit', 'poop', 'pee', 'piss', 'sleep', 'shower', 'wash', 'walk', 'word', 'really', 'wanna', 'gonna', 'get', 'gotta', 'light', 'is', 'it', 'gd', 'list', 'pointercrate', 'aredl', 'global list', 'mic', 'muted', 'holy', 'god', 'jesus', 'free', 'hitler', 'stalin', 'america', 'united states', 'trump', 'kirk', 'charlie', 'bomb', 'shoot', 'stab', 'shot', 'blow', 'blew', 'japan', 'canada', 'uk', 'united kingdom', 'africa', 'china', 'chinese', 'culture', 'anime', 'twitter', 'x', 'elon musk', 'billionare', 'money', 'drama', 'controversy', 'cancelled', 'exposed', 'outed', 'draw', 'drew', 'died', 'among us', 'sussy', 'sus', 'baka', 'tuff', 'aura', 'farm', 'brainrot', 'tung', 'tung tung tung sahur', 'sahur', 'solo', '100%', 'complete', 'fall', 'of', 'off', 'on', 'game', 'school', 'taxes', 'mrbeast', 'hack', 'noclip', 'hitbox', 'block', 'speedhack', 'alert', 'mod', 'moderator', 'rate advisor', 'party', 'epstein', 'absolute', 'cinema', 'slope', 'physics', 'good', 'bad', 'evil', 'gravity', 'verity', 'cruelty', 'lovity', 'falsity', 'minecraft', 'send', 'star', 'moon', 'moons', 'cp', 'creator', 'point', 'leaderboard', 'top', 'this', 'that', 'deez', 'nut', 'mouth', 'chest', 'boob', 'tits', 'tiddies', 'breast', 'butt', 'ass', 'bum', 'booty', 'cheek', 'finger', 'hand', 'toe', 'feet', 'foot', 'inch', 'mile', 'kilometer', 'hair', 'bald', 'practice', 'thing', 'stuff', 'n word', 'aside', 'joke', 'prank', 'moment', 'bro', 'girl', 'son', 'boobie', 'went', 'new', 'day', 'old', 'young', 'today', 'next', 'last', 'first', 'yesterday', 'week', 'month', 'year', 'decade', 'wordle', 'failed', 'reddit', 'discord', 'man', 'men', 'boy', 'girl', 'gay', 'homosexual', 'pride', 'lesbian', 'transgender', 'trans', 'queer', 'bisexual', 'sexual', 'sex', 'affair', 'intercourse', 'pirate', 'coin', 'miss', 'back', 'right', 'left', 'up', 'down', 'wrong', 'back', 'front', 'hanging', 'john', 'paul', 'jerome', 'chungus', 'big', 'huge', 'small', 'tiny', 'hawk', 'tuah', 'chud', 'nullscapes', 'fat', 'skinny', 'belly', 'rub', 'challenge', 'placement', 'placed', 'accepted', 'record', 'world', 'speedrun', 'ripped', 'slipped', 'mcdonalds', 'burger', 'king', 'wendys', 'walmart', 'target', 'costco', 'gang', 'friend', 'buddy', 'pal', 'folk', 'bruh', 'impossible', 'bricked', 'bed', 'crib', 'oomf', 'will', 'wont', 'probably', 'arigato', 'sugoi', 'konnichiwa', 'hello', 'hi', 'yo', 'sup', 'here', 'there', 'every', 'any', 'pronoun', 'liberal', 'conservative', 'wing', 'abortion', 'anti', 'pro', 'noob', 'burger', 'meat', 'crack', 'meth', 'high', 'alcohol', 'drunk', 'gpt', 'ai', 'racism', 'are', 'inside', 'outside', 'phonk', 'future', 'past', 'test', 'speed', 'show', 'desk', 'table', 'mouse', 'drink', 'eat', 'eater', 'lover', 'santa', 'christmas', 'boo', 'spooky', 'halloween', 'mom', 'dad', 'mama', 'papa', 'mommy', 'loser', 'hah', 'haha', 'hahaha', 'hahahaha', 'teehee', 'he', 'his', 'him', 'she', 'her', 'they', 'them', 'type', 'super', 'ultra', 'ultimate', 'mega', 'baby', 'short', 'tall', 'north', 'east', 'south', 'west', 'far', 'close', 'girlfriend', 'boyfriend', 'rock', 'paper', 'scissors', 'book', 'read', 'fast', 'slower', 'faster', 'ayo', 'boi', 'ericvanwilderman', 'wut', 'hentai', 'porn', 'bunny', 'fox', 'femboy', 'city', 'shitty', 'fucker', 'war', 'determination', 'verified', 'verify', 'beat', 'learning', 'hate', 'hater'];
  
  const count = Math.floor(Math.random() * 12) + 2;
  const result = [];
  
  for (let i = 0; i < count; i++) {
    let word = words[Math.floor(Math.random() * words.length)];

    // 50% chance to make plural
    if (Math.random() < 0.5) {
      if (word.toLowerCase().endsWith('s')) {
        word += 'es';
      } else {
        word += 's';
      }
    }

    // 50% chance to add possessive ('s)
    if (Math.random() < 0.5) {
      word += "'s";
    }

    // 50% chance to capitalize
    if (Math.random() < 0.5) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    result.push(word);
  }

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(result.join(' '));
}
