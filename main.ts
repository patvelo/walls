scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(1, 5), false)
    tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.vehicle.roadHorizontal)
    tiles.setWallAt(tiles.getTileLocation(8, 5), true)
    tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.vehicle.roadHorizontal)
    tiles.setWallAt(tiles.getTileLocation(9, 5), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(12, 4), false)
})
tiles.setTilemap(tiles.createTilemap(hex`10001000080a0a03000000000000000000000000080a0a03000000000000000000000000080a0a02040404040404040404040000080a0a0a0a0a0a0a0a0a0a0a0c0a0000080a0a0a0a0a0a0a0a0a0a0a0c0a0000080b0b06090909070a0a060909090000080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a010000000000080a0a03000000080a0a010000000000080a0a03000000080a0a030000000000080a0a02040404050d0d030000000000080a0a0a0a0a0a0a0a0a030000000000080a0a0a0a0a0a0a0a0a03000000000009090909090909090909090000000000`, img`
    2 . . 2 . . . . . . . . . . . . 
    2 . . 2 . . . . . . . . . . . . 
    2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 . . . . . . . . . . . 2 . . . 
    2 . . . . . . . . . . . 2 . . . 
    2 2 2 2 2 2 2 2 . . 2 2 2 2 . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 2 2 2 2 . 2 2 . . . . . 
    2 . . . . . . . . . 2 . . . . . 
    2 . . . . . . . . . 2 . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,myTiles.tile2], TileScale.Sixteen))
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
Läufer.setPosition(20, 10)
controller.moveSprite(Läufer, 47, 40)
scene.cameraFollowSprite(Läufer)
