class FourndyFilters {
  constructor() {
    this.filterList = [
      'stupid', 'dumb', 'idiot', 'hate', 'moron', 'fool', 'jerk', 
      'dummy', 'loser', 'ignorant', 'pig', 'scumbag', 'lame', 
      'useless', 'retarded', 'asshole', 'bitch', 'crap', 'suck', 
      'shit', 'bastard', 'dick', 'twat', 'prick', 'douchebag', 
      'fuck', 'cunt', 'bastards', 'whore', 'slut', 'ass', 'bastard', 
      'wanker', 'chode', 'cock', 'pussy', 'bitchass', 'douche', 
      'piss', 'scum', 'shut up', 'crybaby', 'turd', 'faggot', 'retard', 
      'nigger', 'chink', 'spic', 'wetback', 'kraut', 'gook', 'raghead', 
      'kike', 'nazi', 'redneck', 'beaner', 'tramp', 'slimeball', 
      'bitchy', 'hypocrite', 'asshat', 'cockroach', 'shithead', 'dipshit',
      'fuckhead', 'twathead', 'shithole', 'douchecanoe', 'turdface', 
      'jerkface', 'asswipe', 'ballbag', 'fucktard', 'whoremonger', 'prickface', 
      'dickhead', 'slutty', 'cockblock', 'skank', 'prickish', 'shitstain', 
      'douchebaggy', 'retardation', 'cumdumpster', 'manwhore', 'bitchface', 
      'assclown', 'smeghead', 'cocksucker', 'shitbrick', 'fuckwit', 'moronic', 
      'turdbrain', 'skankhole', 'whorebag', 'assmunch', 'buttfuck', 'cumwhore', 
      'dickwad', 'testiclehead', 'freaking', 'jackass', 'wanksta', 'cuntface', 
      'ballsucker', 'turdlicker', 'twatsucker', 'fuckface', 'bootlicker', 
      'motherfucker', 'cocksniffer', 'assfuck', 'cocklicker', 'shitlicker', 
      'shitwhore', 'jizzrag', 'cockwomble', 'fartknocker', 'shithappens', 
      'knobhead', 'flaps', 'shag', 'buttplug', 'bootyhole', 'skumbag', 'dickhead', 
      'cuntlord', 'wank', 'muncher', 'spunk', 'turdburger', 'bongwater', 
      'assbiscuit', 'twinkie', 'blowjob', 'fap', 'dicknose', 'shithead',
      'beat', 'kill', 'rape', 'fuck', 'stab', 'destroy', 'smash', 
      'hurt', 'abuse', 'bully', 'torture', 'maim', 'slaughter', 'murder', 
      'beat up', 'attack', 'molest', 'slap', 'punch', 'choke', 'piss on', 
      'stalk', 'scare', 'insult', 'harass', 'defile', 'humiliate', 'punish', 
      'disgrace', 'demoralize', 'demean', 'mock', 'tease', 'abandon', 
      'neglect', 'annoy', 'exploit', 'destroy', 'violence', 'abduct', '2g1c', '2 girls 1 cup', 'acrotomophilia', 
      'alabama hot pocket', 'alaskan pipeline', 'anal', 'anilingus', 'anus', 
      'apeshit', 'arsehole', 'ass', 'asshole', 'assmunch', 'auto erotic', 'autoerotic', 
      'babeland', 'baby batter', 'baby juice', 'ball gag', 'ball gravy', 'ball kicking', 
      'ball licking', 'ball sack', 'ball sucking', 'bangbros', 'bangbus', 'bareback', 
      'barely legal', 'barenaked', 'bastard', 'bastardo', 'bastinado', 'bbw', 'bdsm', 
      'beaner', 'beaners', 'beaver cleaver', 'beaver lips', 'bestiality', 'bestiality', 
      'big black', 'big breasts', 'big knockers', 'big tits', 'bimbos', 'birdlock', 
      'bitch', 'bitches', 'black cock', 'blonde action', 'blonde on blonde action', 'blowjob', 
      'blow job', 'blow your load', 'blue waffle', 'blumpkin', 'bollocks', 'bondage', 'boner', 
      'boob', 'boobs', 'booty call', 'brown showers', 'brunette action', 'bukkake', 'bulldyke', 
      'bullet vibe', 'bullshit', 'bung hole', 'bunghole', 'busty', 'butt', 'buttcheeks', 'butthole', 
      'camel toe', 'camgirl', 'camslut', 'camwhore', 'carpet muncher', 'carpetmuncher', 
      'chocolate rosebuds', 'cialis', 'circlejerk', 'cleveland steamer', 'clit', 'clitoris', 
      'clover clamps', 'clusterfuck', 'cock', 'cocks', 'coprolagnia', 'coprophilia', 
      'cornhole', 'coon', 'coons', 'creampie', 'cum', 'cumming', 'cumshot', 'cumshots', 
      'cunnilingus', 'cunt', 'darkie', 'date rape', 'daterape', 'deep throat', 'deepthroat', 
      'dendrophilia', 'dick', 'dildo', 'dingleberry', 'dingleberries', 'dirty pillows', 
      'dirty sanchez', 'doggie style', 'doggiestyle', 'doggy style', 'doggystyle', 'dog style', 
      'dolcett', 'domination', 'dominatrix', 'dommes', 'donkey punch', 'double dong', 
      'double penetration', 'dp action', 'dry hump', 'dvda', 'eat my ass', 'ecchi', 
      'ejaculation', 'erotic', 'erotism', 'escort', 'eunuch', 'fag', 'faggot', 'fecal', 
      'felch', 'fellatio', 'feltch', 'female squirting', 'femdom', 'figging', 'fingerbang', 
      'fingering', 'fisting', 'foot fetish', 'footjob', 'frotting', 'fuck', 'fuck buttons', 
      'fuckin', 'fucking', 'fucktards', 'fudge packer', 'fudgepacker', 'futanari', 'gangbang', 
      'gang bang', 'gay sex', 'genitals', 'giant cock', 'girl on', 'girl on top', 
      'girls gone wild', 'goatcx', 'goatse', 'god damn', 'gokkun', 'golden shower', 
      'goodpoop', 'goo girl', 'goregasm', 'grope', 'group sex', 'g-spot', 'guro', 
      'hand job', 'handjob', 'hard core', 'hardcore', 'hentai', 'homoerotic', 'honkey', 
      'hooker', 'horny', 'hot carl', 'hot chick', 'how to kill', 'how to murder', 
      'huge fat', 'humping', 'incest', 'intercourse', 'jack off', 'jail bait', 
      'jailbait', 'jelly donut', 'jerk off', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jizz', 
      'juggs', 'kike', 'kinbaku', 'kinkster', 'kinky', 'knobbing', 'leather restraint', 
      'leather straight jacket', 'lemon party', 'livesex', 'lolita', 'lovemaking', 
      'make me come', 'male squirting', 'masturbate', 'masturbating', 'masturbation', 
      'menage a trois', 'milf', 'missionary position', 'mong', 'motherfucker', 'mound of venus', 
      'mr hands', 'muff diver', 'muffdiving', 'nambla', 'nawashi', 'negro', 'neonazi', 
      'nigga', 'nigger', 'nig nog', 'nimphomania', 'nipple', 'nipples', 'nsfw', 'nsfw images', 
      'nude', 'nudity', 'nutten', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 
      'one cup two girls', 'one guy one jar', 'orgasm', 'orgy', 'paedophile', 'paki', 
      'panties', 'panty', 'pedobear', 'pedophile', 'pegging', 'penis', 'phone sex', 
      'piece of shit', 'pikey', 'pissing', 'piss pig', 'pisspig', 'playboy', 'pleasure chest', 
      'pole smoker', 'ponyplay', 'poof', 'poon', 'poontang', 'punany', 'poop chute', 
      'poopchute', 'porn', 'porno', 'pornography', 'prince albert piercing', 'pthc', 'pubes', 
      'pussy', 'queaf', 'queef', 'quim', 'raghead', 'raging boner', 'rape', 'raping', 
      'rapist', 'rectum', 'reverse cowgirl', 'rimjob', 'rimming', 'rosy palm', 
      'rosy palm and her 5 sisters', 'rusty trombone', 'sadism', 'santorum', 'scat', 
      'schlong', 'scissoring', 'semen', 'sex', 'sexcam', 'sexo', 'sexy', 'sexual', 
      'sexually', 'sexuality', 'shaved beaver', 'shaved pussy', 'shemale', 'shibari', 
      'shit', 'shitblimp', 'shitty', 'shota', 'shrimping', 'skeet', 'slanteye', 'slut', 
      's&m', 'smut', 'snatch', 'snowballing', 'sodomize', 'sodomy', 'spastic', 'spic', 
      'splooge', 'splooge moose', 'spooge', 'spread legs', 'spunk', 'strap on', 
      'strapon', 'strappado', 'strip club', 'style doggy', 'suck', 'sucks', 'suicide girls', 
      'sultry women', 'swastika', 'swinger', 'tainted love', 'taste my', 'tea bagging', 
      'threesome', 'throating', 'thumbzilla', 'tied up', 'tight white', 'tit', 'tits', 
      'titties', 'titty', 'tongue in a', 'topless', 'tosser', 'towelhead', 'tranny', 
      'tribadism', 'tub girl', 'tubgirl', 'tushy', 'twat', 'twink', 'twink'
    ];
  }

  getInfo() {
    return {
      id: '4ndyFilters',
      name: '4ndy Filters',
      blocks: [
        {
          opcode: 'filterMessage',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Filter message [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, you are stupid'
            }
          }
        }
      ]
    };
  }

  filterMessage(args) {
    const message = args.MESSAGE;
    const regex = new RegExp(`\\b(${this.filterList.join('|')})\\b`, 'gi');
    return message.replace(regex, '****');
  }
}

Scratch.extensions.register(new FourndyFilters());
