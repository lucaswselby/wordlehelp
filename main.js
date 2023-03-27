const words = ["ABACK", "ABASE", "ABATE", "ABBEY", "ABBOT", "ABHOR", "ABIDE", "ABLED", "ABODE", "ABORT", "ABOUT", "ABOVE", "ABUSE", "ABYSS", "ACORN", "ACRID", "ACTOR", "ACUTE", "ADAGE", "ADAPT", "ADEPT", "ADMIN", "ADMIT", "ADOBE", "ADOPT", "ADORE", "ADORN", "ADULT", "AFFIX", "AFIRE", "AFOOT", "AFOUL", "AFTER", "AGAIN", "AGAPE", "AGATE", "AGENT", "AGILE", "AGING", "AGLOW", "AGONY", "AGORA", "AGREE", "AHEAD", "AIDER", "AISLE", "ALAMO", "ALARM", "ALBUM", "ALERT", "ALGAE", "ALIBI", "ALIEN", "ALIGN", "ALIKE", "ALIVE", "ALLAY", "ALLEY", "ALLOT", "ALLOW", "ALLOY", "ALOFT", "ALONE", "ALONG", "ALOOF", "ALOUD", "ALPHA", "ALTAR", "ALTER", "AMASS", "AMAZE", "AMBER", "AMBLE", "AMEND", "AMISS", "AMITY", "AMONG", "AMPLE", "AMPLY", "AMUSE", "ANGEL", "ANGER", "ANGLE", "ANGRY", "ANGST", "ANIME", "ANKLE", "ANNEX", "ANNOY", "ANNUL", "ANODE", "ANTIC", "ANVIL", "AORTA", "APART", "APHID", "APING", "APNEA", "APPLE", "APPLY", "APRON", "APTLY", "ARBOR", "ARDOR", "ARENA", "ARGUE", "ARISE", "ARMOR", "AROMA", "AROSE", "ARRAY", "ARROW", "ARSON", "ARTSY", "ASCOT", "ASHEN", "ASIDE", "ASKEW", "ASSAY", "ASSET", "ATOLL", "ATONE", "ATTIC", "AUDIO", "AUDIT", "AUGUR", "AUNTY", "AVAIL", "AVERT", "AVIAN", "AVOID", "AWAIT", "AWAKE", "AWARD", "AWARE", "AWASH", "AWFUL", "AWOKE", "AXIAL", "AXIOM", "AXION", "AZURE", "BACON", "BADGE", "BADLY", "BAGEL", "BAGGY", "BAKER", "BALER", "BALMY", "BANAL", "BANJO", "BARGE", "BARON", "BASAL", "BASIC", "BASIL", "BASIN", "BASIS", "BASTE", "BATCH", "BATHE", "BATON", "BATTY", "BAWDY", "BAYOU", "BEACH", "BEADY", "BEARD", "BEAST", "BEECH", "BEEFY", "BEFIT", "BEGAN", "BEGAT", "BEGET", "BEGIN", "BEGUN", "BEING", "BELCH", "BELIE", "BELLE", "BELLY", "BELOW", "BENCH", "BERET", "BERRY", "BERTH", "BESET", "BETEL", "BEVEL", "BEZEL", "BIBLE", "BICEP", "BIDDY", "BIGOT", "BILGE", "BILLY", "BINGE", "BINGO", "BIOME", "BIRCH", "BIRTH", "BISON", "BITTY", "BLACK", "BLADE", "BLAME", "BLAND", "BLANK", "BLARE", "BLAST", "BLAZE", "BLEAK", "BLEAT", "BLEED", "BLEEP", "BLEND", "BLESS", "BLIMP", "BLIND", "BLINK", "BLISS", "BLITZ", "BLOAT", "BLOCK", "BLOKE", "BLOND", "BLOOD", "BLOOM", "BLOWN", "BLUER", "BLUFF", "BLUNT", "BLURB", "BLURT", "BLUSH", "BOARD", "BOAST", "BOBBY", "BONEY", "BONGO", "BONUS", "BOOBY", "BOOST", "BOOTH", "BOOTY", "BOOZE", "BOOZY", "BORAX", "BORNE", "BOSOM", "BOSSY", "BOTCH", "BOUGH", "BOULE", "BOUND", "BOWEL", "BOXER", "BRACE", "BRAID", "BRAIN", "BRAKE", "BRAND", "BRASH", "BRASS", "BRAVE", "BRAVO", "BRAWL", "BRAWN", "BREAD", "BREAK", "BREED", "BRIAR", "BRIBE", "BRICK", "BRIDE", "BRIEF", "BRINE", "BRING", "BRINK", "BRINY", "BRISK", "BROAD", "BROIL", "BROKE", "BROOD", "BROOK", "BROOM", "BROTH", "BROWN", "BRUNT", "BRUSH", "BRUTE", "BUDDY", "BUDGE", "BUGGY", "BUGLE", "BUILD", "BUILT", "BULGE", "BULKY", "BULLY", "BUNCH", "BUNNY", "BURLY", "BURNT", "BURST", "BUSED", "BUSHY", "BUTCH", "BUTTE", "BUXOM", "BUYER", "BYLAW", "CABAL", "CABBY", "CABIN", "CABLE", "CACAO", "CACHE", "CACTI", "CADDY", "CADET", "CAGEY", "CAIRN", "CAMEL", "CAMEO", "CANAL", "CANDY", "CANNY", "CANOE", "CANON", "CAPER", "CAPUT", "CARAT", "CARGO", "CAROL", "CARRY", "CARVE", "CASTE", "CATCH", "CATER", "CATTY", "CAULK", "CAUSE", "CAVIL", "CEASE", "CEDAR", "CELLO", "CHAFE", "CHAFF", "CHAIN", "CHAIR", "CHALK", "CHAMP", "CHANT", "CHAOS", "CHARD", "CHARM", "CHART", "CHASE", "CHASM", "CHEAP", "CHEAT", "CHECK", "CHEEK", "CHEER", "CHESS", "CHEST", "CHICK", "CHIDE", "CHIEF", "CHILD", "CHILI", "CHILL", "CHIME", "CHINA", "CHIRP", "CHOCK", "CHOIR", "CHOKE", "CHORD", "CHORE", "CHOSE", "CHUCK", "CHUMP", "CHUNK", "CHURN", "CHUTE", "CIDER", "CIGAR", "CINCH", "CIRCA", "CIVIC", "CIVIL", "CLACK", "CLAIM", "CLAMP", "CLANG", "CLANK", "CLASH", "CLASP", "CLASS", "CLEAN", "CLEAR", "CLEAT", "CLEFT", "CLERK", "CLICK", "CLIFF", "CLIMB", "CLING", "CLINK", "CLOAK", "CLOCK", "CLONE", "CLOSE", "CLOTH", "CLOUD", "CLOUT", "CLOVE", "CLOWN", "CLUCK", "CLUED", "CLUMP", "CLUNG", "COACH", "COAST", "COBRA", "COCOA", "COLON", "COLOR", "COMET", "COMFY", "COMIC", "COMMA", "CONCH", "CONDO", "CONIC", "COPSE", "CORAL", "CORER", "CORNY", "COUCH", "COUGH", "COULD", "COUNT", "COUPE", "COURT", "COVEN", "COVER", "COVET", "COVEY", "COWER", "COYLY", "CRACK", "CRAFT", "CRAMP", "CRANE", "CRANK", "CRASH", "CRASS", "CRATE", "CRAVE", "CRAWL", "CRAZE", "CRAZY", "CREAK", "CREAM", "CREDO", "CREED", "CREEK", "CREEP", "CREME", "CREPE", "CREPT", "CRESS", "CREST", "CRICK", "CRIED", "CRIER", "CRIME", "CRIMP", "CRISP", "CROAK", "CROCK", "CRONE", "CRONY", "CROOK", "CROSS", "CROUP", "CROWD", "CROWN", "CRUDE", "CRUEL", "CRUMB", "CRUMP", "CRUSH", "CRUST", "CRYPT", "CUBIC", "CUMIN", "CURIO", "CURLY", "CURRY", "CURSE", "CURVE", "CURVY", "CUTIE", "CYBER", "CYCLE", "CYNIC", "DADDY", "DAILY", "DAIRY", "DAISY", "DALLY", "DANCE", "DANDY", "DATUM", "DAUNT", "DEALT", "DEATH", "DEBAR", "DEBIT", "DEBUG", "DEBUT", "DECAL", "DECAY", "DECOR", "DECOY", "DECRY", "DEFER", "DEIGN", "DEITY", "DELAY", "DELTA", "DELVE", "DEMON", "DEMUR", "DENIM", "DENSE", "DEPOT", "DEPTH", "DERBY", "DETER", "DETOX", "DEUCE", "DEVIL", "DIARY", "DICEY", "DIGIT", "DILLY", "DIMLY", "DINER", "DINGO", "DINGY", "DIODE", "DIRGE", "DIRTY", "DISCO", "DITCH", "DITTO", "DITTY", "DIVER", "DIZZY", "DODGE", "DODGY", "DOGMA", "DOING", "DOLLY", "DONOR", "DONUT", "DOPEY", "DOUBT", "DOUGH", "DOWDY", "DOWEL", "DOWNY", "DOWRY", "DOZEN", "DRAFT", "DRAIN", "DRAKE", "DRAMA", "DRANK", "DRAPE", "DRAWL", "DRAWN", "DREAD", "DREAM", "DRESS", "DRIED", "DRIER", "DRIFT", "DRILL", "DRINK", "DRIVE", "DROIT", "DROLL", "DRONE", "DROOL", "DROOP", "DROSS", "DROVE", "DROWN", "DRUID", "DRUNK", "DRYER", "DRYLY", "DUCHY", "DULLY", "DUMMY", "DUMPY", "DUNCE", "DUSKY", "DUSTY", "DUTCH", "DUVET", "DWARF", "DWELL", "DWELT", "DYING", "EAGER", "EAGLE", "EARLY", "EARTH", "EASEL", "EATEN", "EATER", "EBONY", "ECLAT", "EDICT", "EDIFY", "EERIE", "EGRET", "EIGHT", "EJECT", "EKING", "ELATE", "ELBOW", "ELDER", "ELECT", "ELEGY", "ELFIN", "ELIDE", "ELITE", "ELOPE", "ELUDE", "EMAIL", "EMBED", "EMBER", "EMCEE", "EMPTY", "ENACT", "ENDOW", "ENEMA", "ENEMY", "ENJOY", "ENNUI", "ENSUE", "ENTER", "ENTRY", "ENVOY", "EPOCH", "EPOXY", "EQUAL", "EQUIP", "ERASE", "ERECT", "ERODE", "ERROR", "ERUPT", "ESSAY", "ESTER", "ETHER", "ETHIC", "ETHOS", "ETUDE", "EVADE", "EVENT", "EVERY", "EVICT", "EVOKE", "EXACT", "EXALT", "EXCEL", "EXERT", "EXILE", "EXIST", "EXPEL", "EXTOL", "EXTRA", "EXULT", "EYING", "FABLE", "FACET", "FAINT", "FAIRY", "FAITH", "FALSE", "FANCY", "FANNY", "FARCE", "FATAL", "FATTY", "FAULT", "FAUNA", "FAVOR", "FEAST", "FECAL", "FEIGN", "FELLA", "FELON", "FEMME", "FEMUR", "FENCE", "FERAL", "FERRY", "FETAL", "FETCH", "FETID", "FETUS", "FEVER", "FEWER", "FIBER", "FIBRE", "FICUS", "FIELD", "FIEND", "FIERY", "FIFTH", "FIFTY", "FIGHT", "FILER", "FILET", "FILLY", "FILMY", "FILTH", "FINAL", "FINCH", "FINER", "FIRST", "FISHY", "FIXER", "FIZZY", "FJORD", "FLACK", "FLAIL", "FLAIR", "FLAKE", "FLAKY", "FLAME", "FLANK", "FLARE", "FLASH", "FLASK", "FLECK", "FLEET", "FLESH", "FLICK", "FLIER", "FLING", "FLINT", "FLIRT", "FLOAT", "FLOCK", "FLOOD", "FLOOR", "FLORA", "FLOSS", "FLOUR", "FLOUT", "FLOWN", "FLUFF", "FLUID", "FLUKE", "FLUME", "FLUNG", "FLUNK", "FLUSH", "FLUTE", "FLYER", "FOAMY", "FOCAL", "FOCUS", "FOGGY", "FOIST", "FOLIO", "FOLLY", "FORAY", "FORCE", "FORGE", "FORGO", "FORTE", "FORTH", "FORTY", "FORUM", "FOUND", "FOYER", "FRAIL", "FRAME", "FRANK", "FRAUD", "FREAK", "FREED", "FREER", "FRESH", "FRIAR", "FRIED", "FRILL", "FRISK", "FRITZ", "FROCK", "FROND", "FRONT", "FROST", "FROTH", "FROWN", "FROZE", "FRUIT", "FUDGE", "FUGUE", "FULLY", "FUNGI", "FUNKY", "FUNNY", "FUROR", "FURRY", "FUSSY", "FUZZY", "GAFFE", "GAILY", "GAMER", "GAMMA", "GAMUT", "GASSY", "GAUDY", "GAUGE", "GAUNT", "GAUZE", "GAVEL", "GAWKY", "GAYER", "GAYLY", "GAZER", "GECKO", "GEEKY", "GEESE", "GENIE", "GENRE", "GHOST", "GHOUL", "GIANT", "GIDDY", "GIPSY", "GIRLY", "GIRTH", "GIVEN", "GIVER", "GLADE", "GLAND", "GLARE", "GLASS", "GLAZE", "GLEAM", "GLEAN", "GLIDE", "GLINT", "GLOAT", "GLOBE", "GLOOM", "GLORY", "GLOSS", "GLOVE", "GLYPH", "GNASH", "GNOME", "GODLY", "GOING", "GOLEM", "GOLLY", "GONAD", "GONER", "GOODY", "GOOEY", "GOOFY", "GOOSE", "GORGE", "GOUGE", "GOURD", "GRACE", "GRADE", "GRAFT", "GRAIL", "GRAIN", "GRAND", "GRANT", "GRAPE", "GRAPH", "GRASP", "GRASS", "GRATE", "GRAVE", "GRAVY", "GRAZE", "GREAT", "GREED", "GREEN", "GREET", "GRIEF", "GRILL", "GRIME", "GRIMY", "GRIND", "GRIPE", "GROAN", "GROIN", "GROOM", "GROPE", "GROSS", "GROUP", "GROUT", "GROVE", "GROWL", "GROWN", "GRUEL", "GRUFF", "GRUNT", "GUANO", "GUARD", "GUAVA", "GUESS", "GUEST", "GUIDE", "GUILD", "GUILE", "GUILT", "GUISE", "GULCH", "GULLY", "GUMBO", "GUMMY", "GUPPY", "GUSTO", "GUSTY", "GYPSY", "HABIT", "HAIRY", "HALVE", "HANDY", "HAPPY", "HARDY", "HAREM", "HARPY", "HARRY", "HARSH", "HASTE", "HASTY", "HATCH", "HATER", "HAUNT", "HAUTE", "HAVEN", "HAVOC", "HAZEL", "HEADY", "HEARD", "HEART", "HEATH", "HEAVE", "HEAVY", "HEDGE", "HEFTY", "HEIST", "HELIX", "HELLO", "HENCE", "HERON", "HILLY", "HINGE", "HIPPO", "HIPPY", "HITCH", "HOARD", "HOBBY", "HOIST", "HOLLY", "HOMER", "HONEY", "HONOR", "HORDE", "HORNY", "HORSE", "HOTEL", "HOTLY", "HOUND", "HOUSE", "HOVEL", "HOVER", "HOWDY", "HUMAN", "HUMID", "HUMOR", "HUMPH", "HUMUS", "HUNCH", "HUNKY", "HURRY", "HUSKY", "HUSSY", "HUTCH", "HYDRO", "HYENA", "HYMEN", "HYPER", "ICILY", "ICING", "IDEAL", "IDIOM", "IDIOT", "IDLER", "IDYLL", "IGLOO", "ILIAC", "IMAGE", "IMBUE", "IMPEL", "IMPLY", "INANE", "INBOX", "INCUR", "INDEX", "INEPT", "INERT", "INFER", "INGOT", "INLAY", "INLET", "INNER", "INPUT", "INTER", "INTRO", "IONIC", "IRATE", "IRONY", "ISLET", "ISSUE", "ITCHY", "IVORY", "JAUNT", "JAZZY", "JELLY", "JERKY", "JETTY", "JEWEL", "JIFFY", "JOINT", "JOIST", "JOKER", "JOLLY", "JOUST", "JUDGE", "JUICE", "JUICY", "JUMBO", "JUMPY", "JUNTA", "JUNTO", "JUROR", "KAPPA", "KARMA", "KAYAK", "KEBAB", "KHAKI", "KINKY", "KIOSK", "KITTY", "KNACK", "KNAVE", "KNEAD", "KNEED", "KNEEL", "KNELT", "KNIFE", "KNOCK", "KNOLL", "KNOWN", "KOALA", "KRILL", "LABEL", "LABOR", "LADEN", "LADLE", "LAGER", "LANCE", "LANKY", "LAPEL", "LAPSE", "LARGE", "LARVA", "LASSO", "LATCH", "LATER", "LATHE", "LATTE", "LAUGH", "LAYER", "LEACH", "LEAFY", "LEAKY", "LEANT", "LEAPT", "LEARN", "LEASE", "LEASH", "LEAST", "LEAVE", "LEDGE", "LEECH", "LEERY", "LEFTY", "LEGAL", "LEGGY", "LEMON", "LEMUR", "LEPER", "LEVEL", "LEVER", "LIBEL", "LIEGE", "LIGHT", "LIKEN", "LILAC", "LIMBO", "LIMIT", "LINEN", "LINER", "LINGO", "LIPID", "LITHE", "LIVER", "LIVID", "LLAMA", "LOAMY", "LOATH", "LOBBY", "LOCAL", "LOCUS", "LODGE", "LOFTY", "LOGIC", "LOGIN", "LOOPY", "LOOSE", "LORRY", "LOSER", "LOUSE", "LOUSY", "LOVER", "LOWER", "LOWLY", "LOYAL", "LUCID", "LUCKY", "LUMEN", "LUMPY", "LUNAR", "LUNCH", "LUNGE", "LUPUS", "LURCH", "LURID", "LUSTY", "LYING", "LYMPH", "LYNCH", "LYRIC", "MACAW", "MACHO", "MACRO", "MADAM", "MADLY", "MAFIA", "MAGIC", "MAGMA", "MAIZE", "MAJOR", "MAKER", "MAMBO", "MAMMA", "MAMMY", "MANGA", "MANGE", "MANGO", "MANGY", "MANIA", "MANIC", "MANLY", "MANOR", "MAPLE", "MARCH", "MARRY", "MARSH", "MASON", "MASSE", "MATCH", "MATEY", "MAUVE", "MAXIM", "MAYBE", "MAYOR", "MEALY", "MEANT", "MEATY", "MECCA", "MEDAL", "MEDIA", "MEDIC", "MELEE", "MELON", "MERCY", "MERGE", "MERIT", "MERRY", "METAL", "METER", "METRO", "MICRO", "MIDGE", "MIDST", "MIGHT", "MILKY", "MIMIC", "MINCE", "MINER", "MINIM", "MINOR", "MINTY", "MINUS", "MIRTH", "MISER", "MISSY", "MOCHA", "MODAL", "MODEL", "MODEM", "MOGUL", "MOIST", "MOLAR", "MOLDY", "MONEY", "MONTH", "MOODY", "MOOSE", "MORAL", "MORON", "MORPH", "MOSSY", "MOTEL", "MOTIF", "MOTOR", "MOTTO", "MOULT", "MOUND", "MOUNT", "MOURN", "MOUSE", "MOUTH", "MOVER", "MOVIE", "MOWER", "MUCKY", "MUCUS", "MUDDY", "MULCH", "MUMMY", "MUNCH", "MURAL", "MURKY", "MUSHY", "MUSIC", "MUSKY", "MUSTY", "MYRRH", "NADIR", "NAIVE", "NANNY", "NASAL", "NASTY", "NATAL", "NAVAL", "NAVEL", "NEEDY", "NEIGH", "NERDY", "NERVE", "NEVER", "NEWER", "NEWLY", "NICER", "NICHE", "NIECE", "NIGHT", "NINJA", "NINNY", "NINTH", "NOBLE", "NOBLY", "NOISE", "NOISY", "NOMAD", "NOOSE", "NORTH", "NOSEY", "NOTCH", "NOVEL", "NUDGE", "NURSE", "NUTTY", "NYLON", "NYMPH", "OAKEN", "OBESE", "OCCUR", "OCEAN", "OCTAL", "OCTET", "ODDER", "ODDLY", "OFFAL", "OFFER", "OFTEN", "OLDEN", "OLDER", "OLIVE", "OMBRE", "OMEGA", "ONION", "ONSET", "OPERA", "OPINE", "OPIUM", "OPTIC", "ORATE", "ORBIT", "ORDER", "ORGAN", "OTHER", "OTTER", "OUGHT", "OUNCE", "OUTDO", "OUTER", "OUTGO", "OVARY", "OVATE", "OVERT", "OVINE", "OVOID", "OWING", "OWNER", "OXIDE", "OZONE", "PADDY", "PAGAN", "PAINT", "PALER", "PALSY", "PANEL", "PANIC", "PANSY", "PAPAL", "PAPER", "PARER", "PARKA", "PARRY", "PARSE", "PARTY", "PASTA", "PASTE", "PASTY", "PATCH", "PATIO", "PATSY", "PATTY", "PAUSE", "PAYEE", "PAYER", "PEACE", "PEACH", "PEARL", "PECAN", "PEDAL", "PENAL", "PENCE", "PENNE", "PENNY", "PERCH", "PERIL", "PERKY", "PESKY", "PESTO", "PETAL", "PETTY", "PHASE", "PHONE", "PHONY", "PHOTO", "PIANO", "PICKY", "PIECE", "PIETY", "PIGGY", "PILOT", "PINCH", "PINEY", "PINKY", "PINTO", "PIPER", "PIQUE", "PITCH", "PITHY", "PIVOT", "PIXEL", "PIXIE", "PIZZA", "PLACE", "PLAID", "PLAIN", "PLAIT", "PLANE", "PLANK", "PLANT", "PLATE", "PLAZA", "PLEAD", "PLEAT", "PLIED", "PLIER", "PLUCK", "PLUMB", "PLUME", "PLUMP", "PLUNK", "PLUSH", "POACH", "POESY", "POINT", "POISE", "POKER", "POLAR", "POLKA", "POLYP", "POOCH", "POPPY", "PORCH", "POSER", "POSIT", "POSSE", "POUCH", "POUND", "POUTY", "POWER", "PRANK", "PRAWN", "PREEN", "PRESS", "PRICE", "PRICK", "PRIDE", "PRIED", "PRIME", "PRIMO", "PRINT", "PRIOR", "PRISM", "PRIVY", "PRIZE", "PROBE", "PRONE", "PRONG", "PROOF", "PROSE", "PROUD", "PROVE", "PROWL", "PROXY", "PRUDE", "PRUNE", "PSALM", "PUBIC", "PUDGY", "PUFFY", "PULPY", "PULSE", "PUNCH", "PUPAL", "PUPIL", "PUPPY", "PUREE", "PURER", "PURGE", "PURSE", "PUSHY", "PUTTY", "PYGMY", "QUACK", "QUAIL", "QUAKE", "QUALM", "QUARK", "QUART", "QUASH", "QUASI", "QUEEN", "QUEER", "QUELL", "QUERY", "QUEST", "QUEUE", "QUICK", "QUIET", "QUILL", "QUILT", "QUIRK", "QUITE", "QUOTA", "QUOTE", "QUOTH", "RABBI", "RABID", "RACER", "RADAR", "RADII", "RADIO", "RAINY", "RAISE", "RAJAH", "RALLY", "RALPH", "RAMEN", "RANCH", "RANDY", "RANGE", "RAPID", "RARER", "RASPY", "RATIO", "RATTY", "RAVEN", "RAYON", "RAZOR", "REACH", "REACT", "READY", "REALM", "REARM", "REBAR", "REBEL", "REBUS", "REBUT", "RECAP", "RECUR", "RECUT", "REEDY", "REFER", "REFIT", "REGAL", "REHAB", "REIGN", "RELAX", "RELAY", "RELIC", "REMIT", "RENAL", "RENEW", "REPAY", "REPEL", "REPLY", "REPOST", "RERUN", "RESET", "RESIN", "RETCH", "RETRO", "RETRY", "REUSE", "REVEL", "REVUE", "RHINO", "RHYME", "RIDER", "RIDGE", "RIFLE", "RIGHT", "RIGID", "RIGOR", "RINSE", "RIPEN", "RIPER", "RISEN", "RISER", "RISKY", "RIVAL", "RIVER", "RIVET", "ROACH", "ROAST", "ROBIN", "ROBOT", "ROCKY", "RODEO", "ROGER", "ROGUE", "ROOMY", "ROOST", "ROTOR", "ROUGE", "ROUGH", "ROUND", "ROUSE", "ROUTE", "ROVER", "ROWDY", "ROWER", "ROYAL", "RUDDY", "RUDER", "RUGBY", "RULER", "RUMBA", "RUMOR", "RUPEE", "RURAL", "RUSTY", "SADLY", "SAFER", "SAINT", "SALAD", "SALLY", "SALON", "SALSA", "SALTY", "SALVE", "SALVO", "SANDY", "SANER", "SAPPY", "SASSY", "SATIN", "SATYR", "SAUCE", "SAUCY", "SAUNA", "SAUTE", "SAVOR", "SAVOY", "SAVVY", "SCALD", "SCALE", "SCALP", "SCALY", "SCAMP", "SCANT", "SCARE", "SCARF", "SCARY", "SCENE", "SCENT", "SCION", "SCOFF", "SCOLD", "SCONE", "SCOOP", "SCOPE", "SCORE", "SCORN", "SCOUR", "SCOUT", "SCOWL", "SCRAM", "SCRAP", "SCREE", "SCREW", "SCRUB", "SCRUM", "SCUBA", "SEDAN", "SEEDY", "SEGUE", "SEIZE", "SEMEN", "SENSE", "SEPIA", "SERIF", "SERUM", "SERVE", "SETUP", "SEVEN", "SEVER", "SEWER", "SHACK", "SHADE", "SHADY", "SHAFT", "SHAKE", "SHAKY", "SHALE", "SHALL", "SHALT", "SHAME", "SHANK", "SHAPE", "SHARD", "SHARE", "SHARK", "SHARP", "SHAVE", "SHAWL", "SHEAR", "SHEEN", "SHEEP", "SHEER", "SHEET", "SHEIK", "SHELF", "SHELL", "SHIED", "SHIFT", "SHINE", "SHINY", "SHIRE", "SHIRK", "SHIRT", "SHOAL", "SHOCK", "SHONE", "SHOOK", "SHOOT", "SHORE", "SHORN", "SHORT", "SHOUT", "SHOVE", "SHOWN", "SHOWY", "SHREW", "SHRUB", "SHRUG", "SHUCK", "SHUNT", "SHUSH", "SHYLY", "SIEGE", "SIEVE", "SIGHT", "SIGMA", "SILKY", "SILLY", "SINCE", "SINEW", "SINGE", "SIREN", "SISSY", "SIXTH", "SIXTY", "SKATE", "SKIER", "SKIFF", "SKILL", "SKIMP", "SKIRT", "SKULK", "SKULL", "SKUNK", "SLACK", "SLAIN", "SLANG", "SLANT", "SLASH", "SLATE", "SLAVE", "SLEEK", "SLEEP", "SLEET", "SLEPT", "SLICE", "SLICK", "SLIDE", "SLIME", "SLIMY", "SLING", "SLINK", "SLOOP", "SLOPE", "SLOSH", "SLOTH", "SLUMP", "SLUNG", "SLUNK", "SLURP", "SLUSH", "SLYLY", "SMACK", "SMALL", "SMART", "SMASH", "SMEAR", "SMELL", "SMELT", "SMILE", "SMIRK", "SMITE", "SMITH", "SMOCK", "SMOKE", "SMOKY", "SMOTE", "SNACK", "SNAIL", "SNAKE", "SNAKY", "SNARE", "SNARL", "SNEAK", "SNEER", "SNIDE", "SNIFF", "SNIPE", "SNOOP", "SNORE", "SNORT", "SNOUT", "SNOWY", "SNUCK", "SNUFF", "SOAPY", "SOBER", "SOGGY", "SOLAR", "SOLID", "SOLVE", "SONAR", "SONIC", "SOOTH", "SOOTY", "SORRY", "SOUND", "SOUTH", "SOWER", "SPACE", "SPADE", "SPANK", "SPARE", "SPARK", "SPASM", "SPAWN", "SPEAK", "SPEAR", "SPECK", "SPEED", "SPELL", "SPELT", "SPEND", "SPENT", "SPERM", "SPICE", "SPICY", "SPIED", "SPIEL", "SPIKE", "SPIKY", "SPILL", "SPILT", "SPINE", "SPINY", "SPIRE", "SPITE", "SPLAT", "SPLIT", "SPOIL", "SPOKE", "SPOOF", "SPOOK", "SPOOL", "SPOON", "SPORE", "SPORT", "SPOUT", "SPRAY", "SPREE", "SPRIG", "SPUNK", "SPURN", "SPURT", "SQUAD", "SQUAT", "SQUIB", "STACK", "STAFF", "STAGE", "STAID", "STAIN", "STAIR", "STAKE", "STALE", "STALK", "STALL", "STAMP", "STAND", "STANK", "STARE", "STARK", "START", "STASH", "STATE", "STAVE", "STEAD", "STEAK", "STEAL", "STEAM", "STEED", "STEEL", "STEEP", "STEER", "STEIN", "STERN", "STICK", "STIFF", "STILL", "STILT", "STING", "STINK", "STINT", "STOCK", "STOIC", "STOKE", "STOLE", "STOMP", "STONE", "STONY", "STOOD", "STOOL", "STOOP", "STORE", "STORK", "STORM", "STORY", "STOUT", "STOVE", "STRAP", "STRAW", "STRAY", "STRIP", "STRUT", "STUCK", "STUDY", "STUFF", "STUMP", "STUNG", "STUNK", "STUNT", "STYLE", "SUAVE", "SUGAR", "SUING", "SUITE", "SULKY", "SULLY", "SUMAC", "SUNNY", "SUPER", "SURER", "SURGE", "SURLY", "SUSHI", "SWAMI", "SWAMP", "SWARM", "SWASH", "SWATH", "SWEAR", "SWEAT", "SWEEP", "SWEET", "SWELL", "SWEPT", "SWIFT", "SWILL", "SWINE", "SWING", "SWIRL", "SWISH", "SWOON", "SWOOP", "SWORD", "SWORE", "SWORN", "SWUNG", "SYNOD", "SYRUP", "TABBY", "TABLE", "TABOO", "TACIT", "TACKY", "TAFFY", "TAINT", "TAKEN", "TAKER", "TALLY", "TALON", "TAMER", "TANGO", "TANGY", "TAPER", "TAPIR", "TARDY", "TAROT", "TASTE", "TASTY", "TATTY", "TAUNT", "TAWNY", "TEACH", "TEARY", "TEASE", "TEDDY", "TEETH", "TEMPO", "TENET", "TENOR", "TENSE", "TENTH", "TEPEE", "TEPID", "TERRA", "TERSE", "TESTY", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THETA", "THICK", "THIEF", "THIGH", "THING", "THINK", "THIRD", "THONG", "THORN", "THOSE", "THREE", "THREW", "THROB", "THROW", "THRUM", "THUMB", "THUMP", "THYME", "TIARA", "TIBIA", "TIDAL", "TIGER", "TIGHT", "TILDE", "TIMER", "TIMID", "TIPSY", "TITAN", "TITHE", "TITLE", "TOAST", "TODAY", "TODDY", "TOKEN", "TONAL", "TONGA", "TONIC", "TOOTH", "TOPAZ", "TOPIC", "TORCH", "TORSO", "TORUS", "TOTAL", "TOTEM", "TOUCH", "TOUGH", "TOWEL", "TOWER", "TOXIC", "TOXIN", "TRACE", "TRACK", "TRACT", "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRAMP", "TRASH", "TRAWL", "TREAD", "TREAT", "TREND", "TRIAD", "TRIAL", "TRIBE", "TRICE", "TRICK", "TRIED", "TRIPE", "TRITE", "TROLL", "TROOP", "TROPE", "TROUT", "TROVE", "TRUCE", "TRUCK", "TRUER", "TRULY", "TRUMP", "TRUNK", "TRUSS", "TRUST", "TRUTH", "TRYST", "TUBAL", "TUBER", "TULIP", "TULLE", "TUMOR", "TUNIC", "TURBO", "TUTOR", "TWANG", "TWEAK", "TWEED", "TWEET", "TWICE", "TWINE", "TWIRL", "TWIST", "TWIXT", "TYING", "UDDER", "ULCER", "ULTRA", "UMBRA", "UNCLE", "UNCUT", "UNDER", "UNDID", "UNDUE", "UNFED", "UNFIT", "UNIFY", "UNION", "UNITE", "UNITY", "UNLIT", "UNMET", "UNSET", "UNTIE", "UNTIL", "UNWED", "UNZIP", "UPPER", "UPSET", "URBAN", "URINE", "USAGE", "USHER", "USING", "USUAL", "USURP", "UTILE", "UTTER", "VAGUE", "VALET", "VALID", "VALOR", "VALUE", "VALVE", "VAPID", "VAPOR", "VAULT", "VAUNT", "VEGAN", "VENOM", "VENUE", "VERGE", "VERSE", "VERSO", "VERVE", "VICAR", "VIDEO", "VIGIL", "VIGOR", "VILLA", "VINYL", "VIOLA", "VIPER", "VIRAL", "VIRUS", "VISIT", "VISOR", "VISTA", "VITAL", "VIVID", "VIXEN", "VOCAL", "VODKA", "VOGUE", "VOICE", "VOILA", "VOMIT", "VOTER", "VOUCH", "VOWEL", "VYING", "WACKY", "WAFER", "WAGER", "WAGON", "WAIST", "WAIVE", "WALTZ", "WARTY", "WASTE", "WATCH", "WATER", "WAVER", "WAXEN", "WEARY", "WEAVE", "WEDGE", "WEEDY", "WEIGH", "WEIRD", "WELCH", "WELSH", "WENCH", "WHACK", "WHALE", "WHARF", "WHEAT", "WHEEL", "WHELP", "WHERE", "WHICH", "WHIFF", "WHILE", "WHINE", "WHINY", "WHIRL", "WHISK", "WHITE", "WHOLE", "WHOOP", "WHOSE", "WIDEN", "WIDER", "WIDOW", "WIDTH", "WIELD", "WIGHT", "WILLY", "WIMPY", "WINCE", "WINCH", "WINDY", "WISER", "WISPY", "WITCH", "WITTY", "WOKEN", "WOMAN", "WOMEN", "WOODY", "WOOER", "WOOLY", "WOOZY", "WORDY", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WOVEN", "WRACK", "WRATH", "WREAK", "WRECK", "WREST", "WRING", "WRIST", "WRITE", "WRONG", "WROTE", "WRUNG", "WRYLY", "YACHT", "YEARN", "YEAST", "YIELD", "YOUNG", "YOUTH", "ZEBRA", "ZESTY", "ZONAL"];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const wordleGreen = "rgb(106, 170, 100)";
const wordleYellow = "rgb(201, 180, 88)";
const wordleGray = "rgb(120, 124, 126)";
const letterIndeces = ["one", "two", "three", "four", "five"];
let currentIndex = 0;

// presets all Wordle tiles to wordleGray
for (let i = 0; i < letterIndeces.length * 5; i++) {
    document.getElementsByClassName("wordleLetter")[i].style.backgroundColor = wordleGray;
}

const keyboardPress = key => {
    if (key === "Backspace" && currentIndex > 0) {
        document.getElementsByClassName("wordleLetter")[--currentIndex].innerHTML = "";
    }
    else if (key === "Enter") {

        // separate letters in green, yellow, and gray
        let grays = [];
        let greens = letterIndeces.map(() => {
            return "*";
        });
        let yellow = [];
        letterIndeces.forEach(index => {
            for (let i = 0; i < 5; i++) {
    
                // creates green word
                if (document.getElementsByClassName(index)[i].style.backgroundColor == wordleGreen) {
                    greens[letterIndeces.indexOf(index)] = document.getElementsByClassName(index)[i].innerHTML;
                }
    
                // fills out yellow array
                if (document.getElementsByClassName(index)[i].style.backgroundColor == wordleYellow && !yellow.includes(document.getElementsByClassName(index)[i].innerHTML)) {
                    yellow.push({
                        letter: document.getElementsByClassName(index)[i].innerHTML,
                        index: letterIndeces.indexOf(index)
                    });
                }
            }
        });
    
        // creates green word
        let green = greens.reduce((greenWord, letter) => {
            return greenWord + letter;
        });
    
        // determine all combinations of green words
        let possibilities = [];
        for (let i1 = 0; i1 < alphabet.length; i1++) {
            let ch1 = "";
            if (green.charAt(0) !== "*") {
                ch1 = green.charAt(0);
                i1 = alphabet.length;
            }
            else {
                ch1 = alphabet[i1];
            }
            for (let i2 = 0; i2 < alphabet.length; i2++) {
                let ch2 = "";
                if (green.charAt(1) !== "*") {
                    ch2 = green.charAt(1);
                    i2 = alphabet.length;
                }
                else {
                    ch2 = alphabet[i2];
                }
                for (let i3 = 0; i3 < alphabet.length; i3++) {
                    let ch3 = "";
                    if (green.charAt(2) !== "*") {
                        ch3 = green.charAt(2);
                        i3 = alphabet.length;
                    }
                    else {
                        ch3 = alphabet[i3];
                    }
                    for (let i4 = 0; i4 < alphabet.length; i4++) {
                        let ch4 = "";
                        if (green.charAt(3) !== "*") {
                            ch4 = green.charAt(3);
                            i4 = alphabet.length;
                        }
                        else {
                            ch4 = alphabet[i4];
                        }
                        for (let i5 = 0; i5 < alphabet.length; i5++) {
                            let ch5 = "";
                            if (green.charAt(4) !== "*") {
                                ch5 = green.charAt(4);
                                i5 = alphabet.length;
                            }
                            else {
                                ch5 = alphabet[i5];
                            }
                            possibilities.push(`${ch1}${ch2}${ch3}${ch4}${ch5}`);
                        }
                    }
                }
            }
        }
    
        // remove words without yellow letters and with yellow letters in the wrong spot
        yellow.forEach(yel => {
            possibilities = possibilities.filter(possibility => {
                for (let i = 0; i < letterIndeces.length; i++) {
                    if (i === yel.index && possibility.charAt(i) == yel.letter) {
                        return false;
                    }
                }
                return possibility.includes(yel.letter);
            });
        });
    
        // removes words that aren't in Wordle
        possibilities = possibilities.filter(possibility => {
            let remove = true;
            words.forEach(word => {
                if (word === possibility) {
                    remove = false;
                }
            });
            return !remove;
        });
    
        // adds grays from Wordle letters
        for (let i = 0; i < currentIndex; i++) {
            if (document.getElementsByClassName("wordleLetter")[i].style.backgroundColor == wordleGray && yellow.every((yel) => {
                    return yel.letter != document.getElementsByClassName("wordleLetter")[i].innerHTML;
                }) && !greens.includes(document.getElementsByClassName("wordleLetter")[i].innerHTML)) {
                grays.push(document.getElementsByClassName("wordleLetter")[i].innerHTML);
            }
        }
    
        // removes possibilities with gray letters
        grays.forEach(gray => {
            possibilities = possibilities.filter(possibility => {
                return !possibility.includes(gray);
            });
        });
    
        // display possibilities
        document.getElementById("results").innerHTML = "";
        if (possibilities.length > 0) {
            possibilities.forEach(possibility => {
                document.getElementById("results").innerHTML += `<li>${possibility}</li>`;
            });
        }
        else {
            document.getElementById("results").innerHTML = "NO MATCHES";
        }
    }
    else if (alphabet.includes(key.toUpperCase()) && alphabet.includes(key.toUpperCase()) && currentIndex < letterIndeces.length * 5) {
        document.getElementsByClassName("wordleLetter")[currentIndex].innerHTML = key.toUpperCase();
        currentIndex++;
    }
}

// backspace in the wordle answer focuses on the previous letter
// https://www.geeksforgeeks.org/ways-to-capture-the-backspace-and-delete-on-the-onkeydown-event/
document.getElementsByTagName("BODY")[0].onkeyup = event => {
    keyboardPress(event.key);
}

// makes a letter gray if you select it on the keyboard
alphabet.forEach(letter => {
    document.getElementById(letter).onclick = () => {
        keyboardPress(letter);
    }
});

// backspace button on keyboard
document.getElementById("backspace").onclick = () => {
    keyboardPress("Backspace");
}

// ENTER button on keyboard
document.getElementById("enter").onclick = () => {
    keyboardPress("Enter");
}

// changes the color of the Wordle tile
for (let i = 0; i < letterIndeces.length * 5; i++) {
    document.getElementsByClassName("greenSquare")[i].onclick = () => {
        document.getElementsByClassName("wordleLetter")[i].style.backgroundColor = wordleGreen;
        document.getElementsByClassName("wordleLetterWrapper")[i].style.backgroundColor = wordleGreen;
    };
    document.getElementsByClassName("yellowSquare")[i].onclick = () => {
        document.getElementsByClassName("wordleLetter")[i].style.backgroundColor = wordleYellow;
        document.getElementsByClassName("wordleLetterWrapper")[i].style.backgroundColor = wordleYellow;
    };
    document.getElementsByClassName("graySquare")[i].onclick = () => {
        document.getElementsByClassName("wordleLetter")[i].style.backgroundColor = wordleGray;
        document.getElementsByClassName("wordleLetterWrapper")[i].style.backgroundColor = wordleGray;
    };
}