const GAME_WIDTH = 350;
const GAME_HEIGHT = 450;
const TILE_COLUMNS = 7;
const TILE_ROWS = 9;
const TILE_PADDING = 3;//for seperating the obstacles
const TILE_PAD_POWER = 12;//for separating power-ups
const TILE_PAD_SQUARE = TILE_PADDING * 2;
const TILE_WIDTH = Math.floor(GAME_WIDTH/7);
const TILE_HEIGHT = Math.floor(GAME_HEIGHT/9);
const OBSTACLE_WIDTH = TILE_WIDTH - TILE_PAD_SQUARE;
const OBSTACLE_HEIGHT = TILE_HEIGHT - TILE_PAD_SQUARE;
const LINE_WIDTH = 3;
const POWER_UPS_WIDTH = OBSTACLE_WIDTH/2 + 5; //inside tile
const POWER_UPS_HEIGHT = OBSTACLE_HEIGHT/2 + 5; // inside tile
const BALL_RADIUS = 6;
const BALL_VELOCITY = 7;
const BALL_Y_DEAD = 442;
const BALL_GAP = 30;

//Ball shooting angle limit-------------------------------------------------------------------------------------------
const LOWEST_ANGLE = 0.261799;
const LARGEST_ANGLE = 2.87979;

//Sprite-Sheet locations and dimensions-------------------------------------------------------------------------------

const POWER_UPS_X = 210;
const POWER_UPS_Y = 361;
const POWER_UPS_SIZE = 29; //square image so same for height and width

//TILE_MAPPING--------------------------------------------------------------------------------------------------------
const BLANK = 0;
const SQUARE = 1;
const TRIANGLE_BOT_LEFT = 2;
const TRIANGLE_BOT_RIGHT = 3;
const TRIANGLE_TOP_LEFT = 4;
const TRIANGLE_TOP_RIGHT = 5;
const COIN = 6;
const PLUS_BALL = 7
const POWER_HORZ = 8;
const POWER_SPLIT = 9;
const POWER_VERT = 10;

