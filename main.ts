let yLäufer = 0
let xLäufer = 0
tiles.setTilemap(tiles.createTilemap(hex`10001000080a0a03000000000000000000000000080a0a03000000000000000000000000080a0a02040404040404040404040000080a0a0a0a0a0a0a0a0a0a0a0c0a0000080a0a0a0a0a0a0a0a0a0a0a0c0a0000080b0b06090909070a0a060909090000080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a010000000000080a0a03000000080a0a010000000000080a0a03000000080a0a030000000000080a0a02040404050b0b030000000000080a0a0a0a0a0a0a0a0a030000000000080a0a0a0a0a0a0a0a0a03000000000009090909090909090909090000000000`, img`
    2 . . 2 . . . . . . . . . . . . 
    2 . . 2 . . . . . . . . . . . . 
    2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 . . . . . . . . . . . 2 . . . 
    2 . . . . . . . . . . . 2 . . . 
    2 2 2 2 2 2 2 2 . . . . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 2 2 2 2 2 2 2 . . . . . 
    2 . . . . . . . . . 2 . . . . . 
    2 . . . . . . . . . 2 . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical], TileScale.Sixteen))
let Läufer = sprites.create(img`
    ........................
    ........................
    ........................
    ................eeeeef..
    ................ffeeee..
    ................eeffff..
    ................f222ef..
    ................ffffff..
    ................be44ef..
    ................b4d4ee..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Läufer, 60, 40)
scene.cameraFollowSprite(Läufer)
forever(function () {
    xLäufer = Läufer.x
    yLäufer = Läufer.y
    if (yLäufer == 11) {
        tiles.setTileAt(tiles.getTileLocation(8, 12), sprites.dungeon.floorLight0)
        tiles.setWallAt(tiles.getTileLocation(8, 12), false)
        tiles.setTileAt(tiles.getTileLocation(9, 12), sprites.dungeon.floorLight0)
        tiles.setWallAt(tiles.getTileLocation(9, 12), false)
        tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.vehicle.roadHorizontal)
        tiles.setWallAt(tiles.getTileLocation(9, 4), true)
    }
})
